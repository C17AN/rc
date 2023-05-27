import { CATEGORY_LIST } from "@/constants/Category";
import Link from "next/link";
import React, { useState } from "react";
import UploadModal from "../UploadModal";

const Sidebar = () => {
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  return (
    <div className="w-3/12 bg-white h-full border-r-gray-100 border-r shadow-md">
      <img src="/skplanet.png" className="w-36 p-2 mx-auto" />
      <ul className="flex flex-col">
        <button
          className="ext-center rounded-xl bg-red-400 hover:bg-rose-500 mx-4 my-2 py-4 text-xl font-bold text-white transition-colors cursor-pointer"
          onClick={() => setUploadModalOpen(true)}
        >
          리소스 업로드
        </button>
        {CATEGORY_LIST.map((category) => (
          <li
            key={category.name}
            className="text-center rounded-xl bg-white hover:bg-gray-100 py-4 mx-4 my-2 text-xl font-bold text-gray-400 hover:text-gray-800 transition-colors cursor-pointer"
          >
            <Link
              href={`/${category.value}`}
              className="flex items-center justify-center space-x-4"
            >
              <div className="w-6 h-6">{category.icon}</div>
              <span>{category.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <UploadModal
        open={uploadModalOpen}
        onClose={() => setUploadModalOpen(false)}
      />
    </div>
  );
};

export default Sidebar;
