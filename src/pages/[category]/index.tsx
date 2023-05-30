import DetailModal from "@/components/DetailModal";
import { awsconfig, s3 } from "@/constants/AWS";
import { CATEGORY_LIST } from "@/constants/Category";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Props = {};

const DEFAULT_CATEGORY = CATEGORY_LIST[0].value;
const params = {
  Bucket: awsconfig.bucketName,
};

const ResourceListPage = (props: Props) => {
  const router = useRouter();
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState();
  const selectedCategory = CATEGORY_LIST.find(
    (category) => category.value === (router.query.category || DEFAULT_CATEGORY)
  );

  const [resourceList, setResourceList] = useState([]);

  useEffect(() => {
    s3.listObjects(params, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        setResourceList(() => [...data.Contents]);
      }
    });
  }, []);

  const handleResourceClick = (resource: any) => {
    setSelectedResource(() => resource);
    setDetailModalOpen(() => true);
  };

  // fetch resources from s3

  return (
    <div className="p-8">
      <div className="pb-4 border-b-2">
        <h2 className="text-4xl font-extrabold text-gray-700 border-slate-200 mb-2">
          {selectedCategory?.name}
        </h2>
        <p className="text-sm text-gray-400">
          SKP에서 사용하는 아이콘, 에셋들이 모여 있어요.
        </p>
      </div>
      <ul className="grid grid-cols-5 gap-8 py-4 max-h-[72vh] overflow-y-scroll overflow-x-hidden">
        {resourceList.map((item) => (
          <li
            key={item.Key}
            onClick={() => handleResourceClick(item)}
            className="h-48 flex flex-col justify-center items-center hover:bg-gray-100 py-4 transition-colors rounded-lg cursor-pointer"
          >
            <img
              className="max-h-32 mb-2"
              src={`https://skp-resource-center.s3.ap-northeast-2.amazonaws.com/${encodeURIComponent(
                item.Key
              )}`}
              alt={item.Key}
            />
            <span className="flex-wrap text-xs text-gray-700 px-4">
              {item.Key}
            </span>
          </li>
        ))}
      </ul>
      {detailModalOpen && selectedResource && (
        <DetailModal
          item={{
            src: `https://skp-resource-center.s3.ap-northeast-2.amazonaws.com/${encodeURIComponent(
              selectedResource.Key
            )}`,
            ...selectedResource,
          }}
          open={detailModalOpen}
          onClose={() => setDetailModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ResourceListPage;
