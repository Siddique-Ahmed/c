import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const AddTopicForm = () => {
  return (
    <div className="bg-white pb-8 pt-4 px-8 shadow-xl flex flex-col gap-3 items-center">
      <div>
        <Link href={"/"}>
          <FaArrowLeft />
        </Link>
      </div>
      <h1>Add Topics</h1>
      <form>
        <input type="text" placeholder="Title" required/>
        <input type="text" placeholder="Description" required/>
        <button type="submit">Add Topic</button>
      </form>
    </div>
  );
};

export default AddTopicForm;
