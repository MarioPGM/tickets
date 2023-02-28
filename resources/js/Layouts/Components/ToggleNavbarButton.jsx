import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function ToggleNavbarButton({ collapseID }) {
    function toggleNavbar() {
        if (document.getElementById(collapseID)) {
            document.getElementById(collapseID).classList.toggle("hidden");
            document.getElementById(collapseID).classList.toggle("bg-white");
            document.getElementById(collapseID).classList.toggle("m-2");
            document.getElementById(collapseID).classList.toggle("py-3");
            document.getElementById(collapseID).classList.toggle("px-6");
        }else
            console.log('The Reference does not exist')
    }
    return (
        <button
            className="cursor-pointer text-neutral-content opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            onClick={toggleNavbar}
        >
            <FontAwesomeIcon icon={faBars} />
        </button>
    );
}
