import { faInfo } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import TextInput from "./TextInput";
import InputLabel from "./InputLabel";

const ExtraInfo = ({ props }) => {
    return (
        <Card>
            <Card.Header title={"Detalles del registro"} icon={faInfo} />
            <div className="md:grid md:grid-cols-4 md:gap-4 px-4 md:px-12 py-8">
                <div className="form-control">
                    <InputLabel
                        value={"Última actualización hecha por"}
                        forInput="updated_by"
                    />
                    <TextInput
                        id="updated_by"
                        label="Última actualización hecha por"
                        value={props.updated_by}
                        disabled
                    />
                </div>
                <div className="form-control">
                    <InputLabel
                        value={"Última actualización"}
                        forInput="updated_at"
                    />
                    <TextInput
                        label="Última actualización"
                        value={props.updated_at}
                        disabled
                    />
                </div>
                <div className="form-control">
                    <InputLabel value={"Creado por"} forInput="created_by" />
                    <TextInput
                        label="Creado por"
                        value={props.created_by}
                        disabled
                    />
                </div>
                <div className="form-control">
                    <InputLabel
                        value={"Fecha de creación"}
                        forInput="created_at"
                    />
                    <TextInput
                        label="Fecha de creación"
                        value={props.created_at}
                        disabled
                    />
                </div>
            </div>
        </Card>
    );
};

export default ExtraInfo;
