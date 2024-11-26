import { Link } from "@inertiajs/react";

const FeatureLink = ({ title, description, href, children }) => {
    return (
        <Link
            className="block rounded-xl border border-gray-800 p-8 shadow-md transition hover:border-yellowAcc hover:shadow-yellowAcc"
            href={href}
        >
            {children}

            <h2 className="mt-4 text-xl font-bold text-black">{title}</h2>

            <p className="mt-1 text-sm text-[#8D6E63]">{description}</p>
        </Link>
    );
};

export default FeatureLink;
