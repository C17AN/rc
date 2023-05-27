import { CATEGORY_LIST } from "@/constants/Category";
import DefaultLayout from "@/layout/DefaultLayout";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const ResourceListPage = (props: Props) => {
  const router = useRouter();
  const selectedCategory = CATEGORY_LIST.find(
    (category) => category.value === router.query.category
  );

  return (
    <div className="p-16">
      <h2 className="text-4xl font-extrabold text-gray-700 pb-4 border-b-2 border-slate-200">
        {selectedCategory?.name}
      </h2>
    </div>
  );
};

export default ResourceListPage;
