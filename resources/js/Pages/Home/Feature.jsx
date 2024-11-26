import FeatureLink from "@/Components/FeatureLink";
import { FaBookOpen, FaQuestion } from "react-icons/fa6";

export const Feature = () => {
    return (
        <section className="bg-cream">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 relative">
                <div className="absolute bg-green-500 top-0 left-0 h-10 w-0.5 dark:bg-gray-400"></div>
                <div className="absolute bg-green-500 top-0 left-0 h-0.5 w-10 dark:bg-gray-400"></div>
                <div className="absolute bg-yellow-300 bottom-0 right-0 h-0.5 w-10 dark:bg-gray-400"></div>
                <div className="absolute bg-yellow-300 bottom-0 right-0 h-10 w-0.5 dark:bg-gray-400"></div>
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl">
                        Kenali Fitur TafaqquhMate
                    </h2>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* <Link
                        className="block rounded-xl border border-gray-800 p-8 shadow-md transition hover:border-yellowAcc hover:shadow-yellowAcc"
                        href="#"
                    >
                        <FaBookOpen size={28} className="text-green-500" />

                        <h2 className="mt-4 text-xl font-bold text-black">
                            Materi
                        </h2>

                        <p className="mt-1 text-sm text-[#8D6E63]">
                            Akses materi-materi Islami yang disusun secara
                            mendalam dan mudah dipahami, mencakup berbagai topik
                            penting yang relevan bagi kehidupan sehari-hari.
                        </p>
                    </Link> */}
                    <FeatureLink
                        href={"/materi"}
                        title={"Materi"}
                        description={
                            "Akses materi-materi Islami yang disusun secara mendalam dan mudah dipahami, mencakup berbagai topik penting yang relevan bagi kehidupan sehari-hari."
                        }
                    >
                        <FaBookOpen size={28} className="text-green-500" />
                    </FeatureLink>
                    <FeatureLink
                        href={"/kuis"}
                        title={"Kuis"}
                        description={
                            "Setiap materi dilengkapi dengan kuis pilihan ganda yang terdiri dari 20 soal untuk mengukur dan memperkuat pemahaman Anda."
                        }
                    >
                        <FaQuestion size={28} className="text-green-500" />
                    </FeatureLink>
                    {/* <Link
                        className="block rounded-xl border border-gray-800 p-8 shadow-md transition hover:border-yellowAcc hover:shadow-yellowAcc"
                        href="#"
                    >
                        <FaQuestion size={28} className="text-green-500" />

                        <h2 className="mt-4 text-xl font-bold text-black">
                            Kuis
                        </h2>

                        <p className="mt-1 text-sm text-[#8D6E63]">
                            Setiap materi dilengkapi dengan kuis pilihan ganda
                            yang terdiri dari 20 soal untuk mengukur dan
                            memperkuat pemahaman Anda.
                        </p>
                    </Link> */}
                </div>
            </div>
        </section>
    );
};
