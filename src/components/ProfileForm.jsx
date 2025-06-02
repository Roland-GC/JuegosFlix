import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore'; // Importar onSnapshot
import './ProfileForm.css';
import { updateProfile } from 'firebase/auth';
import { db } from '../firebase';
import { useUserProfile } from '../hooks/useUserProfile'

export function ProfileForm() {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const { user, uploadImageToCloudinary } = useAuth();  // Ahora puedes usar la función desde el contexto

  const { userData } = useUserProfile()

  const fileInputRef = useRef(null);
  
  useEffect(() => {
    if (userData?.description) {
      setDescription(userData.description)
    }
  }, [userData?.description])



  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'];
    const maxSize = 4 * 1024 * 1024; // 4MB

    if (!validTypes.includes(file.type)) {
      alert('Only JPG, PNG, JPG or WEBP files are allowed.');
      return;
    }

    if (file.size > maxSize) {
      alert('File size should be less than 4MB.');
      return;
    }

    setImage(file);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const updateUserDescription = async (description) => {
    if (!user) throw new Error('No authenticated user');
    const userRef = doc(db, 'users', user.uid);
    await updateDoc(userRef, {
      description: description
    });
  };

  const uploadProfileImage = async (imageFile) => {
    if (!user) throw new Error('No authenticated user');

    // Subimos la imagen a Cloudinary
    const imageUrl = await uploadImageToCloudinary(imageFile);

    // Actualizamos la imagen en Firebase Auth
    await updateProfile(user, { photoURL: imageUrl });

    // Actualizamos la imagen en Firestore
    const userRef = doc(db, 'users', user.uid);
    await updateDoc(userRef, { profilePicture: imageUrl });

    return imageUrl;
  };

  const sanitizeText = (text) => {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  };


const handleSubmit = async (e) => {
  e.preventDefault();
  console.group('Profile Update Process');

  try {
    if (description) {
      if (description.length > 300) {
        alert('Description is too long (max 300 characters).');
        return;
      }

      const cleanDescription = sanitizeText(description);
      await updateUserDescription(cleanDescription);
      console.log('User description updated successfully.');
      
      // Limpiar el campo de descripción
      setDescription(''); // Asumiendo que tienes el estado 'description'
    } else {
      console.log('No new description to update.');
    }

    if (image) {
      const uploadedUrl = await uploadProfileImage(image);
      console.log('Profile image uploaded successfully:', uploadedUrl);

      // Limpiar el estado de la imagen
      setImage(null); // Asumiendo que tienes el estado 'image'
    }
  } catch (error) {
    console.error('Error during profile update:', error);
    alert('Error updating profile: ' + error.message);
  } finally {
    console.groupEnd();
  }
};


  return (
    <>
      <section>
        <h4>User Information</h4>
        <p>
          Profile Picture:
          <img
            className='userprofile-img'
            src={user?.photoURL || 'https://picsum.photos/150'}
            alt={`Imagen de perfil de ${user?.displayName || 'user'}`}
            width={150}
            height={150}
          />
        </p>
        <p>Email: {user?.email}</p>
        <p>User Name: {user?.displayName}</p>
        <p>Description: {userData?.description || 'No description yet'}</p>
      </section>
      <section>
        <form className='form2' onSubmit={handleSubmit}>

          <label htmlFor='file'>New Profile Picture:</label>
          <input
            id='file'
            ref={fileInputRef}
            type='file'
            accept='image/jpeg,image/jpg,image/png,image/webp'
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
          <button type='button' onClick={handleClick} className='file-button'>
            Select Image
          </button>
          <p>File size should be less than 4MB(JPG,JPEG,PNG,WEBP)</p>

          <label htmlFor='user-description'>New Description: </label>
          <textarea
            value={description}
            id='user-description'
            maxLength={300}
            onChange={handleDescriptionChange}
          />

          <button className='actperfil' type='submit'>
            Update Profile
          </button>
        </form>
      </section>
    </>
  );
}
