import { useEffect } from "react";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function Login({ status, canResetPassword }) {

    const appName = window.document
        .getElementsByTagName("title")[0]
        ?.innerText.split("-")[1];

        const appVersion = window.document.getElementsByName("version")[0].getAttribute("version");

    const currentYear = new Date().getFullYear();

    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <div className="bg-no-repeat bg-cover bg-center text-base-content relative bg-[url('assets/img/background.jpeg')]">
            <Head title="Ingresar" />
            <div className="absolute bg-primary opacity-75 inset-0 z-1"></div>
            <div className="min-h-screen flex m-auto sm:flex-row w-11/12 sm:justify-center z-30">
                <div className="self-center p-0 sm:p-10 sm:max-w-5xl xl:max-w-2xl z-10">
                    <div className="self-start hidden lg:flex flex-col">
                        <h1 className="mb-3 font-bold text-5xl">
                            Hola 👋 Bienvenido a {appName}
                        </h1>
                    </div>
                </div>
                <div className="flex justify-center self-center z-10">
                    <div className="p-12 bg-base-100 text-base-content mx-auto rounded-2xl w-full">
                        <div className="mb-4">
                            <h3 className="font-semibold text-2xl">Ingresar</h3>
                            <p>Por favor entra con tu cuenta</p>
                        </div>
                        {status && (
                            <div className="mb-4 font-medium text-sm text-green-600">
                                {status}
                            </div>
                        )}
                        <form onSubmit={submit} autoComplete="off">
                            <div className="space-y-5">
                                <div className="space-y-2">
                                    <TextInput
                                        label="Correo eléctronico"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="w-full"
                                        autoComplete="username"
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                    />
                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <TextInput
                                        label="Contraseña"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="w-full"
                                        autoComplete="current-password"
                                        handleChange={onHandleChange}
                                    />
                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    {canResetPassword && (
                                        <Link
                                            href={route("password.request")}
                                            className="underline text-sm hover:text-info rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                                        >
                                            Olvidaste tu contraseña?
                                        </Link>
                                    )}
                                </div>
                                <div className="mt-4">
                                    <PrimaryButton
                                        className="btn-primary w-full flex justify-center"
                                        processing={processing}
                                    >
                                        Ingresar
                                    </PrimaryButton>
                                </div>
                            </div>
                        </form>
                        <div className="pt-5 text-center text-base-content text-xs">
                            <span>
                                {appName} V {appVersion} © {currentYear} | Hecho con 💜
                                por{" "}
                                <a
                                    href="https://www.perspective.com.mx"
                                    target="_blank"
                                    className="text-purple-500 hover:underline"
                                >
                                    Perspective Global de México
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
