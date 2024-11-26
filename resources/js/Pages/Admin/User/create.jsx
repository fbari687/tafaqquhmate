import AdminLayout from "@/Layouts/AdminLayout";
import { useForm, usePage } from "@inertiajs/react";
import { useState } from "react";

const AdminUserCreate = ({ roles }) => {
    const { errors } = usePage().props;

    const { data, setData, post, progress } = useForm({
        name: "",
        username: "",
        email: "",
        password: "",
        confPassword: "",
        image: null,
        role_id: "",
    });

    const [image, setImage] = useState();

    const handleImageChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    };

    const submitForm = (e) => {
        e.preventDefault();

        post("/admin/user");
    };
    return (
        <AdminLayout>
            <div className="mx-auto flex flex-col gap-2 bg-white rounded-md overflow-hidden">
                <div className="flex-row bg-aquaGreen text-white items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4">
                    <div>
                        <h5 className="mr-3 font-semibold text-xl">
                            Tambah User
                        </h5>
                    </div>
                </div>
                <form
                    className="w-full grid gap-4 grid-cols-1 lg:grid-cols-2 px-4 py-2 relative"
                    onSubmit={submitForm}
                >
                    <div className="">
                        <div className="mb-5">
                            <label
                                htmlFor="user_name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Nama
                            </label>
                            <input
                                type="text"
                                id="user_name"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                placeholder="Nama"
                                required
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                            {errors.name && (
                                <p className="mt-2 px-2 text-xs text-red-600 dark:text-red-500">
                                    <span class="font-medium">
                                        {errors.name}
                                    </span>
                                </p>
                            )}
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="user_username"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                id="user_username"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                placeholder="Username"
                                value={data.username}
                                onChange={(e) =>
                                    setData("username", e.target.value)
                                }
                            />
                            {errors.username && (
                                <p className="mt-2 px-2 text-xs text-red-600 dark:text-red-500">
                                    <span class="font-medium">
                                        {errors.username}
                                    </span>
                                </p>
                            )}
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                placeholder="Email"
                                required
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            {errors.email && (
                                <p className="mt-2 px-2 text-xs text-red-600 dark:text-red-500">
                                    <span class="font-medium">
                                        {errors.email}
                                    </span>
                                </p>
                            )}
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="role"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Pilih Role
                            </label>
                            <select
                                id="role"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={data.role_id}
                                onChange={(e) =>
                                    setData("role_id", e.target.value)
                                }
                            >
                                <option value="0" disabled>
                                    Pilih Role
                                </option>
                                {roles.map((role, i) => (
                                    <option value={role.name} key={i + 1}>
                                        {role.name}
                                    </option>
                                ))}
                            </select>
                            {errors.role_id && (
                                <p className="mt-2 px-2 text-xs text-red-600 dark:text-red-500">
                                    <span class="font-medium">
                                        {errors.role_id}
                                    </span>
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="">
                        <div className="mb-5">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="name"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                placeholder="Password"
                                required
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                            {errors.password && (
                                <p className="mt-2 px-2 text-xs text-red-600 dark:text-red-500">
                                    <span class="font-medium">
                                        {errors.password}
                                    </span>
                                </p>
                            )}
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="username"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="username"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                placeholder="Confirm Password"
                                value={data.confPassword}
                                onChange={(e) =>
                                    setData("confPassword", e.target.value)
                                }
                            />
                            {errors.confPassword && (
                                <p className="mt-2 px-2 text-xs text-red-600 dark:text-red-500">
                                    <span class="font-medium">
                                        {errors.confPassword}
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

export default AdminUserCreate;
