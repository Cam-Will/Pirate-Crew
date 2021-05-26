import { Link, navigate } from "@reach/router";
import axios from "axios";
import React from "react";

const PirateBox = (props) => {

    const Delete = (event) => {
        axios.delete(`http://localhost:8000/api/pirate/${props.item._id}/delete`)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
            navigate("/");
    }

    return(
        <div className="team">
            <img src={props.item.imageUrl} alt= {props.item.pirateName}/>
            <h2>{props.item.pirateName}</h2>
            <button onClick={() => navigate(`/pirate/${props.item._id}`)} className="btn btn-primary">View Pirate</button>
            <button onClick={Delete} className="btn btn-danger ">Walk the Plank</button>
        </div>
    )
}
export default PirateBox;