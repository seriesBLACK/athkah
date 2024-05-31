"use client"
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const page = () => {
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [wrong, setWrong] = useState(false);
  const router = useRouter();


  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === 'athkah123' && name === 'admin') {
      Cookies.set('user', 'admin');
      router.push('/admin');
      console.log('ss');
    } else {
      setWrong(true);
    };


  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={e => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              onChange={e => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign In
          </button>
        </form>
        {wrong && (
          <p className='text-red-500'>name or password incorrect!</p>
        )}
      </div>
    </div>
  );
};

export default page;
