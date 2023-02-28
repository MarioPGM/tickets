import ApplicationLogo from "@/Components/ApplicationLogo";
import Navbar from "@/Layouts/Components/Navbar";
import ProfileMobileButton from "@/Layouts/Components/ProfileMobileButtons";
import ToggleNavbarButton from "@/Layouts/Components/ToggleNavbarButton";
import { faDesktop, faStore, faTicket } from "@fortawesome/free-solid-svg-icons";

export default function Sidenav({ auth }) {
    return (
        <nav className="bg-base-200 md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6 text-base-content">
            <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                <ToggleNavbarButton collapseID="collapse-sidebar" />
                <ApplicationLogo className="object-scale-down h-24" />
                <ProfileMobileButton auth={auth} />
                <Navbar>
                    <Navbar.Header />
                    <Navbar.Divider />
                    <Navbar.Section>
                        <Navbar.Item
                            title="Dashboard"
                            icon={faDesktop}
                            routeName="dashboard"
                        />
                    </Navbar.Section>
                    <Navbar.Divider />
                    <Navbar.Section title="Catálogos">
                        <Navbar.Item
                            title="Crear Ticket"
                            icon={faTicket}
                            routeName="tickets.index"
                        />
                    </Navbar.Section>
                </Navbar>
            </div>
        </nav>
    );
}
