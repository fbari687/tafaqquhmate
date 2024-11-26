import AdminLayout from "@/Layouts/AdminLayout";
import { Link, router } from "@inertiajs/react";
import { FaStickyNote } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import SweetAlert2 from "react-sweetalert2";
import { useState } from "react";

const AdminMaterialPage = ({ materials }) => {
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
            <section className="w-full bg-gray-50 dark:bg-gray-900">
                <div className="mx-auto max-w-screen">
                    <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                        <div className="flex-row bg-aquaGreen text-white items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4">
                            <div>
                                <h5 className="mr-3 font-semibold">Materi</h5>
                                <p className="text-sm">
                                    Kumpulan materi yang telah dibuat
                                </p>
                            </div>
                            <Link
                                href="/admin/material/create"
                                className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-black rounded-lg transition duration-150 bg-yellowAcc hover:bg-yellowAccHover"
                            >
                                <FaStickyNote />
                                Tambah Materi
                            </Link>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-4 py-3">
                                            No
                                        </th>
                                        <th scope="col" className="px-4 py-3">
                                            Judul
                                        </th>
                                        <th scope="col" className="px-2 py-3">
                                            Gambar
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-3 max-w-32"
                                        >
                                            Isi Singkat
                                        </th>
                                        <th scope="col" className="px-4 py-3">
                                            Actions
                                            <span className="sr-only"></span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {materials.map((material, i) => (
                                        <tr
                                            className="border-b dark:border-gray-700"
                                            key={i + 1}
                                        >
                                            <th
                                                scope="row"
                                                className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                            >
                                                {i + 1}
                                            </th>
                                            <th
                                                scope="row"
                                                className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                            >
                                                {material.title}
                                            </th>
                                            <td className="px-2 py-3">
                                                <img
                                                    src={`/storage/${material.image}`}
                                                    alt=""
                                                    className="w-48"
                                                />
                                            </td>
                                            <td className="px-4 py-3 max-w-32 text-justify">
                                                {material.excerpt}
                                            </td>
                                            <td className="px-4 py-3 flex flex-col items-start justify-start gap-2">
                                                <Link
                                                    href={`/admin/material/${material.slug}`}
                                                    className="flex items-center gap-2 bg-green-600 transition duration-150 hover:bg-green-700 text-white px-3 py-1 rounded-full font-bold"
                                                >
                                                    <BiDetail />
                                                    <span>Detail</span>
                                                </Link>
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
                                                    onClick={(e) =>
                                                        handleDelete(
                                                            material.slug
                                                        )
                                                    }
                                                >
                                                    <FaTrashAlt />
                                                    <span>Delete</span>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </AdminLayout>
    );
};

export default AdminMaterialPage;
