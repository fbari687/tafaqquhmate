import AdminLayout from "@/Layouts/AdminLayout";
import { useState, useEffect, useRef } from "react";
import ReactQuill from "react-quill-new";
import "quill/dist/quill.snow.css";
import { useForm, usePage } from "@inertiajs/react";

const AdminMaterialEdit = ({ material }) => {
    const { errors } = usePage().props;

    const [value, setValue] = useState(material.body);
    const quillRef = useRef(null);
    const [image, setImage] = useState(`/storage/${material.image}`);
    const [excerpt, setExcerpt] = useState(material.excerpt);

    const { data, setData, post, progress } = useForm({
        _method: "put",
        title: material.title || "",
        link: material.link || "",
        body: material.body || "",
        excerpt: material.excerpt || "",
        oldImage: material.image || "",
        image: null,
    });

    const getText = () => {
        const editor = quillRef.current.getEditor();
        const plainText = editor.getText();

        setExcerpt(plainText);
    };

    useEffect(() => {
        getText();

        setData((prevData) => ({
            ...prevData,
            body: value,
            excerpt: excerpt,
        }));
    }, [value, excerpt]);

    const handleImageChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
        setData((prevData) => ({
            ...prevData,
            image: e.target.files[0],
        }));
    };

    const submitForm = (e) => {
        e.preventDefault();

        // console.log(data);
        post(`/admin/material/${material.slug}`);
    };

    return (
        <AdminLayout>
            <div className="mx-auto flex flex-col gap-2 bg-white rounded-md overflow-hidden">
                <div className="flex-row bg-aquaGreen text-white items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4">
                    <div>
                        <h5 className="mr-3 font-semibold text-xl">
                            Edit Materi
                        </h5>
                    </div>
                </div>
                <form
                    className="w-full grid gap-4 grid-cols-1 lg:grid-cols-3 px-4 py-2 relative"
                    onSubmit={submitForm}
                >
                    <div className="">
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
                                htmlFor="link"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Link Materi Lengkap (Opsional)
                            </label>
                            <input
                                type="text"
                                id="link"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                placeholder="Link"
                                value={data.link}
                                onChange={(e) =>
                                    setData("link", e.target.value)
                                }
                            />
                            {errors.link && (
                                <p className="mt-2 px-2 text-xs text-red-600 dark:text-red-500">
                                    <span class="font-medium">
                                        {errors.link}
                                    </span>
                                </p>
                            )}
                        </div>
                        <div className="mb-5">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                htmlFor="image"
                            >
                                Upload Gambar Baru
                            </label>
                            <input
                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                aria-describedby="user_avatar_help"
                                id="image"
                                type="file"
                                onChange={(e) => {
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
                    <div className="col-span-1 lg:col-span-2 z-0">
                        <div className="mb-5">
                            <label
                                htmlFor="body"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Isi Materi
                            </label>
                            <ReactQuill
                                theme="snow"
                                value={value}
                                onChange={setValue}
                                ref={quillRef}
                            />
                            {errors.body && (
                                <p className="mt-2 px-2 text-xs text-red-600 dark:text-red-500">
                                    <span class="font-medium">
                                        {errors.body}
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

export default AdminMaterialEdit;
