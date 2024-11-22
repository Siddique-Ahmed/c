"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { redirect } from "next/navigation";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const AddTopicForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  const URL =
    process.env.NODE_ENV === "development"
      ? process.env.LOCAL
      : process.env.NEXT_PUBLIC_API_URL;

  const handleAddData = async (e) => {
    e.preventDefault();
    const button = e.target[2];

    button.innerHTML = "Loading...";
    button.disabled = true;
    const data = await fetch(URL, {
      method: "POST",
      body: JSON.stringify({ title, description }),
    });

    if (data) {
      button.innerHTML = "Add Topic";
      button.disabled = false;
      router.push("/");
    }
  };

  return (
    <div className="w-full sm:w-[520px] bg-white pb-8 pt-4 px-8 shadow-xl flex flex-col gap-3 items-center rounded-lg">
      <div className="w-full items-center">
        <Link href={"/"}>
          <FaArrowLeft className="text-gray-400 text-md hover:text-blue-300" />
        </Link>
      </div>
      <h1 className="text-2xl mb-2 font-semibold text-blue-500">Add Topics</h1>
      <form onSubmit={handleAddData} className="w-full flex flex-col gap-4">
        <input
          onChange={(e) => setTitle(e.target.value)}
          className="bg-gray-100 px-2 py-3 outline-none placeholder:text-gray-400 rounded-md focus:bg-gray-200"
          value={title}
          type="text"
          placeholder="Title"
          required
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          className="bg-gray-100 px-2 py-3 outline-none placeholder:text-gray-400 rounded-md focus:bg-gray-200"
          value={description}
          type="text"
          placeholder="Description"
          required
        />
        <button
          className="px-3 p-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-500"
          type="submit"
        >
          Add Topic
        </button>
      </form>
    </div>
  );
};

export default AddTopicForm;
