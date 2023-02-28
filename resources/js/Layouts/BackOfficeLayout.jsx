import Banner from "@/Layouts/Components/Banner";
import Footer from "@/Layouts/Components/Footer";
import Header from "@/Layouts/Components/Header";
import Sidenav from "@/Layouts/Components/Sidenav";
import { Head } from "@inertiajs/inertia-react";
import "react-toastify/dist/ReactToastify.css";

export default function BackOfficeLayout({ auth, header, children }) {
    return (
        <>
            <Head title={header} />
            <div className="antialiased">
                <Sidenav auth={auth} />
                <div className="relative md:ml-64">
                    <Header title={header} />
                    <Banner />
                    <div className="px-4 md:px-10  mx-auto w-full -m-20">
                        <div className="mb-28">{children}</div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}
