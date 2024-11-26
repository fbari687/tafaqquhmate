import ArticleItem from "@/Components/ArticleItem";
import { Link } from "@inertiajs/react";

const Article = ({ materials }) => {
    console.log(materials);
    return (
        <section className="bg-cream">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <header className="mb-4">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                        Materi
                    </h2>

                    <div className="mt-4 text-gray-500 w-full flex items-center justify-between">
                        <span>Beberapa materi yang tersedia</span>
                        <Link
                            href={"/materi"}
                            className="text-aquaGreen font-bold transition duration-150 underline hover:text-aquaGreenHover"
                        >
                            Lainnya
                        </Link>
                    </div>
                </header>
                {materials.length ? (
                    <div className="grid gap-2 grid-cols-2 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full">
                        {materials.map((material, i) => (
                            <ArticleItem
                                key={material.slug}
                                date={new Date(
                                    material.created_at
                                ).toLocaleDateString("id-ID", {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                                image={material.image}
                                title={material.title}
                                excerpt={material.excerpt}
                                href={`/materi/${material.slug}`}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center font-bold flex items-center justify-center">
                        <span>Belum Ada Materi Yang Tersedia</span>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Article;
