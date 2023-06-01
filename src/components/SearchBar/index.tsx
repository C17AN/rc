import React from "react";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <input
      className="m-8 mb-0 outline-none border border-gray-200 focus:border-gray-400 rounded-lg py-2 px-4 transition-colors text-gray-700 text-sm"
      placeholder="찾을 이미지의 태그, 파일명 등을 검색하세요"
    />
  );
};

export default SearchBar;
