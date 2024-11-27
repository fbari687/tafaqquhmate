import { Link } from "@inertiajs/react";
import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="w-full bg-[#2C7866]">
            <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid gap-x-10 mb-8 grid-cols-1 md:grid-cols-2">
                    <div className="w-full">
                        <Link
                            href="/"
                            aria-label="Go home"
                            title="Company"
                            className="inline-flex items-center"
                        >
                            <img
                                src={"/storage/localImage/logo500.png"}
                                alt="logo"
                                className="h-16"
                            />
                            <span className="ml-2 text-xl font-bold tracking-wide text-white">
                                TafaqquhMate
                            </span>
                        </Link>
                        <div className="mt-6 lg:max-w-3xl text-justify grid md:grid-cols-2 gap-4">
                            <p className="text-sm text-white">
                                TafaqquhMate hadir sebagai pendamping mahasiswa
                                maupun siswa dalam memperdalam pemahaman ilmu
                                agama. Kami menggabungkan teknologi modern
                                dengan nilai-nilai keilmuan tradisional,
                                menghadirkan pengalaman belajar interaktif
                                melalui kuis dan modul yang menarik.
                            </p>
                            <p className="text-sm text-white">
                                Dengan TafaqquhMate, mendalami ilmu agama
                                menjadi lebih mudah, menyenangkan, dan sesuai
                                dengan kebutuhan. Kami terus berinovasi untuk
                                memberikan platform belajar yang nyaman,
                                mendalam, dan dapat diandalkan sebagai teman
                                setia dalam perjalanan keilmuan pada civitas
                                akademika.
                            </p>
                        </div>
                    </div>
                    {/* <div className="space-y-2 text-sm">
                        <p className="text-base font-bold tracking-wide text-white">
                            Contacts
                        </p>
                        <div className="flex">
                            <p className="mr-1 text-white">Phone:</p>
                            <a
                                href="tel:850-123-5021"
                                aria-label="Our phone"
                                title="Our phone"
                                className="transition-colors duration-300 text-white"
                            >
                                850-123-5021
                            </a>
                        </div>
                        <div className="flex">
                            <p className="mr-1 text-white">Email:</p>
                            <a
                                href="mailto:info@lorem.mail"
                                aria-label="Our email"
                                title="Our email"
                                className="transition-colors duration-300 text-white"
                            >
                                info@lorem.mail
                            </a>
                        </div>
                        <div className="flex">
                            <p className="mr-1 text-white">Address:</p>
                            <a
                                href="https://www.google.com/maps"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Our address"
                                title="Our address"
                                className="transition-colors duration-300 text-white"
                            >
                                312 Lovely Street, NY
                            </a>
                        </div>
                    </div> */}
                    <div className="mt-6">
                        <span className="text-base font-bold tracking-wide text-white">
                            Media Sosial
                        </span>
                        <div className="flex items-center mt-1 space-x-3">
                            <a
                                href="https://instagram.com/tafaqquhmate"
                                target="_blank"
                                className="text-yellowAcc transition-colors duration-300 hover:text-black"
                            >
                                <FaInstagram size={24} />
                            </a>
                            <a
                                href="https://www.tiktok.com/@tafaqquh_mate"
                                target="_blank"
                                className="text-yellowAcc transition-colors duration-300 hover:text-black"
                            >
                                <FaTiktok size={24} />
                            </a>
                            <a
                                href="https://x.com/TafaqquhMate"
                                target="_blank"
                                className="text-yellowAcc transition-colors duration-300 hover:text-black"
                            >
                                <FaXTwitter size={24} />
                            </a>
                        </div>
                        <p className="mt-4 text-sm text-white">
                            Tetap terhubung dengan kami di media sosial untuk
                            konten Islami yang penuh hikmah dan informasi
                            bermanfaat dari TafaqquhMate.
                        </p>
                        <p className="mt-4 text-sm text-white">
                            Sebarkan kebaikan, jalin ukhuwah!
                        </p>
                    </div>
                </div>
                <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                    <p className="text-sm text-white">© Copyright 2024</p>
                </div>
            </div>
        </footer>
    );
}
