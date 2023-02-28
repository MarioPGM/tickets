import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/inertia-react";

const Button = () => {
    return <></>;
};

const Create = ({
    title = "Agregar registro nuevo",
    icon,
    className,
    href,
}) => {
    icon = icon ?? faQuestion;
    return (
        <Link href={href} className={"btn btn-primary " + className}>
            {title}
            <FontAwesomeIcon icon={icon} className="ml-2" />
        </Link>
    );
};

const Back = ({ icon, className }) => {
    icon = icon ?? faQuestion;

    const goBack = () => {
        window.history.back()
    }

    return (
        <button
            className={"btn btn-circle btn-primary " + className}
            onClick={goBack}
        >
            <FontAwesomeIcon icon={icon} />
        </button>
    );
};

const Submit = ({ title = "Guardar Ticket", icon, className }) => {
    icon = icon ?? faQuestion;

    return (
        <button className={"btn btn-primary " + className}>
            {title} <FontAwesomeIcon icon={icon} className="ml-2" />
        </button>
    );
};

Button.Create = Create;
Button.Back = Back;
Button.Submit = Submit;

export default Button;
