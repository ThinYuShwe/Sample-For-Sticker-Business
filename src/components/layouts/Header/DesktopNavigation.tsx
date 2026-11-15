import {
  Popover,
  // popover opens a floating box
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { siteConfig } from "@/config/site";
import { ChevronDownIcon } from "lucide-react";
import { ScrollArea } from "@components/ui/scroll-area";
// import houseIcon from "@components/ui/house.png";
import { HomeIcon } from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";

const products = siteConfig.mainNav[0].card;

export function DesktopNavigation() {
  return (
    <div className="hidden lg:flex lg:flex-1 gap-14 items-center">
      {/* ! This is Desktop Menu */}
      <div className="flex gap-2 items-center">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Home</span>
          <HomeIcon className="size-5" />
        </a>
        <p className="text-md font-medium text-foreground">Sticker Business</p>
      </div>
      <PopoverGroup className="hidden lg:flex lg:gap-x-12">
        {/* * This is the Desktop navigation area,
         * hidden lg:flex is to hidden on mobile and visible on large screen
         * lg:gap-x-12 is to space between links */}
        <Popover className="relative">
          {/* * This Popover creates a dropdown menu container */}
          <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-foreground cursor-pointer">
            {siteConfig.mainNav[0].title}
            <ChevronDownIcon
              aria-hidden="true"
              className="size-5 flex-none text-gray-400"
            />
          </PopoverButton>
          {/* * This is the dropdown trigger*/}
          <PopoverPanel
            transition
            className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg outline-1 outline-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
          >
            <ScrollArea className="h-65">
              {/* * This is the dropdown content,
               * that absolute positioned relative to parent,
               * left-1.2  + -translate-x-1/2 is to centers the panel, mt-3 is to margin from top,
               * w-screen max-w-md is to wide dropdown, rounded-3xl is to rounded corners,
               * transition is to smooth show/hide animation,
               * the data-closed and data-enter classes are for transitions*/}
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.title}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="size-6 object-cover w-12 h-12 rounded-lg"
                      />
                    </div>
                    <div className="flex-auto">
                      <p className="font-semibold text-gray-900">
                        {item.title}
                      </p>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* * This loops through the products array and creates a menu item for each product
               * map() loops through each object
               * key={item.name} is to identify each item uniquely
               * href={item.href} is to link to the product page
               * className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100" is to style the menu item
               */}

              {/* * This produces the action links at the bottom of the dropdown
               * grid grid-cols-2 is for two columns
               * divide-x divide-gray-900/5 is to add vertical lines between columns
               * */}
            </ScrollArea>
          </PopoverPanel>
        </Popover>

        <a href="#" className="text-sm/6 font-semibold text-foreground">
          Services
        </a>
        <Link to="/blogs" className="text-sm/6 font-semibold text-foreground">
          Blog
        </Link>
        <a href="#" className="text-sm/6 font-semibold text-foreground">
          About Us
        </a>
      </PopoverGroup>
    </div>
  );
}
