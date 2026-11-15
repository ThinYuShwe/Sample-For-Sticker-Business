import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  // SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Bars3Icon } from "@heroicons/react/24/outline";
import { siteConfig } from "@/config/site";
// import houseIcon from "@components/ui/house.png";
import { HomeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const products = siteConfig.mainNav[0].card ?? [];
const menuItems = siteConfig.mainNav[0].menu ?? [];

const SHEET_SIDES = ["left"] as const;

export function MobileNavigation() {
  const [isDesktop, setIsDesktop] = useState(false);
  const query = "(min-width:1024px)";
  useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setIsDesktop(event.matches);
      // event is sent by the browser
      // mediaquerylistevent is the typescript type that describes this particular kind of message.
      // so this whole function contains information about whether the screen matches the desktop-size rule.
    }
    const result = matchMedia(query);
    // result is the object created by the matchmedia(query), it knows whether the screen matches your rule.
    result.addEventListener("change", onChange);
    return () => {
      result.removeEventListener("change", onChange);
    };
  }, [query]);

  if (isDesktop) {
    return null;
  }
  return (
    <div className="flex flex-wrap gap-2 lg:hidden">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger
            render={
              <Button
                variant="outline"
                className="cursor-pointer border-0 capitalize"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            }
          />

          <SheetContent
            side={side}
            className="bg-background text-foreground flex h-full flex-col data-[side=bottom]:max-h-[50vh] data-[side=top]:max-h-[50vh]"
          >
            <SheetHeader>
              <SheetDescription className="mt-5.5 flex items-center gap-2">
                <SheetClose
                  render={
                    <Link to="/" className="flex items-center gap-2">
                      <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Home</span>
                        <HomeIcon className="size-5" />
                      </a>
                      <p className="text-foreground text-lg font-medium">
                        Sticker Business
                      </p>
                    </Link>
                  }
                />
              </SheetDescription>
            </SheetHeader>

            <div className="no-scrollbar overflow-y-auto px-4">
              <Accordion className="max-w-lg border-b border-gray-200">
                <AccordionItem value="products">
                  <AccordionTrigger className="no-underline!">
                    {siteConfig.mainNav[0].title}
                  </AccordionTrigger>

                  <AccordionContent className="">
                    {products.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        className="block py-2 no-underline!"
                      >
                        {item.title}
                      </a>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="space-y-1">
                {menuItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="hover:bg-hover hover:hover-foreground -mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>

            {/* <SheetFooter>
              <SheetClose render={<Button variant="outline">Cancel</Button>} />
            </SheetFooter> */}
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
