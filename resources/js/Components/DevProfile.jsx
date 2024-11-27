const DevProfile = ({ name, href, image, subTitle }) => {
    return (
        <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                <img
                    className="absolute object-cover w-full h-full rounded"
                    src={image}
                    alt="Person"
                />
            </div>
            <div className="flex flex-col items-center sm:text-center">
                <p className="text-lg font-bold">{name}</p>
                <p className="mb-5 text-xs text-gray-800">{subTitle}</p>
                <div className="flex items-center space-x-3 sm:justify-center">
                    <a
                        href={href}
                        target="_blank"
                        className="text-gray-600 transition-colors duration-300 hover:text-black"
                    >
                        <svg
                            viewBox="0 0 30 30"
                            fill="currentColor"
                            className="h-6"
                        >
                            <circle cx="15" cy="15" r="4" />
                            <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DevProfile;
