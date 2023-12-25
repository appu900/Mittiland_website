import React, { useState } from "react";

const Productnavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky top-0 bg-white z-50">
      <nav class="bg-white shadow-lg  border-gray-200 dark:bg-gray-900 py-3 ">
        <div class="flex flex-wrap  items-center justify-between max-w-screen-xl mx-auto p-4">
          <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
            <div
              src=""
              class="h-8"
              // alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Mittiland
            </span>
          </a>
          <div class="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
            <a
              href="#"
              class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Login
            </a>
            <a
              href="#"
              class="text-white bg-[#00DDB3] hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-4 py-2 md:px-7 md:py-2.5 dark:bg-gray-600 dark:hover:bg-gray-900 focus:outline-none "
            >
              Sign up
            </a>
            <button
              data-collapse-toggle="mega-menu"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mega-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            id="mega-menu"
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          >
            <ul class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-slate-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-slate-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  onClick={() => setOpen(!open)}
                  id="mega-menu-dropdown-button"
                  data-dropdown-toggle="mega-menu-dropdown"
                  class="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Explore
                  <svg
                    class="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="mega-menu-dropdown w-[600px] border"
                  class={` border   absolute w-[600px] h-[200px] top-20 transition-all duration-500 z-10 grid ${
                    open ? "" : "hidden "
                  } w-auto grid-cols-2 text-sm bg-white  rounded-sm shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700 py-2`}
                >
                  <div class="p-4 pb-0 text-black border-r bg-gray-50  md:pb-4 dark:text-white">
                    <ul
                      class="space-y-4"
                      aria-labelledby="mega-menu-dropdown-button"
                    >
                      <li>
                        <a
                          href="#"
                          class="text-black dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-500"
                        >
                          category-1
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                        >
                          category-2
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                        >
                          category-3
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                        >
                          category-4
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                    <ul class="space-y-4">
                      <li>
                        <a
                          href="#"
                          class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                        >
                          category-5
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                        >
                          category-6
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                        >
                          category-7
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                        >
                          category-8
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="p-4">
                    <ul class="space-y-4">
                      <li>
                        <a
                          href="#"
                          class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                        >
                          category-9
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                        >
                          category-10
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                        >
                          category-11
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Productnavbar;
