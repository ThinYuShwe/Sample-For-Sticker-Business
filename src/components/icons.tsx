import {
  HomeIcon,
  HamburgerMenuIcon,
  PaperPlaneIcon,
  ExclamationTriangleIcon,
  ArrowLeftIcon,
  LayersIcon,
  PlusIcon,
} from "@radix-ui/react-icons";

import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 .75.75V21m-6.75 0h6.75m-6.75 0H7.5m12.75 0h-6.75"
      />
    </svg>
  ),

  home: HomeIcon,
  menu: HamburgerMenuIcon,
  send: PaperPlaneIcon,
  warning: ExclamationTriangleIcon,
  arrowLeft: ArrowLeftIcon,
  layers: LayersIcon,
  plus: PlusIcon,
};
