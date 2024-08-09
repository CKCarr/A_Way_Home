import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const uploadImage = async (file) => {
  const storage = getStorage();
  const storageRef = ref(storage, `pets/${file.name}`);
  const metadata = {
    contentType: file.type, // This sets the correct content type
  };
  await uploadBytes(storageRef, file, metadata);
  const downloadURL = await getDownloadURL(storageRef);
  return downloadURL;
};

// export const updateFileMetadata = async (filePath, contentType) => {
//   const storage = getStorage();
//   const fileRef = ref(storage, filePath);
//   const metadata = {
//     contentType: contentType, // The correct content type
//   };
//   await updateMetadata(fileRef, metadata);
// };

// Example usage:
// updateFileMetadata('pets/Atlas_1723054863877', 'image/jpeg');
