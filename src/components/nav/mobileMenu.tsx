import Link from "next/link";
import cx from "classnames";
import { useState, useEffect, Fragment } from "react";
import { NavItem } from "./item";
import { Transition } from "@headlessui/react";
import { MenuIcon, CrossIcon } from "@/components/icons";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="visible md:hidden" onClick={() => setIsOpen(true)}>
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
          enter="transform transition ease-in-out duration-500 sm:duration-700"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-500 sm:duration-700"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div className="w-screen h-screen absolute z-50 left-0 top-0">
            <div className="bg-neutral-900 w-fit h-full p-6 flex flex-col gap-10 absolute right-0">
              <button
                className="visible md:hidden px-2 mb-4"
                onClick={() => setIsOpen(false)}
              >
                <CrossIcon />
              </button>

              <div className="flex flex-col gap-4">
                <h1 className="font-semibold text-lg text-neutral-400 px-2">
                  vedant nandwana
                </h1>

                <div className="flex flex-col gap-4 group">
                  <NavItem href="/">home</NavItem>
                  <NavItem href="/blogs">blogs</NavItem>
                  <NavItem href="/projects">projects</NavItem>
                  <NavItem href="/about">about</NavItem>
                  <NavItem href="/contact">contact</NavItem>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h1 className="font-semibold text-lg text-neutral-400 px-2">
                  socials
                </h1>

                <div className="flex flex-col gap-4 group">
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
    </>
  );
};
