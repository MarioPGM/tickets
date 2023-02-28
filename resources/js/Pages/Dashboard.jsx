import BackOfficeLayout from "@/Layouts/BackOfficeLayout";

export default function Dashboard(props) {
    return (
        <BackOfficeLayout auth={props.auth} header="Dashboard">
        </BackOfficeLayout>
    );
}
