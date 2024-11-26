import { Link, usePage } from "@inertiajs/react";

const NavLink = ({ href, label, type, className }) => {
    const { url } = usePage();

    if (type == "link") {
        return (
            <li>
                <Link
                    href={href}
                    className={
                        url == href
                            ? "block py-2 px-3 text-black border border-gray-200 transition duration-150 hover:bg-gray-200 rounded md:bg-transparent md:p-0 md:border-none md:hover:bg-transparent md:hover:text-[#FFC107] md:text-[#FFC107] font-bold dark:text-white md:dark:text-blue-500"
                            : "block py-2 px-3 text-black border border-gray-200 transition duration-150 hover:bg-gray-200 rounded md:bg-transparent md:p-0 md:border-none md:hover:bg-transparent md:hover:text-[#FFC107] md:text-white dark:text-white md:dark:text-blue-500"
                    }
                    aria-current="page"
                >
                    {label}
                </Link>
            </li>
        );
    } else if (type == "button") {
        return (
            <li className="hidden md:flex flex-row gap-2 h-full items-center">
                <Link
                    href={href}
                    className="w-full rounded-lg flex items-center justify-center py-2 px-4 bg-[#ffc107] transition duration-150 text-[#212121] hover:bg-[#e0b532]"
                >
                    <span className="">{label}</span>
                </Link>
            </li>
        );
    }
};

export default NavLink;
