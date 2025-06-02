import { createContext, useEffect, useState, useMemo } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile
} from 'firebase/auth'
import { updateDoc, doc, setDoc } from 'firebase/firestore'
import { auth, db } from '../firebase'  // Ya no importamos storage ni funciones de storage

const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const signup = async (email, password, username) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const registeredUser = userCredential.user

    await setDoc(doc(db, 'users', registeredUser.uid), {
      username: username,
      description: '',
      profilePicture: 'https://picsum.photos/150', // Imagen por defecto
      email: email
    })

    await updateProfile(registeredUser, {
      displayName: username,
      photoURL: 'https://picsum.photos/150'
    })

    setUser({
      ...registeredUser,
      displayName: username,
      photoURL: 'https://picsum.photos/150'
    })
  }

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password)

  const logout = () => signOut(auth)

 const uploadImageToCloudinary = async (imageFile) => {
  const url = `https://api.cloudinary.com/v1_1/dhyg8srva/upload`
  const formData = new FormData()
  formData.append('file', imageFile)
  formData.append('upload_preset', 'precioso') // Asegúrate que este es tu preset correcto

  try {
    const res = await fetch(url, {
      method: 'POST',
      body: formData
    })

    if (!res.ok) {
      throw new Error('Error uploading image')
    }

    const data = await res.json()
    console.log('Cloudinary response data:', data)  // Imprime la respuesta de Cloudinary

    if (data && data.secure_url) {
      console.log('Image uploaded successfully, URL:', data.secure_url)  // Imprime la URL segura de la imagen
      return data.secure_url
    } else {
      throw new Error('Cloudinary did not return a valid URL')
    }
  } catch (error) {
    console.error('Cloudinary upload error:', error)
    throw error
  }
}


  // Ahora updateProfileImage solo recibe una URL de imagen y la guarda directamente
  const updateProfileImage = async (imageUrl) => {
    if (user) {
      try {
        await updateDoc(doc(db, 'users', user.uid), { profilePicture: imageUrl })

        await updateProfile(auth.currentUser, { photoURL: imageUrl })

        setUser((prevUser) => ({
          ...prevUser,
          photoURL: imageUrl
        }))
      } catch (error) {
        console.error('Error updating profile image:', error)
      }
    }
  }
  

  const updateUserDescription = async (description) => {
    if (user) {
      try {
        await updateDoc(doc(db, 'users', user.uid), { description })

        setUser((prevUser) => ({
          ...prevUser,
          description
        }))
      } catch (error) {
        console.error('Error updating user description:', error)
      }
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  const value = useMemo(() => ({
    signup,
    login,
    logout,
    user,
    loading,
    updateProfileImage,
    updateUserDescription,
    uploadImageToCloudinary
  }), [user, loading])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContext
