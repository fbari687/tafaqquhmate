import { Link, usePage } from "@inertiajs/react";

const QuizItem = ({ title, slug, material_slug, number, isInDetail }) => {
    const { auth } = usePage().props;

    return (
        <article className="overflow-hidden rounded-md shadow transition">
            <div className="flex flex-col bg-white">
                <div className="w-full flex flex-row border-b">
                    <div className="bg-aquaGreen p-3 flex items-center justify-center text-lg text-white font-bold w-fit">
                        <span>{number}</span>
                    </div>
                    <div className="w-full flex items-center justify-center font-bold text-lg">
                        <span>Kuis</span>
                    </div>
                </div>
                <div className="bg-white p-4 flex items-center justify-center font-bold">
                    <h3 className="mt-0.5 text-lg text-gray-900 text-center line-clamp-1">
                        {title}
                    </h3>
                </div>
                <div className="bg-white border-t flex items-center justify-between">
                    {auth ? (
                        <>
                            {isInDetail ? (
                                <Link
                                    href={`/kuis/${slug}`}
                                    className="w-full bg-aquaGreen py-2 flex items-center justify-center text-white font-bold hover:bg-aquaGreenHover transition duration-150"
                                >
                                    Kerjakan
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={`/materi/${material_slug}`}
                                        className="w-1/2 bg-yellowAcc py-2 flex items-center justify-center text-black font-bold hover:bg-yellowAccHover transition duration-150"
                                    >
                                        Materi
                                    </Link>
                                    <Link
                                        href={`/kuis/${slug}`}
                                        className="w-1/2 bg-aquaGreen py-2 flex items-center justify-center text-white font-bold hover:bg-aquaGreenHover transition duration-150"
                                    >
                                        Kerjakan
                                    </Link>
                                </>
                            )}
                        </>
                    ) : (
                        <Link
                            href={`/login`}
                            className="w-full bg-gray-700 py-2 flex items-center justify-center text-white font-bold hover:bg-gray-800 transition duration-150"
                        >
                            Login untuk mengerjakan
                        </Link>
                    )}
                </div>
            </div>
        </article>
    );
};

export default QuizItem;
