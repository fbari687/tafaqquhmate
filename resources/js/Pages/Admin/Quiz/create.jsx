import AdminLayout from "@/Layouts/AdminLayout";
import { useForm, usePage } from "@inertiajs/react";
import { useState } from "react";

const AdminQuizCreate = ({ materials }) => {
    const { errors } = usePage().props;

    const [image, setImage] = useState();

    const { data, setData, post, progress } = useForm({
        title: "",
        time: "",
        amountPerSession: "",
        description: "",
        material_slug: "",
        isActive: "",
        image: null,
    });

    const handleImageChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    };

    const submitForm = (e) => {
        e.preventDefault();

        post("/admin/quiz");
    };

    return (
        <AdminLayout>
            <div className="mx-auto flex flex-col gap-2 bg-white rounded-md overflow-hidden">
                <div className="flex-row bg-aquaGreen text-white items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4">
                    <div>
                        <h5 className="mr-3 font-semibold text-xl">
                            Tambah Kuis
                        </h5>
                    </div>
                </div>
                <form
                    className="w-full grid gap-4 grid-cols-1 lg:grid-cols-2 px-4 py-2 relative"
                    onSubmit={submitForm}
                >
                    <div className="h-full">
                        <div className="mb-5">
                            <label
                                htmlFor="title"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Judul
                            </label>
                            <input
                                type="text"
                                id="title"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                placeholder="Title"
                                required
                                value={data.title}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                            />
                            {errors.title && (
                                <p className="mt-2 px-2 text-xs text-red-600 dark:text-red-500">
                                    <span class="font-medium">
                                        {errors.title}
                                    </span>
                                </p>
                            )}
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="amountPerSession"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Jumlah Soal Per Sesi
                            </label>
                            <input
                                type="number"
                                id="amountPerSession"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                placeholder="x"
                                required
                                value={data.amountPerSession}
                                onChange={(e) =>
                                    setData("amountPerSession", e.target.value)
                                }
                            />
                            {errors.amountPerSession && (
                                <p className="mt-2 px-2 text-xs text-red-600 dark:text-red-500">
                                    <span class="font-medium">
                                        {errors.amountPerSession}
                                    </span>
                                </p>
                            )}
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="time"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Waktu Per Soal (Dalam Detik)
                            </label>
                            <input
                                type="number"
                                id="time"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                placeholder="x"
                                required
                                value={data.time}
                                onChange={(e) =>
                                    setData("time", e.target.value)
                                }
                            />
                            {errors.time && (
                                <p className="mt-2 px-2 text-xs text-red-600 dark:text-red-500">
                                    <span class="font-medium">
                                        {errors.time}
                                    </span>
                                </p>
                            )}
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="material_slug"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Pilih Materi
                            </label>
                            <select
                                id="material_slug"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={data.material_slug}
                                onChange={(e) =>
                                    setData("material_slug", e.target.value)
                                }
                            >
                                <option value="0" disabled>
                                    Pilih Materi
                                </option>
                                {materials.map((material, i) => (
                                    <option value={material.slug} key={i + 1}>
                                        {material.title}
                                    </option>
                                ))}
                            </select>
                            {errors.material_slug && (
                                <p className="mt-2 px-2 text-xs text-red-600 dark:text-red-500">
                                    <span class="font-medium">
                                        {errors.material_slug}
                                    </span>
                                </p>
                            )}
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="isActive"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Status
                            </label>
                            <select
                                id="isActive"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={data.isActive}
                                onChange={(e) =>
                                    setData("isActive", e.target.value)
                                }
                            >
                                <option value="-" disabled>
                                    Pilih Status
                                </option>
                                <option value="1">Aktif</option>
                                <option value="0">Tidak Aktif</option>
                            </select>
                            {errors.isActive && (
                                <p className="mt-2 px-2 text-xs text-red-600 dark:text-red-500">
                                    <span class="font-medium">
                                        {errors.isActive}
                                    </span>
                                </p>
                            )}
                        </div>
                        <div className="mb-5">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                htmlFor="image"
                            >
                                Upload Gambar
                            </label>
                            <input
                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                aria-describedby="user_avatar_help"
                                id="image"
                                type="file"
                                onChange={(e) => {
                                    setData("image", e.target.files[0]);
                                    handleImageChange(e);
                                }}
                            />
                            <p className="text-xs">*Max 2 MB</p>
                            {errors.image && (
                                <p className="mt-2 px-2 text-xs text-red-600 dark:text-red-500">
                                    <span class="font-medium">
                                        {errors.image}
                                    </span>
                                </p>
                            )}
                            {progress && (
                                <progress value={progress.percentage} max="100">
                                    {progress.percentage}%
                                </progress>
                            )}
                            {image && (
                                <div className="border-2 p-2 mt-5 flex flex-col gap-1">
                                    <span className="text-sm">Preview</span>
                                    <img src={image} alt="" className="w-1/2" />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="h-full">
                        <div className="mb-5 h-full pb-16">
                            <label
                                htmlFor="description"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Deskripsi
                            </label>
                            <textarea
                                id="description"
                                className="block h-full p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Isi Deskripsi"
                                value={data.description}
                                onChange={(e) => {
                                    setData("description", e.target.value);
                                }}
                            ></textarea>
                            {errors.description && (
                                <p className="mt-2 px-2 text-xs text-red-600 dark:text-red-500">
                                    <span class="font-medium">
                                        {errors.description}
                                    </span>
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="mt-24 lg:mt-5 lg:col-span-3 flex flex-row items-end justify-end">
                        <button
                            type="submit"
                            className="w-fit text-black bg-yellowAcc hover:bg-yellowAccHover focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium transition duraton-150 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
};

export default AdminQuizCreate;
