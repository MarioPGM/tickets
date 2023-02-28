import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/inertia-react";

export default function ProfileMobileButton({ auth }) {
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
        <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
                <button
                    className="block"
                    onClick={() => openDropdown("user-responsive-dropdown")}
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
                    id="user-responsive-dropdown"
                >
                    <Link
                        href={route("profile.edit")}
                        className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:"
                    >
                        <FontAwesomeIcon icon={faUser} /> Profile
                    </Link>
                    <Link
                        className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:text-red-500"
                        href={route("logout")}
                        method="post"
                        as="button"
                    >
                        <FontAwesomeIcon icon={faSignOutAlt} /> Sign Out
                    </Link>
                </div>
            </li>
        </ul>
    );
}
