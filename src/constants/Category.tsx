import {
  CameraIcon,
  CursorArrowRaysIcon,
  RocketLaunchIcon,
  LanguageIcon,
} from "@heroicons/react/24/solid";

type CategoryName = "아이콘" | "로띠" | "로고" | "사진";

export const CATEGORY_LIST: Array<{
  name: CategoryName;
  value: string;
  icon: any;
}> = [
  {
    name: "아이콘",
    value: "icon",
    icon: <RocketLaunchIcon />,
  },
  {
    name: "로띠",
    value: "lottie",
    icon: <CursorArrowRaysIcon />,
  },
  {
    name: "로고",
    value: "logo",
    icon: <LanguageIcon />,
  },
  {
    name: "사진",
    value: "photo",
    icon: <CameraIcon />,
  },
];
