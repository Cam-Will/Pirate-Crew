import { Link, navigate } from "@reach/router";
import axios from "axios";
import React, { useState } from "react";
import Form from "../components/Form";

const Create= (props) => {
    const [form, setForm] = useState({
        pirateName:"",
        treasureChests:"",
        pegLeg: true,
        eyePatch: true,
        hookHand: true,
        imageUrl:"",
        catchPhrase:"",
        position:""
    });

    const [errors, setErrors] = useState({});

    // const [ferrors, setFErrors] = useState({});

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        })
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/pirate", form)
            .then(res => {
                if(res.data.errors){
                    console.log(res.data);
                    setErrors(res.data.errors);
                    console.log("There was an error!");
                }
                else{
                    console.log("There was not an error",res.data);
                    navigate("/");
                }
                
            })
            .catch(err => console.log(err))
    };

    return(
        <div className="App">
            <div className="d-flex justify-content-center" id="header">
            <h1 className="display-2">Add a new Pirate</h1>
            <Link to="/" className="btn btn-info btn-lg m-4">Home Page</Link>
            </div>
            <Form onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} errors={errors} form={form}/>
        </div>
    )
}
export default Create;