import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

type Props = {
  item: any;
  open: boolean;
  onClose: () => void;
};

const DetailModal = ({ item, open, onClose }: Props) => {
  console.log(item);
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-extrabold leading-6 text-gray-700 mb-6"
                  >
                    리소스 정보
                  </Dialog.Title>
                  <Dialog.Description>
                    <div className="flex items-center">
                      <img
                        src={item.src}
                        className="mr-4 max-h-28 min-h-12 shadow-lg rounded-lg border p-2"
                      />
                      <div className="flex flex-col w-full">
                        <p className="mb-2">{item.Key}</p>
                        <textarea
                          className="w-full border-none outline-none resize-none"
                          placeholder="리소스 태그를 쉼표(,)로 구분해 입력해주세요"
                        />
                      </div>
                    </div>
                  </Dialog.Description>
                  <button
                    className="outline-none bg-green-400 font-semibold hover:bg-green-500 rounded-lg py-2 px-4 ml-auto block  transition-colors text-white"
                    onClick={() => {}}
                  >
                    정보 업데이트
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default DetailModal;
