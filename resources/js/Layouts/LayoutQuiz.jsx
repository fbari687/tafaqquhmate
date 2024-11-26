import { Head, Link } from "@inertiajs/react";

const LayoutQuiz = ({ children }) => {
    return (
        <>
            <Head>
                <title>TafaqquhMate</title>
            </Head>
            <nav className="w-full flex p-2 absolute">
                <Link
                    href={"/kuis"}
                    className="w-8 h-8 bg-white text-black border shadow-md font-bold flex items-center justify-center transition duration-150 hover:translate-y-0.5"
                >
                    X
                </Link>
            </nav>
            <main className="w-full min-h-dvh bg-cream flex flex-col items-center justify-start">
                {children}
            </main>
        </>
    );
};

export default LayoutQuiz;
