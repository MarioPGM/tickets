export default function Footer() {
    const appName = window.document
        .getElementsByTagName("title")[0]
        ?.innerText.split("-")[1];

    const appVersion = window.document.getElementsByName("version")[0].getAttribute("version");

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer footer-center p-4">
            <div className="flex">
                {appName} V {appVersion} © {currentYear} | Hecho con 💜 por{" "}
                <a href="https://www.perspective.com.mx" target="_blank" className="text-purple-500 hover:underline">Perspective Global de México</a>
            </div>
        </footer>
    );
}
