import { useState, Fragment, ReactNode } from "react";
import { NavItem } from "./item";
import { Transition } from "@headlessui/react";
import { MenuIcon, CrossIcon } from "@/components/icons";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid place-items-center overflow-hidden">
      <button className="visible md:hidden focus:ring-1" onClick={() => setIsOpen(true)}>
        <MenuIcon className="w-6" />
      </button>

      <Transition.Root show={isOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
      <div className="fixed inset-0 bg-neutral-900 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="ease-in-out duration-500"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="absolute right-0 top-0 z-50 h-screen w-screen overflow-scroll no-scrollbar">
            <div className="flex h-screen w-fit flex-col gap-10 bg-neutral-900 p-6">
              <button
                className="visible mb-4 px-2 md:hidden"
                onClick={() => setIsOpen(false)}
              >
                <CrossIcon />
              </button>

              <div className="flex flex-col gap-4">
                <h1 className="px-2 text-lg font-semibold text-neutral-400">
                  vedant nandwana
                </h1>

                <div className="group flex flex-col gap-4" onClick={() => setIsOpen(false)}>
                  <NavItem href="/">home</NavItem>
                  <NavItem href="/blogs">blogs</NavItem>
                  <NavItem href="/#projects">projects</NavItem>
                  <NavItem href="/#about">about</NavItem>
                  <NavItem href="/#contact">contact</NavItem>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h1 className="px-2 text-lg font-semibold text-neutral-400">
                  socials
                </h1>

                <div className="group flex flex-col gap-4">
                  <NavItem href="https://twitter.com/vedantnn7">
                    twitter
                  </NavItem>
                  <NavItem href="https://github.com/vedantnn71">github</NavItem>
                  <NavItem href="https://www.linkedin.com/in/vedant-nandwana">
                    linkedin
                  </NavItem>
                </div>
              </div>
            </div>
          </div>
        </Transition.Child>
      </Transition.Root>
    </div>
  );
};
