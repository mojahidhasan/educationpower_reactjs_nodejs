import { useRef, useState } from "react";
import Logo from "./Logo";

export default function Nav() {
  const navRef = useRef(null);
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    if (!clicked) {
      navRef.current.classList.add("display-block");
      navRef.current.classList.remove("display-none");
    }
    if (clicked) {
      navRef.current.classList.remove("display-block");
      navRef.current.classList.add("display-none");
    }
    setClicked(!clicked);
  }

  return (
    <section className="flex h-20 justify-between px-[32px] py-5 text-1 lg:max-xl:text-[90%]">
      <Logo />

      <nav className="mx-3 flex">
        <ul
          ref={navRef}
          className="display-none font-normal leading-10 text-inherit max-lg:fixed max-lg:right-0 max-lg:top-0 max-lg:z-10 max-lg:h-screen max-lg:w-1/2 max-lg:border max-lg:border-white max-lg:bg-color1 max-lg:p-5 max-sm:w-full lg:flex lg:items-center"
        >
          <button
            onClick={handleClick}
            className="absolute right-5 top-5 rounded-md border-[2px] border-transparent p-1 font-inter font-extrabold leading-none hover:border-white lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              fill="currentColor"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </button>
          <li className="max-lg:mt-6 max-lg:pl-3 max-lg:hover:bg-color8 lg:mx-3 xl:mx-5">
            Home
          </li>
          <li className="max-lg:pl-3 max-lg:hover:bg-color8 lg:mx-3 xl:mx-5">
            Featured
          </li>
          <li className="whitespace-nowrap max-lg:pl-3 max-lg:hover:bg-color8 lg:mx-2 xl:mx-5">
            How it Works
          </li>
          <li className="max-lg:pl-3 max-lg:hover:bg-color8 lg:mx-3 xl:mx-5">
            Testimonial
          </li>
          <li className="max-lg:pl-3 max-lg:hover:bg-color8 lg:mx-3 xl:mx-5">
            Blog
          </li>
          <li className="max-lg:pl-3 max-lg:hover:bg-color8 lg:mx-3 xl:mx-5">
            Subscribe
          </li>
        </ul>
        <div className="leading-4 max-sm:text-sm sm:leading-10 lg:ml-3 xl:ml-5">
          <a href="example.com">
            <button
              type="button"
              className="whitespace-nowrap rounded bg-color2 px-3 py-2 font-normal text-inherit hover:bg-color2-darker sm:px-6 sm:py-0 sm:font-semibold"
            >
              Sign in
            </button>
          </a>
        </div>
        <button
          className="ml-3 flex aspect-square h-full items-center justify-center text-white hover:cursor-pointer hover:text-color3 lg:hidden"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            fill="currentColor"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </button>
      </nav>
    </section>
  );
}
