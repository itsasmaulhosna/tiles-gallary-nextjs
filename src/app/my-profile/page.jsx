'use client'
import { authClient } from '@/lib/auth-client';
import { useEffect, useState } from 'react';
import Link from 'next/link';


const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await authClient.getSession();
      setUser(data?.user);
    };
    getUser();
  }, []);

  if (!user) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  return (
    <div className="min-h-[80vh] flex justify-center items-center bg-gray-100">
      
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[350px] text-center">
        
        
        <img
          src={user.image}
          alt="profile"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-200"
        />

        
        <h2 className="text-xl font-bold">{user.name}</h2>

        
        <p className="text-gray-500 mb-4">{user.email}</p>

        
        <Link href="/my-profile/update">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition">
            Update Profile
          </button>
        </Link>

      </div>
    </div>
  );
};

export default ProfilePage;