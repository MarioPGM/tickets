import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/inertia-react";
import { Children } from "react";

function toggleNavbar(collapseID) {
    if (document.getElementById(collapseID)) {
        document.getElementById(collapseID).classList.toggle("hidden");
        document.getElementById(collapseID).classList.toggle("bg-white");
        document.getElementById(collapseID).classList.toggle("m-2");
        document.getElementById(collapseID).classList.toggle("py-3");
        document.getElementById(collapseID).classList.toggle("px-6");
    } else console.log("The Reference does not exist");
}
const Navbar = ({ children }) => {
    return (
        <div
            className="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-1 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded hidden bg-base-100 md:bg-base-200"
            id="collapse-sidebar"
        >
            {children}
        </div>
    );
};
const asset = window.document
.getElementsByTagName("head")[0]
.getAttribute("base");
const Header = () => {
    return (
        <div className="md:min-w-full md:hidden block pb-4 border-b border-solid border-slate-200">
            <div className="flex flex-wrap">
                <div className="w-6/12">
                    <Link
                        className="md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                        href={route("dashboard")}
                    >
                        <img className="h-10" src={asset + "/img/icon.png"} />
                    </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                    <button
                        type="button"
                        className="cursor-pointer text-base-content opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                        onClick={() => toggleNavbar("collapse-sidebar")}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
            </div>
        </div>
    );
};

const Section = ({ title, children }) => {
    return (
        <ul className="menu menu-compact flex flex-col p-0 px-4">
            {title ? (
                <li className="menu-title pl-2 font-bold mb-2">{title}</li>
            ) : (
                ""
            )}
            {children}
        </ul>
    );
};

const Item = ({ title, icon, routeName, className }) => {
    const link = route(routeName);
    const active = route().current(routeName)
        ? "bg-primary text-primary-content"
        : "hover:bg-base-300";
    return (
        <li className={className}>
            <Link
                href={link}
                className={
                    "text-xs uppercase py-3 pl-2 font-bold block rounded-lg " +
                    active
                }
            >
                <FontAwesomeIcon icon={icon} className="mr-2 text-sm" />
                {title}
            </Link>
        </li>
    );
};

const Collapse = ({ title, icon, children }) => {
    var openCollapse = "";

    if (Children.toArray(children)[0].props.children.props) {
        if (
            route().current(
                Children.toArray(children)[0].props.children.props.routeName
            )
        )
            openCollapse = " collapse-open";
    } else {
        Children.toArray(children)[0].props.children.forEach((children) => {
            if (route().current(children.props.routeName))
                openCollapse = " collapse-open";
        });
    }

    return (
        <div
            tabIndex={0}
            className={
                "collapse collapse-arrow text-xs uppercase pl-2 font-bold rounded-lg" +
                openCollapse
            }
        >
            <div className="collapse-title pt-5 hover:bg-base-300 rounded-lg mb-2">
                <FontAwesomeIcon icon={icon} className="mr-2 text-sm" /> {title}
            </div>
            <div className="collapse-content">{children}</div>
        </div>
    );
};

const Divider = () => {
    return <div className="divider"></div>;
};

Navbar.Header = Header;
Navbar.Section = Section;
Navbar.Item = Item;
Navbar.Collapse = Collapse;
Navbar.Divider = Divider;

export default Navbar;
