import { Fragment, useEffect, useState } from "react";
import { Dialog, Listbox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ChevronUpDownIcon,
  PhotoIcon,
} from "@heroicons/react/24/solid";
import { FileUploader } from "react-drag-drop-files";
import { CATEGORY_LIST } from "@/constants/Category";
import { awsconfig, s3 } from "@/constants/AWS";

type Props = {
  open: boolean;
  onClose: () => void;
};

type FileUrl = {
  metadata: any;
  src: any;
};

const fileTypes = ["JPG", "PNG", "GIF"];

const UploadModal = ({ open, onClose }: Props) => {
  const [fileList, setFileList] = useState<File[]>([]);
  const [fileUrlList, setFileUrlList] = useState<FileUrl[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(CATEGORY_LIST[0]);
  const [tags, setTags] = useState<string | null>();

  const handleChange = (files: any) => {
    if (FileReader && files && files.length) {
      setFileList(() => [...files]);

      Array.from(files).forEach((file) => {
        const fr = new FileReader();
        fr.onload = function (e) {
          setFileUrlList((prev) => [
            ...prev,
            {
              metadata: file,
              src: e?.target?.result,
            },
          ]);
        };
        fr.readAsDataURL(file);
      });
    }
  };

  const handleUpload = async () => {
    try {
      fileList.map(async (file) => {
        const params = {
          Bucket: awsconfig.bucketName,
          Key: file.name,
          Body: file,
          Metadata: {
            category: selectedCategory.value,
            tag: tags,
          },
          CacheControl: "max-age=86400",
        };
        const response = await s3.upload(params).promise();
        console.log("Image uploaded successfully:", response.Location);
      });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-extrabold leading-6 text-gray-700 mb-8"
                  >
                    리소스 업로드
                  </Dialog.Title>
                  <Listbox
                    value={selectedCategory}
                    onChange={setSelectedCategory}
                  >
                    <div className="relative mb-4">
                      <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left border-gray-300 border focus:outline-none">
                        <span className="block truncate">
                          {selectedCategory.name}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <ChevronUpDownIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {CATEGORY_LIST.map((category, index) => (
                            <Listbox.Option
                              key={index}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 transition-colors ${
                                  active
                                    ? "bg-rose-200 text-rose-900"
                                    : "text-gray-900"
                                }`
                              }
                              value={category}
                            >
                              <>
                                <span
                                  className={`block truncate ${
                                    selectedCategory
                                      ? "font-medium"
                                      : "font-normal"
                                  }`}
                                >
                                  {category.name}
                                </span>
                                {selectedCategory.value === category.value ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                  {fileUrlList.length === 0 ? (
                    <FileUploader
                      handleChange={handleChange}
                      name="file"
                      types={fileTypes}
                      label="업로드할 리소스를 드래그해주세요"
                      multiple
                    >
                      <div className="group mt-2 border border-gray-400 rounded-xl p-4 border-dashed flex flex-col justify-center items-center hover:border-gray-600 transition-colors cursor-pointer">
                        <PhotoIcon className="w-20 h-20 text-gray-400 group-hover:text-gray-600 mb-2 transition-colors" />
                        <p className="text-sm text-gray-400 group-hover:text-gray-600 font-semibold text-center transition-colors">
                          업로드할 리소스를 드래그해주세요
                        </p>
                      </div>
                    </FileUploader>
                  ) : (
                    <>
                      <p className="text-sm text-gray-700 mb-4">
                        {fileUrlList.length}개의 파일을 선택했어요.
                      </p>
                      <ul className="mb-4 max-h-96 overflow-y-scroll">
                        {Array.from(fileUrlList)?.map((file) => (
                          <li
                            key={file.metadata.name}
                            className="list-none flex items-center bg-white hover:bg-gray-100 mb-2 rounded-lg p-4 transition-colors"
                          >
                            <img
                              className="w-24 h-24 rounded-lg mr-4 object-cover"
                              src={file.src}
                            />
                            <div className="flex flex-col w-full flex-1">
                              <p className="font-medium text-gray-700 mb-2">
                                {file.metadata.name}
                              </p>
                              <textarea
                                onChange={(e) =>
                                  setTags(() =>
                                    Buffer.from(
                                      e.target.value.trim(),
                                      "utf-8"
                                    ).toString("base64")
                                  )
                                }
                                className="outline-none resize-none text-gray-500 bg-transparent text-md placeholder:text-md placeholder:whitespace-pre-line"
                                placeholder={`태그를 콤마(,)로 구분해 입력해주세요.
                                예시) 기쁨, 설정, 아이템`}
                              />
                            </div>
                          </li>
                        ))}
                      </ul>
                      <button
                        className="bg-green-400 font-semibold hover:bg-green-500 rounded-lg py-2 px-4 ml-auto block  transition-colors text-white"
                        onClick={handleUpload}
                      >
                        업로드
                      </button>
                    </>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default UploadModal;
