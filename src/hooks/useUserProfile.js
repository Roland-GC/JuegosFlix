import { useState, useEffect } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from './useAuth'

export function useUserProfile() {
  const { user } = useAuth()
  const [userData, setUserData] = useState(null)
  const [loadingUserData, setLoadingUserData] = useState(true)

  useEffect(() => {
    // Si no hay usuario, no hacemos nada
    if (!user?.uid) {
      setUserData(null)
      setLoadingUserData(false)
      return
    }

    // Referencia al documento de usuario en Firestore
    const userDocRef = doc(db, 'users', user.uid)

    // Suscripción al documento para escuchar los cambios
    const unsubscribe = onSnapshot(
      userDocRef,
      (docSnapshot) => {
        if (docSnapshot.exists()) {
          // Si el documento existe, actualizamos el estado
          setUserData({
            id: docSnapshot.id,...docSnapshot.data() // Esto actualiza todo el estado, incluida la imagen y la descripción
          })
        } else {
          // Si no existe, reiniciamos el estado
          setUserData(null)
        }
        setLoadingUserData(false) // Terminamos la carga
      },
      (error) => {
        console.error('Error listening user profile:', error)
        setLoadingUserData(false) // Terminamos la carga en caso de error
      }
    )

    // Desuscribirse al desmontar el componente o cuando cambie el `uid`
    return () => unsubscribe()
  }, [user?.uid]) // Se vuelve a ejecutar cuando cambia el `uid`

  return { userData, loadingUserData }
}
