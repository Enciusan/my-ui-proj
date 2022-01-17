/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import '../App.css';
// import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";



const navigation = [
  { name: "About", href: "#", current: true },
  { name: "Minting", href: "#mint", current: false },
  { name: "Roadmap", href: "#", current: false },
];
const navigation1 = [  
  { name: "Gallery", href: "#", current: false },
  { name: "Team", href: "#", current: false },
  { name: "FAQ", href: "#", current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <>
      <div className="h-full w-screen absolute">
        <Disclosure
          as="nav"
          className="bg-gray-800 backdrop-filter backdrop-blur-none bg-opacity-0 "
          id="nav"
        >
          {({ open }) => (
            <>
              <div className="max-w-full px-4 sm:px-6 lg:px-8 mx-72 grid justify-items-center">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    {/* <div className="flex-shrink-0 mx-0 flex items-start">
                      <img
                        className="h-24 w-24 absolute left-10 -top-3 "
                        src="../../../img/nnlogo.png"
                        alt="Workflow"
                      />
                    </div> */}
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4 font-pirata mt-10">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-stone-800 text-yellow-600 text-4xl"
                                : "text-yellow-600 hover:bg-stone-700 hover:text-amber-500 text-4xl",
                              "px-3 py-2 rounded-md"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                        <img
                        className="h-20 w-20 relative -mt-10 left-1 top-10 "
                        src="../../../img/nnlogo.png"
                        alt="Workflow"
                      />
                      {navigation1.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-stone-800 text-yellow-600 text-4xl"
                                : "text-yellow-600 hover:bg-stone-700 hover:text-amber-500 text-4xl",
                              "px-3 py-2 rounded-md"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

             

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                  
                </div>
                {/* <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0"><Card /></div>
                    <div className="ml-3"></div>
                  </div>
                </div> */}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
