import Layout from "@/Layouts/Layout";
import { Link, usePage } from "@inertiajs/react";

const profilePage = ({ quizAnswers }) => {
    const { auth } = usePage().props;
    return (
        <Layout>
            <div className="container mx-auto py-12 px-5 relative">
                <div className="md:flex no-wrap md:-mx-2 ">
                    <div className="w-full md:w-3/12 md:mx-2">
                        <div className="bg-white p-3 border-t-4 border-green-400">
                            <h1 className="text-gray-900 text-center font-bold text-xl leading-8 my-1">
                                {auth.name}
                            </h1>
                            <img
                                className="h-24 w-24 rounded-full mx-auto"
                                src={`/storage/${auth.image}`}
                                alt=""
                            />
                            <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                {/* <li className="flex items-center py-3">
                                    <span>Status</span>
                                    <span className="ml-auto">
                                        <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                                            Active
                                        </span>
                                    </span>
                                </li> */}
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
