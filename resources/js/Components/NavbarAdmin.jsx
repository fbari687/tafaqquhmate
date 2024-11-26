import { Link, usePage } from "@inertiajs/react";
import { useRef, useState } from "react";

const NavbarAdmin = ({ openSidebar }) => {
    const { auth } = usePage().props;
    const [openDropdown, setOpenDropdown] = useState(false);
    const catMenu = useRef(null);

    const closeOpenMenu = (e) => {
        if (openDropdown && !catMenu.current?.contains(e.target)) {
            setOpenDropdown(false);
        }
    };

    document.addEventListener("mousedown", closeOpenMenu);

    return (
        <nav className="fixed top-0 z-50 w-full bg-aquaGreen border-b text-white border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end">
                        <button
                            data-drawer-target="logo-sidebar"
                            data-drawer-toggle="logo-sidebar"
                            aria-controls="logo-sidebar"
                            type="button"
                            onClick={openSidebar}
                            className="inline-flex items-center p-2 text-sm text-white rounded-lg sm:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        >
                            <span className="sr-only">Open sidebar</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    clipRule="evenodd"
                                    fillule="evenodd"
                                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                ></path>
                            </svg>
                        </button>
                        <Link href={"/admin"} className="flex ms-2 md:me-24">
                            <img
                                src={"/storage/localImage/logo500.png"}
                                className="h-8 me-3"
                                alt="TafaqquhMate Logo"
                            />
                            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                                TafaqquhMate
                            </span>
                        </Link>
                    </div>
                    <div className="flex items-center" ref={catMenu}>
                        <div className="flex items-center ms-3 relative">
                            <div>
                                <button
                                    type="button"
                                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                    aria-expanded="false"
                                    onClick={(e) =>
                                        setOpenDropdown(!openDropdown)
                                    }
                                >
                                    <span className="sr-only">
                                        Open user menu
                                    </span>
                                    <img
                                        className="w-8 h-8 rounded-full"
                                        src={`/storage/${auth.image}`}
                                        alt="user photo"
                                    />
                                </button>
                            </div>
                            <div
                                className={
                                    openDropdown
                                        ? "z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 absolute top-4 right-0"
                                        : "z-50 my-4 hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 absolute top-4 right-0"
                                }
                            >
                                <div className="px-4 py-3" role="none">
                                    <p
                                        className="text-sm text-gray-900 dark:text-white"
                                        role="none"
                                    >
                                        {auth.name}
                                    </p>
                                    <p
                                        className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                                        role="none"
                                    >
                                        {auth.email}
                                    </p>
                                </div>
                                <ul className="py-1" role="none">
                                    <li>
                                        <Link
                                            href="/logout"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                            role="menuitem"
                                        >
                                            Sign out
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavbarAdmin;
