import Layout from "@/Layouts/Layout";
import { Link, usePage } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const registerPage = () => {
    const { errors } = usePage().props;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfPassword, setShowConfPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        router.post("/register", {
            name,
            email,
            username,
            password,
            confPassword,
        });
    };

    return (
        <Layout>
            <section className="bg-cream dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <Link
                        href="/"
                        className="flex items-center mb-6 text-2xl font-semibold text-black dark:text-white"
                    >
                        <img
                            className="h-12 mr-2"
                            src={"/storage/localImage/logo500.png"}
                            alt="logo"
                        />
                        TafaqquhMate
                    </Link>
                    <div className="w-full bg-aquaGreen rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
                                Buat Akun Baru
                            </h1>
                            <form
                                className="space-y-4 md:space-y-6"
                                onSubmit={handleSubmit}
                            >
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block mb-2 text-sm font-medium text-white dark:text-white"
                                    >
                                        Nama Lengkap
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Nama"
                                        required
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
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
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-white dark:text-white"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="nama@pnj.ac.id"
                                        required
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
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
                                <div>
                                    <label
                                        htmlFor="username"
                                        className="block mb-2 text-sm font-medium text-white dark:text-white"
                                    >
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="namatik24"
                                        required
                                        value={username}
                                        onChange={(e) =>
                                            setUsername(e.target.value)
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
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-white dark:text-white"
                                    >
                                        Password
                                    </label>
                                    <div className="w-full flex items-center justify-between bg-gray-50 border border-gray-300 rounded-lg overflow-hidden">
                                        <input
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            name="password"
                                            id="password"
                                            placeholder="••••••••"
                                            className="bg-gray-50 border border-none text-gray-900 outline-none focus:outline-none block w-full p-2.5 focus:ring-0"
                                            required
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                        <button
                                            type="button"
                                            onClick={(e) =>
                                                setShowPassword(!showPassword)
                                            }
                                            className="bg-gray-50 h-full flex items-center justify-center p-2"
                                        >
                                            {showPassword ? (
                                                <FaEyeSlash />
                                            ) : (
                                                <FaEye />
                                            )}
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="confPassword"
                                        className="block mb-2 text-sm font-medium text-white dark:text-white"
                                    >
                                        Confirm Password
                                    </label>
                                    <div className="w-full flex items-center justify-between bg-gray-50 border border-gray-300 rounded-lg overflow-hidden">
                                        <input
                                            type={
                                                showConfPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            name="confPassword"
                                            id="confPassword"
                                            placeholder="••••••••"
                                            className="bg-gray-50 border border-none text-gray-900 outline-none focus:outline-none block w-full p-2.5 focus:ring-0"
                                            required
                                            value={confPassword}
                                            onChange={(e) =>
                                                setConfPassword(e.target.value)
                                            }
                                        />
                                        <button
                                            type="button"
                                            onClick={(e) =>
                                                setShowConfPassword(
                                                    !showConfPassword
                                                )
                                            }
                                            className="bg-gray-50 h-full flex items-center justify-center p-2"
                                        >
                                            {showConfPassword ? (
                                                <FaEyeSlash />
                                            ) : (
                                                <FaEye />
                                            )}
                                        </button>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-black bg-yellowAcc hover:bg-yellowAccHover focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Buat Akun
                                </button>
                                <p className="text-sm font-light text-white dark:text-gray-400">
                                    Sudah punya akun?{" "}
                                    <Link
                                        href="/login"
                                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    >
                                        Login disini
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default registerPage;
