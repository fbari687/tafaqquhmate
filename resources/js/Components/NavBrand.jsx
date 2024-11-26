import { Link } from "@inertiajs/react";

const NavBrand = ({ href, image, label }) => {
    return (
        <Link
            href={href}
            className="flex items-center space-x-3 rtl:space-x-reverse"
        >
            <img src={image} className="h-10" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">
                {label}
            </span>
        </Link>
    );
};

export default NavBrand;
