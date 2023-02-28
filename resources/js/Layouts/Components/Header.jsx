import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/inertia-react";

export default function Header({ title }) {
    /* Function for dropdowns */
    function openDropdown(dropdownID) {
        if (document.getElementById(dropdownID)) {
            document.getElementById(dropdownID).classList.toggle("hidden");
            document.getElementById(dropdownID).classList.toggle("block");
        } else console.log("The Reference does not exist");
    }
    const asset = window.document
        .getElementsByTagName("head")[0]
        .getAttribute("base");
    return (
        <nav className="absolute top-0 left-0 w-full z-10 md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
            <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
                <p className="text-base-content text-md uppercase hidden lg:inline-block font-semibold">
                    {title}
                </p>
                <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
                    <button
                        className="block"
                        onClick={() => openDropdown("user-dropdown")}
                    >
                        <div className="items-center flex">
                            <span className="w-12 h-12 text-sm inline-flex items-center justify-center rounded-full">
                                <img
                                    alt="profile picture"
                                    className="w-full rounded-full align-middle border-none shadow-lg"
                                    src={asset + "/img/user.svg"}
                                />
                            </span>
                        </div>
                    </button>
                    <div
                        className="hidden bg-base-100 text-center float-left py-2 list-none text-left rounded shadow-lg min-w-48 mt-4 w-64"
                        id="user-dropdown"
                    >
                        <Link
                            href={route("profile.edit")}
                            className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:text-primary"
                        >
                            <FontAwesomeIcon icon={faUser} /> Profile
                        </Link>
                        <Link
                            className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:text-error"
                            href={route("logout")}
                            method="post"
                            as="button"
                        >
                            <FontAwesomeIcon icon={faSignOutAlt} /> Sign Out
                        </Link>
                    </div>
                </ul>
            </div>
        </nav>
    );
}
