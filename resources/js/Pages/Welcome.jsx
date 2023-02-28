import { Link, Head } from "@inertiajs/inertia-react";

export default function Welcome(props) {
    return (
        <>
            <Head title="Bienvenido" />
            <header className="relative flex items-center justify-center h-screen overflow-hidden">
                <div className="relative z-30 text-center">
                    <img
                        className="object-scale-down h-48 w-96 mx-auto"
                        src="assets/img/icon.png"
                        alt="icon"
                    />
                    <p className="text-xl lg:text-4xl text-white text-bold uppercase mt-2 text-center px-64">
                        {props.appName}
                    </p>
                    <Link
                        href={route("dashboard")}
                        className="btn w-1/2 lg:w-1/3 mt-6"
                    >
                        Entrar
                    </Link>
                </div>
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
                >
                    <source
                        src="assets/video/background.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </header>
        </>
    );
}
