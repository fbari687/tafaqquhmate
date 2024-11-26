import { TbPlayerTrackNext } from "react-icons/tb";
import parse from "html-react-parser";
import AdminLayout from "@/Layouts/AdminLayout";
import { FiEdit3 } from "react-icons/fi";
import { Link, router } from "@inertiajs/react";
import { FaTrashAlt } from "react-icons/fa";
import SweetAlert2 from "react-sweetalert2";
import { useState } from "react";

const AdminMaterialShow = ({ material }) => {
    const body = parse(material.body);
    const [swalProps, setSwalProps] = useState({});

    const handleDelete = (slug) => {
        setSwalProps({
            show: true,
            title: "Yakin ingin menghapus?",
            text: "Materi tidak akan bisa dikembalikan",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya, Hapus Ini!",
            preConfirm: () => {
                return new Promise((resolve) => {
                    router.delete(`/admin/material/${slug}`, {
                        onSuccess: () => {
                            resolve();
                        },
                        onError: () => {
                            resolve();
                        },
                    });
                });
            },
        });
    };

    return (
        <AdminLayout>
            <SweetAlert2
                {...swalProps}
                didClose={() => setSwalProps({ show: false })}
            />
            <div className="mx-auto flex flex-col gap-2 bg-white rounded-md relative">
                <div className="flex-row bg-aquaGreen text-white items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4 sticky top-0 z-30 pt-20">
                    <div className="flex flex-col gap-2">
                        <h5 className="mr-3 font-semibold text-xl">
                            Detail Materi
                        </h5>
                        <div className="flex flex-row gap-2">
                            <Link
                                href={`/admin/material/${material.slug}/edit`}
                                className="flex items-center gap-2 bg-blue-600 transition duration-150 hover:bg-blue-700 text-white px-3 py-1 rounded-full font-bold"
                            >
                                <FiEdit3 />
                                <span>Edit</span>
                            </Link>
                            <button
                                type="submit"
                                className="flex items-center gap-2 bg-red-600 transition duration-150 hover:bg-red-700 text-white px-3 py-1 rounded-full font-bold"
                                value={material.slug}
                                onClick={(e) => handleDelete(material.slug)}
                            >
                                <FaTrashAlt />
                                <span>Delete</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="max-w-screen-xl flex flex-col md:flex-row items-start justify-between gap-2">
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
                    </article>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminMaterialShow;
