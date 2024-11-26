import { Link } from "@inertiajs/react";

const ArticleItem = ({ image, title, excerpt, href, date }) => {
    return (
        <Link
            href={href}
            className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
        >
            <img
                alt={title}
                src={`/storage/${image}`}
                className="h-32 lg:h-48 aspect-video w-full object-cover"
            />

            <div className="bg-white p-4 sm:p-6">
                <time dateTime={date} className="block text-xs text-gray-500">
                    {date}
                </time>

                <h3 className="mt-0.5 text-lg text-gray-900 line-clamp-1">
                    {title}
                </h3>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    {excerpt}
                </p>
            </div>
        </Link>
    );
};

export default ArticleItem;
