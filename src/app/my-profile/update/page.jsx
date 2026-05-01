"use client";

import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const UpdateProfilePage = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  
  useEffect(() => {
    const loadUser = async () => {
      const { data } = await authClient.getSession();

      setName(data?.user?.name || "");
      setImage(data?.user?.image || "");
    };

    loadUser();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();


    const { error } = await authClient.updateUser({
      name: name,
      image: image,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Profile Updated Successfully!");

    
    router.push("/my-profile");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded">
      <h1 className="text-xl font-bold mb-4">Update Profile</h1>

      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <button className="bg-green-500 text-white px-4 py-2 rounded w-full">
          Update Information
        </button>
      </form>
    </div>
  );
};

export default UpdateProfilePage;