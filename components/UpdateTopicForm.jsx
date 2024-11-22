"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const UpdateTopicsForm = (id) => {
  const [title, setUpdateTitle] = useState({});
  const [description, setUpdateDescription] = useState({});
  const updataId = id.id;
  const router = useRouter();
  const URL =
    process.env.NODE_ENV === "development"
      ? process.env.LOCAL
      : process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    getData(updataId);
  }, []);

  const getData = async (id) => {
    let data = await fetch(`${URL}/${id}`);
    data = await data.json();
    let topic = data.result;
    setUpdateTitle(topic.title);
    setUpdateDescription(topic.description);
  };

  const handleUpdateTopic = async (e) => {
    e.preventDefault();
    const data = await fetch(`${URL}/${updataId}`, {
      method: "PUT",
      body: JSON.stringify({
        title,
        description,
      }),
    });
    if (data) {
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
      <h1 className="text-2xl mb-2 font-semibold text-blue-500">
        Update Topics
      </h1>
      <form
        onSubmit={handleUpdateTopic}
        key={updataId}
        className="w-full flex flex-col gap-4"
      >
        <input
          onChange={(e) => setUpdateTitle(e.target.value)}
          value={title}
          className="bg-gray-100 px-2 py-3 outline-none placeholder:text-gray-400 rounded-md focus:bg-gray-200"
          type="text"
          placeholder="Title"
          required
        />
        <input
          onChange={(e) => setUpdateDescription(e.target.value)}
          value={description}
          className="bg-gray-100 px-2 py-3 outline-none placeholder:text-gray-400 rounded-md focus:bg-gray-200"
          type="text"
          placeholder="Description"
          required
        />
        <button
          className="px-3 p-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500"
          type="submit"
        >
          Update Topic
        </button>
      </form>
    </div>
  );
};

export default UpdateTopicsForm;
