import { useState } from "preact/hooks";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="rounded border-gray-200 bg-white px-2 py-2.5 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a href="/" className="flex items-center">
          <img src="/assets/ksquad_logo.svg" className="mr-3 h-8" alt="K Squad" />
        </a>
        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm focus:outline-none focus:ring-gray-200 md:hidden"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={`${open ? "" : "hidden md:inline-block"} w-full md:w-auto lg:order-1 lg:w-auto`}
          id="mobile-navbar"
        >
          <ul className="mt-4 flex flex-col rounded-lg p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium">
            <li>
              <a
                href="/company"
                className="block rounded py-2 pl-3 pr-4 text-xl text-gray-700 md:border-0 md:p-0 md:hover:bg-transparent"
              >
                Company
              </a>
            </li>
            <li>
              <a
                href="/service"
                className="block rounded py-2 pl-3 pr-4 text-xl text-gray-700 md:border-0 md:p-0 md:hover:bg-transparent"
              >
                Service
              </a>
            </li>
            <li>
              <a
                href="/news"
                className="block rounded py-2 pl-3 pr-4 text-xl text-gray-700 md:border-0 md:p-0 md:hover:bg-transparent"
              >
                News
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="block rounded py-2 pl-3 pr-4 text-xl text-gray-700 md:border-0 md:p-0 md:hover:bg-transparent"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/careers"
                className="block rounded py-2 pl-3 pr-4 text-xl text-gray-700 md:border-0 md:p-0 md:hover:bg-transparent"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block rounded py-2 pl-3 pr-4 text-xl text-gray-700 md:border-0 md:p-0 md:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
