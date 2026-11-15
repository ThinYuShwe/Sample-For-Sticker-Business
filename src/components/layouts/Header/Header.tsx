// npm install @headlessui/react @heroicons/react

import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";
import { ModeToggle } from "@/components/mode-toggle";
// ! If the data is from API, we need to make sure the website doesn't down when the data isn't aviable and the result should be return as null.
export default function Header() {
  return (
    <header className="bg-background text-foreground sticky top-0 z-50 w-full">
      <nav
        aria-label="Global"
        className="container mx-auto flex items-center justify-between p-6"
      >
        <DesktopNavigation />
        <MobileNavigation />
        {/* <ModeToggle /> */}
        <div className="relative z-60 flex flex-1 items-center justify-end space-x-4">
          <ModeToggle />
        </div>
      </nav>
      <hr />
    </header>
  );
}
