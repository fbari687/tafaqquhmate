import Navbar from "@/Partials/Navbar";
import Footer from "@/Partials/Footer";
import { Head, usePage } from "@inertiajs/react";
import SweetAlert2 from "react-sweetalert2";
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
    const { flash } = usePage().props;
    const [swalProps, setSwalProps] = useState({});

    useEffect(() => {
        if (flash) {
            if (flash.status == "success") {
                setSwalProps({
                    show: true,
                    title: flash.title,
                    icon: flash.icon,
                });
            }
        }
    }, [flash]);

    return (
        <>
            <Head>
                <title>TafaqquhMate</title>
            </Head>
            <Navbar />
            <SweetAlert2
                {...swalProps}
                didClose={() => setSwalProps({ show: false })}
            />

            <div className="pt-16 bg-cream min-h-dvh">{children}</div>
            <Footer />
        </>
    );
};

export default Layout;
