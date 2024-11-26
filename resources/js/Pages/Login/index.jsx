import Layout from "@/Layouts/Layout";
import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const loginPage = () => {
    const { errors } = usePage().props;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const storeLogin = async (e) => {
        e.preventDefault();
        router.post("/login", {
            email: email,
            password: password,
        });
    };

    return (
        <Layout>
            <section className="bg-cream dark:bg-gray-900 py-28">
                <div className="flex flex-col items-center justify-start px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <Link
                        href="/"
                        className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
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
                                Masuk ke Akun Anda
                            </h1>
                            {errors.email && (
                                <div
                                    className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
                                    role="alert"
                                >
                                    <svg
                                        className="flex-shrink-0 inline w-4 h-4 me-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                    </svg>
                                    <span className="sr-only">Info</span>
                                    <div>
                                        <span className="font-medium">
                                            {errors.email}
                                        </span>
                                    </div>
                                </div>
                            )}
                            <form
                                className="space-y-4 md:space-y-6"
                                onSubmit={storeLogin}
                            >
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
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="nama@pnj.ac.id"
                                        required
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
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
                                <button
                                    type="submit"
                                    className="w-full text-black bg-yellowAcc hover:bg-yellowAccHover focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium transition duraton-150 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Log In
                                </button>
                                <p className="text-sm font-light text-white dark:text-gray-400">
                                    Belum punya akun?{" "}
                                    <Link
                                        href="/register"
                                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    >
                                        Register
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

export default loginPage;
