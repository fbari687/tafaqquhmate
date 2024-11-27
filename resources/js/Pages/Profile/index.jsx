import Layout from "@/Layouts/Layout";
import { Link, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const profilePage = ({ quizAnswers }) => {
    const { auth } = usePage().props;
    const { errors } = usePage().props;

    const [open, setOpen] = useState(false);
    const [image, setImage] = useState();

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const { data, setData, post, progress } = useForm({
        image: null,
        username: auth.username,
    });

    const handleImageChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
        setData((prevData) => ({
            ...prevData,
            image: e.target.files[0],
        }));
    };

    const submitForm = (e) => {
        e.preventDefault();
        post("/profile");
        onCloseModal();
    };

    return (
        <Layout>
            <div className="container mx-auto py-12 px-5 relative">
                <div className="md:flex no-wrap md:-mx-2 ">
                    <div className="w-full md:w-3/12 md:mx-2">
                        <div className="bg-white p-3 border-t-4 border-green-400 flex flex-col gap-2">
                            <h1 className="text-gray-900 text-center font-bold text-xl leading-8 my-1">
                                {auth.name}
                            </h1>
                            <img
                                className="h-24 w-24 rounded-full mx-auto object-cover"
                                src={`/storage/${auth.image}`}
                                alt=""
                            />
                            <button
                                className="bg-yellowAcc text-black hover:bg-yellowAccHover transition duration-150 py-1 px-3 text-center font-bold rounded-full text-sm w-fit self-center cursor-pointer"
                                onClick={onOpenModal}
                            >
                                Ganti Foto Profil
                            </button>
                            <Modal open={open} onClose={onCloseModal} center>
                                <form onSubmit={submitForm}>
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
                                            <progress
                                                value={progress.percentage}
                                                max="100"
                                            >
                                                {progress.percentage}%
                                            </progress>
                                        )}
                                        {image && (
                                            <div className="border-2 p-2 mt-5 flex flex-col gap-1">
                                                <span className="text-sm">
                                                    Preview
                                                </span>
                                                <img
                                                    src={image}
                                                    alt=""
                                                    className="w-1/2"
                                                />
                                            </div>
                                        )}
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
                            </Modal>
                            <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                <li className="flex items-center py-3">
                                    <span>Daftar Sejak</span>
                                    <span className="ml-auto">
                                        {new Date(
                                            auth.created_at
                                        ).toLocaleDateString("id-ID", {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        })}
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="my-4"></div>
                    </div>
                    <div className="w-full md:w-9/12 md:mx-2 h-full">
                        <div className="bg-white p-3 shadow-sm rounded-sm w-full">
                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                <span clas="text-green-500">
                                    <svg
                                        className="h-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                    </svg>
                                </span>
                                <span className="tracking-wide">Profile</span>
                            </div>
                            <div className="text-gray-700 w-full">
                                <div className="grid md:grid-cols-2 text-sm break-words">
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">
                                            Nama Lengkap
                                        </div>
                                        <div className="px-4 py-2">
                                            {auth.name}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">
                                            Username
                                        </div>
                                        <div className="px-4 py-2">
                                            {auth.username}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">
                                            Email
                                        </div>
                                        <div className="px-4 py-2">
                                            {auth.email}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="my-4"></div>

                        <div className="bg-white p-3 shadow-sm rounded-sm">
                            <div className="grid grid-cols-1">
                                <div>
                                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                        <span clas="text-green-500">
                                            <svg
                                                className="h-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                />
                                            </svg>
                                        </span>
                                        <span className="tracking-wide">
                                            Riwayat Kuis
                                        </span>
                                    </div>
                                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3"
                                                    >
                                                        Kuis
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3"
                                                    >
                                                        Benar
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3"
                                                    >
                                                        Salah
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3"
                                                    >
                                                        Nilai Akhir
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3"
                                                    >
                                                        Tanggal
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {quizAnswers.map(
                                                    (quizAnswer, i) => (
                                                        <tr
                                                            className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                                                            key={i}
                                                        >
                                                            <th
                                                                scope="row"
                                                                className="px-6 py-4 font-medium text-blue-700 underline whitespace-nowrap"
                                                            >
                                                                <Link
                                                                    href={`/kuis/${quizAnswer.quiz.slug}`}
                                                                >
                                                                    {
                                                                        quizAnswer
                                                                            .quiz
                                                                            .title
                                                                    }
                                                                </Link>
                                                            </th>
                                                            <td className="px-6 py-4">
                                                                {
                                                                    quizAnswer.correct
                                                                }
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                {
                                                                    quizAnswer.wrong
                                                                }
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                {
                                                                    quizAnswer.last_grade
                                                                }
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                {new Date(
                                                                    quizAnswer.created_at
                                                                ).toLocaleDateString(
                                                                    "id-ID",
                                                                    {
                                                                        year: "numeric",
                                                                        month: "short",
                                                                        day: "numeric",
                                                                    }
                                                                )}
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default profilePage;
