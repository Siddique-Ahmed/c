import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-white w-full px-8 py-4 md:px-20 lg:px-20 flex items-center justify-between shadow-lg fixed top-0 left-0">
      <Link href={"/"}>
        <h1 className="text-blue-700 font-bold text-xl hover:text-blue-600 hover:underline">
          CRUD_APP
        </h1>
      </Link>
      <Link href={"/addTopics"}>
        <button className="bg-blue-700 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-600">Add Topic</button>
      </Link>
    </header>
  );
};

export default Header;
