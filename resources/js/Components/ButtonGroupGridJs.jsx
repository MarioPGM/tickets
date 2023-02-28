import { Link } from "@inertiajs/inertia-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import RemoveButton from "@/Components/RemoveButton";

export default function ButtonGroupGridJs({
    id,
    model,
    show = true,
    edit = true,
    remove = true,
}) {
    return (
        <div className="flex flex-col md:flex-row md:justify-end">
            {show && (
                <Link
                    className="btn btn-circle btn-outline btn-warning mb-2 md:mb-0 md:mx-2"
                    href={route(model + ".show", id)}
                >
                    <FontAwesomeIcon icon={faEye} />
                </Link>
            )}
            {edit && (
                <Link
                    className="btn btn-circle btn-outline btn-info mb-2 md:mb-0 md:mx-2"
                    href={route("dashboard")}
                >
                    <FontAwesomeIcon icon={faPenToSquare} />
                </Link>
            )}
            {remove && <RemoveButton id={id} model={model} />}
        </div>
    );
}
