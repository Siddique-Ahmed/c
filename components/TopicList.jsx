"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { redirect, useRouter } from "next/navigation";

const TopicList = () => {
  const [topics, setTopics] = useState([]);
  const router = useRouter();
  process.env.NODE_ENV === "development"
  ? process.env.LOCAL
  : process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let data = await fetch(URL, {
      cache: "no-store",
    });
    if (data) {
      router.push("/");
    }
    data = await data.json();
    setTopics(data);
  };

  const handleDelete = async (id) => {
    const data = await fetch(
      `${URL}/${id}`,
      {
        method: "DELETE",
      }
    );
    if (data.ok) {
      setTopics((prevTopics) => ({
        ...prevTopics,
        result: prevTopics.result.filter((item) => item._id !== id),
      }));
    }
  };

  return (
    <section className="min-h-screen pt-24 p-5 sm:p-10">
      <div className="w-full flex flex-col pt-16 items-center justify-between gap-4">
        {topics?.result?.map((topic) => {
          return topic ? (
            <div
              key={topic._id}
              className="w-full bg-white px-6 py-3 flex items-center justify-between shadow-xl"
            >
              <div className="flex-grow">
                <h1 className="text-2xl mb-2 font-bold">{topic.title}</h1>
                <p className="font-semibold text-gray-400 text-wrap">
                  {topic.description}
                </p>
              </div>
              <div className="w-[70px] flex gap-3 items-center justify-between">
                <button
                  onClick={() => handleDelete(topic._id)}
                  className="bg-red-500 p-2 text-white rounded-md"
                >
                  <FaTrash />
                </button>
                <Link href={`/updateTopics/${topic._id}`}>
                  <button className="bg-green-500 p-2 text-white rounded-md">
                    <FaEdit />
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <h1 className="bg-gray-400 text-2xl font-bold">
              No Data Available
            </h1>
          );
        })}
      </div>
    </section>
  );
};

export default TopicList;
