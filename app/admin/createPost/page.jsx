"use client"

import { Alert, Button, FileInput, Select } from 'flowbite-react';
import 'react-quill/dist/quill.snow.css';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app, db } from '../../../firebase';
import { useRef, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';





export default function CreatePost() {
  const formRef = useRef(null);
  const [file, setFile] = useState(null)
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [loading, setloading] = useState(null);
  const [formData, setFormData] = useState({
    country: '',
    about: '',
    catogery: '',
    description: '',
    price: 0,
  });


  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));

  };

  async function handleSubmit(e) {
    e.preventDefault();

    await addDoc(collection(db, "offers"), formData);
    if (formRef.current) {
      formRef.current.reset();
    }

  };

  const handleUpdloadImage = async () => {
    try {
      if (!file) {
        setImageUploadError('Please select an image');
        return;
      }
      setImageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + '-' + formData.country;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageUploadError('Image upload failed');
          setImageUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUploadProgress(null);
            setImageUploadError(null);
            setFormData({ ...formData, image: downloadURL, timeStamp: serverTimestamp() });
          });
        }
      );
    } catch (error) {
      setImageUploadError('Image upload failed');
      setImageUploadProgress(null);
      console.log(error);
    }
  };





  return (
    <div className='p-3 min-w-3xl mx-auto min-h-screen'>
      <h1 className='text-center text-3xl my-7 font-semibold'>Create new offer</h1>
      <form ref={formRef} className='flex flex-col gap-4 max-w-3xl mx-auto' onSubmit={handleSubmit}>
        <div className='flex flex-col items-center gap-4 justify-between'>
          <input
            type='text'
            placeholder='Country or city name'
            required
            id='country'
            name='country'
            className=' border px-3 py-5 w-full'
            onChange={onChange}
          />
          <input
            type='text'
            placeholder='about the city ex. the world leading distanition'
            required
            id='about'
            name='about'
            className=' border px-3 py-5 w-full'
            onChange={onChange}
          />
          <input placeholder='price' name='price' value={formData.price} type="number" onChange={onChange} id='price' className='border px-3 py-5 w-[200px] text-center' />
          <Select
            onChange={onChange}
            id='catogery'
          >
            <option key={1} value='uncategorized'>Package plane</option>
            <option key={2} value='Return'>Return</option>
            <option key={3} value='One way'>One way</option>
            <option key={4} value='Multi-city'>Multi-city</option>
          </Select>
        </div>


        <div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3'>
          <FileInput
            type='file'
            id='image'
            accept='image/*'
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Button
            type='button'
            className='bg-black text-white py-3 px-4'
            size='sm'

            onClick={handleUpdloadImage}
            disabled={imageUploadProgress}
          >
            {imageUploadProgress ? (
              <div className='w-16 h-16'>
                <CircularProgressbar
                  value={imageUploadProgress}
                  text={`${imageUploadProgress || 0}%`}
                />
              </div>
            ) : (
              'Upload Image'
            )}
          </Button>
        </div>



        {imageUploadError && <Alert color='failure'>{imageUploadError}</Alert>}
        {formData.image && (
          <img
            src={formData.image}
            alt='upload'
            className='w-full h-72 object-cover'
          />
        )}
        <textarea
          placeholder='Package discription...'
          className='h-72 mb-12 border'
          required
          id='description'
          onChange={onChange}
        />
        <Button type='submit' disabled={loading} className='bg-black text-white py-3 px-4'>
          Create Offer
        </Button>

      </form>
    </div>
  );
}