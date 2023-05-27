import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { FileUploader } from "react-drag-drop-files";
import styled from "@emotion/styled";

type Props = {
  open: boolean;
  onClose: () => void;
};

const fileTypes = ["JPG", "PNG", "GIF"];

const UploadModal = ({ open, onClose }: Props) => {
  const [file, setFile] = useState(null);
  const [fileUrlList, setFileUrlList] = useState([]);
  const handleChange = (files) => {
    if (FileReader && files && files.length) {
      Array.from(files).forEach((file) => {
        const fr = new FileReader();
        fr.onload = function (e) {
          setFileUrlList((prev) => [...prev, e?.target?.result]);
        };
        fr.readAsDataURL(file);
      });
    }
  };

  console.log(fileUrlList);

  useEffect(() => {
    return () => {
      setFile(null);
    };
  }, []);

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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-3xl font-extrabold leading-6 text-gray-700 mb-6"
                  >
                    리소스 업로드
                  </Dialog.Title>
                  {!file ? (
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
                    Array.from(file)?.map((file) => (
                      <li key={file.name}>
                        {file.name}
                        <img src={file.name} />
                      </li>
                    ))
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
