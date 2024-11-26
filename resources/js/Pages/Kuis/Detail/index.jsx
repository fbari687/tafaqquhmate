import LayoutQuiz from "@/Layouts/LayoutQuiz";
import { Link, router, usePage } from "@inertiajs/react";
import { FaPlay } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import SweetAlert2 from "react-sweetalert2";
import { useState } from "react";

const kuisDetailPage = ({ quiz }) => {
    const { url } = usePage();
    const { auth } = usePage().props;

    const [swalProps, setSwalProps] = useState({});

    const attemptQuiz = async (e) => {
        e.preventDefault();
        setSwalProps({
            show: true,
            title: "Kerjakan?",
            text: "Pastikan internet lancar, karena nilai baru akan disimpan setelah semua pertanyaan selesai",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya, Kerjakan!",
            preConfirm: () => {
                return new Promise((resolve) => {
                    router.post(
                        url,
                        {
                            quiz_slug: quiz.slug,
                            user_username: auth.username,
                        },
                        {
                            onSuccess: () => {
                                resolve();
                            },
                            onError: () => {
                                resolve();
                            },
                        }
                    );
                });
            },
        });
    };

    return (
        <>
            <SweetAlert2
                {...swalProps}
                didClose={() => setSwalProps({ show: false })}
            />
            <LayoutQuiz>
                <div className="w-full px-8 pt-20 flex flex-col gap-2 md:max-w-3xl">
                    <form
                        className="w-full bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 flex flex-col p-4"
                        onSubmit={attemptQuiz}
                    >
                        <button
                            className="bg-greenAcc rounded-md text-white py-2.5 flex items-center justify-center gap-1 font-bold border shadow-xl transition duration-150 hover:bg-greenMint hover:shadow-2xl hover:translate-y-0.5"
                            type="submit"
                        >
                            <FaPlay />
                            <span>Mulai</span>
                        </button>
                    </form>
                    <div className="w-full bg-white border rounded-md flex flex-col p-4">
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row gap-2">
                                <img
                                    src={`/storage/${quiz.image}`}
                                    alt=""
                                    className="w-14 lg:w-24 aspect-square rounded-md"
                                />
                                <div className="flex flex-col gap-1 lg:gap-4">
                                    <span className="font-bold text-lg lg:text-xl">
                                        {quiz.title}
                                    </span>
                                    <div className="flex flex-col">
                                        <span className="text-xs lg:text-sm">
                                            Soal : {quiz.amountPerSession} Soal
                                        </span>
                                        <span className="text-xs lg:text-sm">
                                            Waktu per soal : {quiz.time} Detik
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <Link
                                href={`/materi/${quiz.materials.slug}`}
                                className="w-full py-1.5 flex items-center gap-2 rounded-md justify-center bg-yellowAcc transition duration-150 hover:bg-yellowAccHover"
                            >
                                <FaExternalLinkAlt />
                                <span className="text-xs lg:text-base">
                                    Sumber Materi
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full bg-white border rounded-md flex flex-col gap-2 p-4">
                        <span className="font-bold lg:text-lg">Deskripsi</span>
                        <div className="text-xs lg:text-sm">
                            {quiz.description}
                        </div>
                    </div>
                </div>
            </LayoutQuiz>
        </>
    );
};

export default kuisDetailPage;
