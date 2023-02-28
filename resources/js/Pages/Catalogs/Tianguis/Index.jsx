import BackOfficeLayout from "@/Layouts/BackOfficeLayout";
import Card from "@/Components/Card";
import { faFloppyDisk, faTicket } from "@fortawesome/free-solid-svg-icons";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/inertia-react";
import { Option, Select } from "@material-tailwind/react";
import InputError from "@/Components/InputError";
import Button from "@/Components/Button";
import { toast } from "react-toastify";
import { Inertia } from '@inertiajs/inertia'
import TextArea from "@/Components/TextArea";
import axios from "axios";
import React from "react";


export default function Index(props) {
    const { data, setData, post, recentlySuccessful, errors } = useForm({
        name: "",
        mensaje: "",
        correo: "",

    });


    const baseURL = "https://pruebapgm.atlassian.net/rest/api/3/issue/";
    const tokenURL = "ATATT3xFfGF0lCFDHtDYBeo_fLWYh2XKsRMp0CLCduxbWNAfK9kOUlEEeRIOkTfwcHLJy4ZPH50orFURmAqU0zQsQzCtRlCx5WFiNDJkaGOC-qZZa-K0k2l5PagMts9rLcYPAijdMR9MFpnGJegCEgnyo4Mtmvbx0rU7TRW0z8BaWaY2et1hAjQ=84A9E1CF"
    const [jiraPost, setjiraPost] = React.useState(null);
    const baseDATA = {
        "fields": {
            "project": {
                "id": "10000"
            },
            "issuetype": {
                "id": "10001"
            },
            "summary": "Hola",
            "description": {
                "version": 1,
                "type": "doc",
                "content": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "emoji",
                                "attrs": {
                                    "shortName": ":sweat_smile:",
                                    "id": "1f605",
                                    "text": "😅"
                                }
                            },
                            {
                                "type": "text",
                                "text": " fdsfdsfdsf "
                            }
                        ]
                    }
                ]
            },
            "labels": [],
            "reporter": {
                "id": "70121:1010e5c2-655a-4fc2-bd99-a805bcf7a98a"
            },
            "customfield_10021": []
        },
        "update": {}
    };



    React.useEffect(() => {
       axios.post('https://pruebapgm.atlassian.net/rest/api/3/issue/', baseDATA,{
            withCredentials: true ,
            auth: {
                username: "mario5_25@hotmail.com",
                password: tokenURL
            },
            mode: 'no-cors',
            headers: {
                'Authorization': 'Basic bWFyaW81XzI1QGhvdG1haWwuY29tOkFUQVRUM3hGZkdGMGxDRkRIdERZQmVvX2ZMV1loMlhLc1JNcDBDTENkdXhiV05BZks5a09VbEVFZVJJT2tUZndjSExKeTRaUEg1MG9yRlVSbUFxVTB6UXNRekN0UmxDeDVXRmlOREprYUdPQy1xWlphLUswazJsNVBhZ010czlyTGNZUEFpamRNUjlNRnBuR0plZ0NFZ255bzRNdG12YngwclU3VFJXMHo4QmFXYVkyZXQxaEFqUT04NEE5RTFDRg==',
                'Access-Control-Allow-Origin': '*',
                'origin':'x-requested-with',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        }).then(function (response) {
                console.log('it worked');
            }).catch(function (error) {
                console.log("HI")
                console.log(error);
            })

    }, []);

    const  updatePost = async()=> {
      const response = await  axios.post(baseURL, {
            data: baseDATA,
            headers: {
                'Authorization': 'Basic bWFyaW81XzI1QGhvdG1haWwuY29tOkFUQVRUM3hGZkdGMGxDRkRIdERZQmVvX2ZMV1loMlhLc1JNcDBDTENkdXhiV05BZks5a09VbEVFZVJJT2tUZndjSExKeTRaUEg1MG9yRlVSbUFxVTB6UXNRekN0UmxDeDVXRmlOREprYUdPQy1xWlphLUswazJsNVBhZ010czlyTGNZUEFpamRNUjlNRnBuR0plZ0NFZ255bzRNdG12YngwclU3VFJXMHo4QmFXYVkyZXQxaEFqUT04NEE5RTFDRg==',
                'Content-Type': 'application/json',
                'X-Atlassian-Token': 'no-check',
                'Access-Control-Allow-Origin': '*',
            },
            auth: {
                username: 'mario5_25@hotmail.com',
                password: tokenURL
            }
        })
            .then((response) => {
                // setjiraPost(response.data);
                console.log("It worked")
            }).catch(function (error) {
                console.log("It failed")
                console.log(error);
            })

    }

    if (recentlySuccessful) {
        toast("✅ El registro se creó con exito");
        Inertia.visit(route("tickets.index"));
    }

    const submit = (e) => {
        e.preventDefault();

      //  updatePost();
      post(route("jira.post"));
    };

    return (
        <BackOfficeLayout auth={props.auth} header="Crear Ticket">
            <Card>
                <Card.Header
                    title="Crear Ticket"
                    icon={faTicket}
                    back
                />
                <form
                    onSubmit={submit}
                    className="md:grid md:grid-cols-2 md:gap-2 px-4 md:px-12 py-8"
                    autoComplete="off"
                >
                    <div className="form-control">
                        <TextInput
                            label="Nombre"
                            name="name"
                            value={data.name}
                            isFocused
                            required
                            handleChange={(e) =>
                                setData("name", e.target.value)
                            }
                        />
                        <InputError message={errors.name} className="mt-2" />

                    </div>

                    <div className="form-control">
                        <TextInput
                            label="Correo"
                            name="correo"
                            value={data.correo}
                            isFocused
                            required
                            handleChange={(e) =>
                                setData("correo", e.target.value)
                            }
                        />
                        <InputError message={errors.name} className="mt-2" />

                    </div>

                    <div className="form-control">

                        <TextArea
                            label="Descripcion"
                            name="descripcion"
                            value={data.mensaje}
                            isFocused
                            required
                            handleChange={(e) =>
                                setData("mensaje", e.target.value)}
                        />
                    </div>

                    <div className="col-span-2 mt-4">
                        <Button.Submit className="w-full" icon={faFloppyDisk} />
                    </div>
                </form>
            </Card>
        </BackOfficeLayout>
    );
}
