import AdminLayout from "@/Layouts/AdminLayout";
import { BiUser } from "react-icons/bi";
import { FaStickyNote } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";

const DashboardPage = ({ totalMaterial, totalUser, totalQuiz }) => {
    return (
        <AdminLayout>
            <div className="w-full grid grid-cols-3 gap-2">
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 border border-blue-gray-100 shadow-sm">
                    <div className="bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 absolute grid h-12 w-12 place-items-center">
                        <FaStickyNote />
                    </div>
                    <div className="p-4 text-right">
                        <p className="block antialiased font-sans text-sm leading-normal font-bold text-blue-gray-600">
                            Total Materi
                        </p>
                        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                            {totalMaterial}
                        </h4>
                    </div>
                </div>
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 border border-blue-gray-100 shadow-sm">
                    <div className="bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 absolute grid h-12 w-12 place-items-center">
                        <TfiWrite />
                    </div>
                    <div className="p-4 text-right">
                        <p className="block antialiased font-sans text-sm leading-normal font-bold text-blue-gray-600">
                            Total Kuis
                        </p>
                        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                            {totalQuiz}
                        </h4>
                    </div>
                </div>
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 border border-blue-gray-100 shadow-sm">
                    <div className="bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 absolute grid h-12 w-12 place-items-center">
                        <BiUser />
                    </div>
                    <div className="p-4 text-right">
                        <p className="block antialiased font-sans text-sm leading-normal font-bold text-blue-gray-600">
                            Total Pengguna
                        </p>
                        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                            {totalUser}
                        </h4>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default DashboardPage;
