import { Link, usePage } from "@inertiajs/react";

const SidebarItem = ({ href, label, icon }) => {
    const { url } = usePage();
    return (
        <li>
            <Link
                href={href}
                className={
                    url === href
                        ? "flex items-center p-2 bg-gray-100 rounded-lg transition duration-150 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-aquaGreen group"
                        : "flex items-center p-2 text-gray-900 rounded-lg transition duration-150 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                }
            >
                {icon}
                <span className="ms-3">{label}</span>
            </Link>
        </li>
    );
};

export default SidebarItem;
