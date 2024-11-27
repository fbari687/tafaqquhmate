import DevProfile from "@/Components/DevProfile";
import Layout from "@/Layouts/Layout";

const AboutPage = () => {
    return (
        <Layout>
            <section className="bg-cream">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <header>
                        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                            Tentang Kami
                        </h2>
                    </header>

                    <div className="mt-4 w-full p-4 gap-2 flex flex-col md:flex-row items-center md:items-start justify-start">
                        <img
                            src="/storage/localImage/logo500.png"
                            alt=""
                            className="w-40 aspect-square animate-pulse"
                        />
                        <div className="flex p-4 flex-col gap-8">
                            <div className="w-full flex flex-col gap-4">
                                <p className="text-justify">
                                    TafaqquhMate adalah sebuah platform digital
                                    inovatif yang dirancang untuk mempermudah
                                    siapa saja dalam memperdalam pemahaman ilmu
                                    agama secara modern dan menyenangkan.
                                </p>
                                <p className="text-justify">
                                    Kami menggabungkan pembelajaran ilmu agama
                                    dengan berbasis teknologi terkini,
                                    TafaqquhMate menyediakan fitur kuis dan
                                    modul pembelajaran yang akan mendukung
                                    pembelajaran agar lebih mudah diakses
                                    dimanapun.
                                </p>
                                <p className="text-justify">
                                    Platform ini bertujuan untuk meningkatkan
                                    pemahaman konsep keislaman, serta
                                    menginspirasi perjalanan spiritual pengguna
                                    melalui pendekatan yang relevan dan menarik.
                                </p>
                                <p className="text-justify">
                                    Dengan visi tersebut, TafaqquhMate
                                    berkomitmen menjadi pendamping terbaik dalam
                                    perjalanan menuju pemahaman agama yang lebih
                                    dalam. TafaqquhMate hadir sebagai solusi
                                    pembelajaran agama yang relevan dengan
                                    kebutuhan masa kini.
                                </p>
                                <p className="text-justify">
                                    TafaqquhMate juga dibuat sebagai salah satu
                                    Project Akhir dalam Mata Kuliah Pendidikan
                                    Agama di Politeknik Negeri Jakarta,
                                    menjadikannya wujud nyata dari kolaborasi
                                    antara ilmu pengetahuan, teknologi, dan
                                    tradisi keagamaan.
                                </p>
                            </div>
                            <div className="w-full flex flex-col gap-4">
                                <h3 className="font-bold text-2xl">
                                    Anggota Tim
                                </h3>
                                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <DevProfile
                                        name={"Fathul Bari"}
                                        image={"/storage/localImage/bari.jpeg"}
                                        href={"https://instagram.com/fbariaja"}
                                        subTitle={"@fbariaja"}
                                    />
                                    <DevProfile
                                        name={"Hubbyna Ashfa Isyny"}
                                        image={"/storage/localImage/byna.jpeg"}
                                        href={"https://instagram.com/byynxx"}
                                        subTitle={"@byynxx"}
                                    />
                                    <DevProfile
                                        name={"Meiza Zafira Angraini"}
                                        image={"/storage/localImage/mei.jpeg"}
                                        href={"https://instagram.com/_mzfraa"}
                                        subTitle={"@_mzfraa"}
                                    />
                                    <DevProfile
                                        name={"Rasya Diandra Putra"}
                                        image={"/storage/localImage/rasya.jpeg"}
                                        href={"https://instagram.com/rasyadps"}
                                        subTitle={"@rasyadps"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default AboutPage;
