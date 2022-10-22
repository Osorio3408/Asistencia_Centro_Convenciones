import React from "react";

const Footer_register = () => {
  return (
    <>
      <footer class="w-full p-4 fixed bottom-0  bg-sky-900 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-sky-900 ">
        <span class="text-sm text-center text-gray-500 sm:text-center dark:text-teal-100">
          &copy; 2022{" "}
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-teal-100 sm:mt-0">
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer_register;
