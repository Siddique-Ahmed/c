import Link from "next/link";
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const TopicList = () => {
  return (
    <section className="min-h-screen pt-24 p-10">
      <div className="w-full flex flex-col items-center justify-between">
        <div className="w-full bg-white px-6 py-3 flex items-center justify-between shadow-xl">
          <div className="flex-grow">
            <h1 className="text-2xl mb-2 font-bold">Title</h1>
            <p className="font-semibold text-gray-400">Description</p>
          </div>
          <div className="w-[80px] flex gap-3 items-center justify-between">
            <button className="bg-red-500 p-2 text-white rounded-md">
              <FaTrash />
            </button>
            <Link href={"/updateTopic"}>
              <button className="bg-green-500 p-2 text-white rounded-md">
                <FaEdit />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicList;
