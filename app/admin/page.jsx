"use client"

import 'react-quill/dist/quill.snow.css';

import { db } from '../../firebase';
import { useEffect, useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import OfferCard from '@/components/OfferCard';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import Link from 'next/link';
import { Button } from 'flowbite-react';




export default function CreatePost() {

  const [data, setData] = useState(null);







  async function getOffers() {
    const listingRef = collection(db, "offers");
    const docSnap = await getDocs(listingRef);
    const data = [];

    docSnap.forEach((doc) => {
      return data.push({
        id: doc.id,
        data: doc.data()
      });
    });
    setData(data)
  }


  useEffect(() => {
    getOffers()
  }, [data]);


  async function onDelete(cardId) {
    if (window.confirm("Are you sure you want to delete the offer?")) {
      await deleteDoc(doc(db, "offers", cardId))
      const updatedOffers = data.filter(
        (data) => data.id !== cardId
      );
      setData(updatedOffers);

    } else {
      console.log('an error has ouccerd');
    }

  }


  return (
    <div className='p-3 min-w-3xl mx-auto min-h-screen'>
      <h1 className='text-[3rem] mt-12'>Admin Dashbord</h1>
      <Link href='/admin/createPost'>
        <Button className='bg-black text-white py-3 px-4 my-6 mx-auto'>
          Create a new Offer
        </Button>      </Link>
      <div className='w-full flex gap-4 items-center justify-between flex-wrap max-sm:justify-center'>
        {data?.map((card) => (
          <div>
            <OfferCard key={card.id} card={card.data} />
            <div className='flex w-full justify-between'>
              <FaRegTrashAlt onClick={() => onDelete(card.id)} className='text-red-500 text-[2rem] cursor-pointer' />
              <Link href={`/admin/edit/${card.id}`} >
                <FaRegEdit className='text-blue-700 text-[2rem] cursor-pointer' />
              </Link>
            </div>
          </div>


        ))}
      </div>
    </div>
  );
}