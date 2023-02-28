import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/inertia-react";
import { toast } from "react-toastify";

export default function RemoveButton({ id, model }) {
    const { delete: destroy, processing } = useForm({
        id: id,
    });

    const submit = (e) => {
        e.preventDefault();

        destroy(route(`${model}.destroy`, id));
    };

    if (processing) {
        toast("🚮 El registro se eliminó con exito");
    }

    return (
        <>
            <label
                htmlFor={"remove-modal-" + id}
                className="btn btn-circle btn-outline btn-error mb-2 md:mb-0 md:mx-2"
            >
                <FontAwesomeIcon icon={faTrash} />
            </label>

            <input
                type="checkbox"
                id={"remove-modal-" + id}
                className="modal-toggle"
            />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor={"remove-modal-" + id}
                        className="btn btn-sm btn-circle btn-error absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="text-lg font-bold mb-12">
                        ¿Estás seguro que deseas borrar el registro?
                    </h3>
                    <div className="flex">
                        <label
                            htmlFor={"remove-modal-" + id}
                            className="btn btn-outline btn-success mr-2"
                        >
                            Conservar el registro
                        </label>
                        <form onSubmit={submit}>
                            <PrimaryButton className="btn-outline btn-error mr-2">
                                Eliminar registro
                            </PrimaryButton>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
