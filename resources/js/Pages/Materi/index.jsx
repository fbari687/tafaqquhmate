import ArticleItem from "@/Components/ArticleItem";
import Layout from "@/Layouts/Layout";

export default function Materi({ materials }) {
    return (
        <Layout>
            <section className="bg-cream">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <header>
                        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                            Materi
                        </h2>

                        <p className="mt-4 max-w-md text-gray-500">
                            Akses materi-materi Islami yang disusun secara
                            mendalam dan mudah dipahami, mencakup berbagai topik
                            penting yang relevan bagi kehidupan sehari-hari.
                        </p>
                    </header>

                    {materials.length ? (
                        <ul className="mt-4 grid grid-cols-2 gap-2 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
                        </ul>
                    ) : (
                        <div className="text-center font-bold flex items-center justify-center">
                            <span>Belum Ada Materi Yang Tersedia</span>
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
}
