export default function ApplicationLogo({ className }) {
    const asset = window.document
        .getElementsByTagName("head")[0]
        .getAttribute("base");
    return (
        <a href={route("dashboard")} className="m-auto">
            <img src={asset + "/img/icon.png"} alt="icon" className={className} />
        </a>
    );
}
