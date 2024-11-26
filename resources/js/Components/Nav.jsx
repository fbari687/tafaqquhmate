import { useEffect, useRef, useState } from "react";
import NavBrand from "./NavBrand";
import NavLink from "./NavLink";
import { Link, usePage } from "@inertiajs/react";

const Nav = ({ children }) => {
    const { auth } = usePage().props;

    const catMenu = useRef(null);
    const catProfileMenu = useRef(null);
    const [openSlide, setOpenSlide] = useState(false);

    const [openProfileSlide, setOpenProfileSlide] = useState(false);

    const closeOpenMenu = (e) => {
        if (openSlide && !catMenu.current?.contains(e.target)) {
            setOpenSlide(false);
        }
    };

    const closeProfileMenu = (e) => {
        if (openProfileSlide && !catProfileMenu.current?.contains(e.target)) {
            setOpenProfileSlide(false);
        }
    };

    document.addEventListener("mousedown", closeOpenMenu);
    document.addEventListener("mousedown", closeProfileMenu);

    return (
        <nav className="bg-[#2C7866] border-gray-200 dark:bg-gray-900 fixed top-0 w-screen z-50">
            <div
                className="max-w-screen-xl flex flex-row flex-wrap items-center justify-between mx-auto p-4"
                ref={catMenu}
            >
                <NavBrand
                    label={"TafaqquhMate"}
                    href={"/"}
                    image={"/storage/localImage/logo500.png"}
                />
                <button
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm transition-all duration-150 text-white rounded-lg md:hidden hover:border hover:border-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                    onClick={(e) => setOpenSlide(!openSlide)}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    className={
                        openSlide
                            ? "w-full md:block md:w-auto"
                            : "hidden w-full md:block md:w-auto"
                    }
                >
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent md:items-center dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {children}
                    </ul>

                    {!auth ? (
                        <li className="flex md:hidden flex-row gap-2 h-full items-center">
                            <Link
                                href={"/login"}
                                className="w-full rounded-lg flex items-center justify-center py-2 px-4 bg-[#ffc107] transition duration-150 text-[#212121] hover:bg-[#e0b532]"
                            >
                                <span className="">Log In</span>
                            </Link>
                        </li>
                    ) : (
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:hidden md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent md:items-center dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <div className="flex flex-row justify-between items-center px-4 py-3 text-sm bg-gray-200 text-gray-900 dark:text-white">
                                <img
                                    src={`/storage/${auth.image}`}
                                    alt=""
                                    className="h-6 aspect-square rounded-full"
                                />
                                <div className="font-bold">{auth.name}</div>
                            </div>
                            <NavLink
                                type={"link"}
                                href={"/profile"}
                                label={"Profil"}
                            />
                            <NavLink
                                type={"link"}
                                href={"/logout"}
                                label={"Sign Out"}
                            />
                        </ul>
                    )}
                </div>

                {!auth ? (
                    <NavLink
                        type={"button"}
                        href={"/login"}
                        label={"Log In"}
                    ></NavLink>
                ) : (
                    <div
                        className="hidden md:block relative"
                        ref={catProfileMenu}
                    >
                        <button
                            className="hidden gap-2 text-black bg-yellowAcc hover:bg-[#e0b532] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            type="button"
                            onClick={(e) =>
                                setOpenProfileSlide(!openProfileSlide)
                            }
                        >
                            <img
                                src={`/storage/${auth.image}`}
                                alt=""
                                className="h-4 aspect-square rounded-full object-cover"
                            />
                            {auth.name}
                            <svg
                                className="w-2.5 h-2.5 ms-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 4 4 4-4"
                                />
                            </svg>
                        </button>

                        <div
                            className={
                                openProfileSlide
                                    ? "z-10 absolute top-12 right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                                    : "z-10 absolute top-0 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                            }
                        >
                            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                <div>{auth.name}</div>
                                <div className="font-medium truncate">
                                    {auth.email}
                                </div>
                            </div>
                            <ul
                                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownInformationButton"
                            >
                                <li>
                                    <Link
                                        href="/profile"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Profil
                                    </Link>
                                </li>
                            </ul>
                            <div className="py-2">
                                <Link
                                    href="/logout"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >
                                    Sign out
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Nav;
