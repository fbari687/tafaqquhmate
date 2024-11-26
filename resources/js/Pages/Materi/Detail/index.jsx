import ArticleItem from "@/Components/ArticleItem";
import QuizItem from "@/Components/QuizItem";
import Layout from "@/Layouts/Layout";
import parse from "html-react-parser";
import { TbPlayerTrackNext } from "react-icons/tb";

export default function DetailMateri({ material, materials }) {
    const body = parse(material.body);

    return (
        <Layout>
            <section className="bg-cream">
                <div className="max-w-screen-xl flex flex-col md:flex-row items-start justify-between mx-auto gap-2">
                    <article className="pt-12 flex flex-col items-start w-full lg:w-3/4">
                        <section className="relative">
                            <div className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl px-5 lg:px-11 mx-auto max-md:px-4 flex flex-col">
                                <h1 className="text-gray-900 font-semibold text-4xl min-[500px]:text-5xl leading-tight mb-2">
                                    {material.title}
                                </h1>
                                <p className="font-medium text-sm leading-8 text-gray-500 mb-1">
                                    {new Date(
                                        material.created_at
                                    ).toLocaleDateString("id-ID", {
                                        weekday: "long",
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </p>
                                <img
                                    src={`/storage/${material.image}`}
                                    alt=""
                                    className="aspect-video object-cover rounded-xl shadow-lg"
                                />
                            </div>
                        </section>

                        <section className="relative py-4 lg:py-8 prose max-w-none">
                            <div className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl px-5 lg:px-11 mx-auto max-md:px-4">
                                {body}
                            </div>
                        </section>

                        {material.link && (
                            <section className="relative flex flex-col gap-3 px-4 lg:px-11">
                                <a
                                    href={material.link}
                                    className="w-fit flex flex-row items-center justify-center gap-2 bg-yellowAcc transition duration-150 hover:bg-yellowAccHover px-4 py-2 rounded-full"
                                    target="_blank"
                                >
                                    <span className="font-bold text-sm">
                                        Lihat Materi Lengkap
                                    </span>
                                    <TbPlayerTrackNext />
                                </a>
                            </section>
                        )}

                        <aside className="block lg:hidden w-full relative md:w-1/4 md:sticky top-0 py-4 px-2 md:pt-36 md:pr-2">
                            {/* <div className="bg-white flex flex-col gap-4 rounded-xl overflow-hidden">
                            <h5 className="font-bold text-xl text-center p-2 border">
                                Terdapat kuis mengenai
                            </h5>
                            <h6 className="font-semibold text-lg text-center px-2">
                                Sumber Ajaran Islam
                            </h6>
                            <div className="w-full text-sm flex items-center justify-between px-2">
                                <p>Jumlah Soal: 20 Soal</p>
                                <p>Waktu: 20 Menit</p>
                            </div>
                            <NavLink
                                type={"button"}
                                label={"Kerjakan Kuis"}
                                href={"/kuis"}
                            />
                        </div> */}
                            {material.quizzes.map((quiz, i) => (
                                <QuizItem
                                    key={quiz.slug}
                                    title={quiz.title}
                                    slug={quiz.slug}
                                    number={i + 1}
                                    material_slug={material.slug}
                                    isInDetail
                                />
                            ))}
                        </aside>

                        <section className="relative py-4 flex flex-col gap-3 px-4 lg:px-11">
                            <span className="font-bold text-xl">
                                Lihat Materi Lainnya
                            </span>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                                {materials.map((item, i) => (
                                    <ArticleItem
                                        key={item.slug}
                                        date={new Date(
                                            item.created_at
                                        ).toLocaleDateString("id-ID", {
                                            weekday: "long",
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                        image={item.image}
                                        title={item.title}
                                        excerpt={item.excerpt}
                                        href={`/materi/${item.slug}`}
                                    />
                                ))}
                            </div>
                        </section>
                    </article>
                    <aside className="hidden lg:block w-full relative md:w-1/4 md:sticky top-0 py-4 px-2 md:pt-36 md:pr-2">
                        {/* <div className="bg-white flex flex-col gap-4 rounded-xl overflow-hidden">
                            <h5 className="font-bold text-xl text-center p-2 border">
                                Terdapat kuis mengenai
                            </h5>
                            <h6 className="font-semibold text-lg text-center px-2">
                                Sumber Ajaran Islam
                            </h6>
                            <div className="w-full text-sm flex items-center justify-between px-2">
                                <p>Jumlah Soal: 20 Soal</p>
                                <p>Waktu: 20 Menit</p>
                            </div>
                            <NavLink
                                type={"button"}
                                label={"Kerjakan Kuis"}
                                href={"/kuis"}
                            />
                        </div> */}
                        {material.quizzes.map((quiz, i) => (
                            <QuizItem
                                key={quiz.slug}
                                title={quiz.title}
                                slug={quiz.slug}
                                number={i + 1}
                                material_slug={material.slug}
                                isInDetail
                            />
                        ))}
                    </aside>
                </div>
            </section>

            {/* <section className="py-12 lg:py-20 ">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-14">
                        Our popular blogs
                    </h2>
                    <div className="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                        <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
                            <div className="flex items-center mb-6">
                                <img
                                    src="https://pagedone.io/asset/uploads/1696244553.png"
                                    alt="Harsh image"
                                    className="rounded-lg w-full object-cover"
                                />
                            </div>
                            <div className="block">
                                <h4 className="text-gray-900 font-medium leading-8 mb-9">
                                    Fintech 101: Exploring the Basics of
                                    Electronic Payments
                                </h4>
                                <div className="flex items-center justify-between  font-medium">
                                    <h6 className="text-sm text-gray-500">
                                        By Harsh C.
                                    </h6>
                                    <span className="text-sm text-indigo-600">
                                        2 year ago
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
                            <div className="flex items-center mb-6">
                                <img
                                    src="https://pagedone.io/asset/uploads/1696244579.png"
                                    alt="John image "
                                    className="rounded-lg w-full object-cover"
                                />
                            </div>
                            <div className="block">
                                <h4 className="text-gray-900 font-medium leading-8 mb-9">
                                    From classNameroom to Cyberspace: The
                                    Growing Influence of EdTech in Fintech
                                </h4>
                                <div className="flex items-center justify-between  font-medium">
                                    <h6 className="text-sm text-gray-500">
                                        By John D.
                                    </h6>
                                    <span className="text-sm text-indigo-600">
                                        2 year ago
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
                            <div className="flex items-center mb-6">
                                <img
                                    src="https://pagedone.io/asset/uploads/1696244619.png"
                                    alt="Alexa image"
                                    className="rounded-lg w-full object-cover"
                                />
                            </div>
                            <div className="block">
                                <h4 className="text-gray-900 font-medium leading-8 mb-9">
                                    Fintech Solutions for Student Loans: Easing
                                    the Burden of Education Debt
                                </h4>
                                <div className="flex items-center justify-between  font-medium">
                                    <h6 className="text-sm text-gray-500">
                                        By Alexa H.
                                    </h6>
                                    <span className="text-sm text-indigo-600">
                                        2 year ago
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-300 hover:bg-gray-100">
                        View All
                    </button>
                </div>
            </section> */}
        </Layout>
    );
}
