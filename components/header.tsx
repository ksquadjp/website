import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <Link href='/' className='flex items-center'>
                    <h1 className="text-4xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">K Squad</h1>
                </Link>
                <button onClick={() => setOpen(!open)} type="button" className="inline-flex items-center p-2 ml-3 text-sm  rounded-lg md:hidden focus:outline-none  focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </button>
                <div className={`${open ? "" : "hidden md:inline-block"} w-full lg:w-auto lg:order-1 md:w-auto`} id="mobile-navbar">
                    <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link href="/company" className="block py-2 pl-3 pr-4 text-xl text-gray-700 rounded md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Company
                            </Link>
                        </li>
                        <li>
                            <Link href="/news" className="block py-2 pl-3 pr-4 text-xl text-gray-700 rounded md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                News
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className="block py-2 pl-3 pr-4 text-xl text-gray-700 rounded md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="/careers" className="block py-2 pl-3 pr-4 text-xl text-gray-700 rounded md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Careers
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="block py-2 pl-3 pr-4 text-xl text-gray-700 rounded md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

