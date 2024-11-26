import NavbarAdmin from "@/Components/NavbarAdmin";
import { Head, usePage } from "@inertiajs/react";
import { RiDashboardFill } from "react-icons/ri";
import { FaStickyNote } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import SidebarItem from "@/Components/SidebarItem";
import SweetAlert2 from "react-sweetalert2";
import { useEffect, useState } from "react";
import { BiUser } from "react-icons/bi";

const AdminLayout = ({ children }) => {
    const { flash } = usePage().props;
    const { auth } = usePage().props;
    const [swalProps, setSwalProps] = useState({});

    useEffect(() => {
        if (flash) {
            if (flash.status == "success") {
                setSwalProps({
                    show: true,
                    title: flash.title,
                    icon: flash.icon,
                });
            } else if (flash.status == "failed") {
                setSwalProps({
                    show: true,
                    title: flash.title,
                    icon: flash.icon,
                });
            }
        }
    }, [flash]);

    const [openSide, setOpenSide] = useState(false);
    // const sideMenu = useRef(null);

    // const closeOpenSide = (e) => {
    //     console.log("closeOpenSide triggered");
    //     if (openSide && !sideMenu.current?.contains(e.target)) {
    //         setOpenSide(false);
    //     }
    // };

    function sidebar(e) {
        setOpenSide(!openSide);
    }

    // useEffect(() => {
    //     document.addEventListener("mousedown", closeOpenSide);

    //     return () => {
    //         document.removeEventListener("mousedown", closeOpenSide);
    //     };
    // }, [openSide]);

    // useEffect(() => {

    //     return () => {
    //         document.removeEventListener("mousedown", closeOpenMenu);
    //     };
    // }, [openSide]);

    return (
        <>
            <Head>
                <title>TafaqquhMate</title>
            </Head>
            <NavbarAdmin openSidebar={sidebar} />
            <SweetAlert2
                {...swalProps}
                didClose={() => setSwalProps({ show: false })}
            />

            <aside
                id="logo-sidebar"
                className={
                    openSide
                        ? "fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform transform-none bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
                        : "fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
                }
                aria-label="Sidebar"
            >
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <SidebarItem
                            href={"/admin"}
                            label={"Dashboard"}
                            icon={<RiDashboardFill />}
                        />
                        {auth.role.name != "Pemateri" && (
                            <SidebarItem
                                href={"/admin/user"}
                                label={"User"}
                                icon={<BiUser />}
                            />
                        )}
                        <SidebarItem
                            href={"/admin/material"}
                            label={"Materi"}
                            icon={<FaStickyNote />}
                        />
                        <SidebarItem
                            href={"/admin/quiz"}
                            label={"Kuis"}
                            icon={<TfiWrite />}
                        />
                    </ul>
                </div>
            </aside>
            <div className="p-4 sm:ml-64 bg-cream min-h-dvh">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    {children}
                </div>
            </div>
            {openSide && (
                <div
                    drawer-backdrop=""
                    className="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30"
                ></div>
            )}
        </>
    );
};

export default AdminLayout;
