import axios from "axios";
import React, { useEffect, useState } from "react";
import PirateBox from "../components/PirateBox";
import {Link} from "@reach/router";

const Main = (props) => {

    const [pirates, setPirates] = useState([]);

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates")
        .then(res => setPirates(res.data))
        .catch(err => console.log(err))
    }, [])

    return(
        <div>
            <div className="d-flex p-2 bd-highlight justify-content-center" id="header">
                <h1 className="display-1">Pirate Crew</h1>
                <Link to="/new" className="btn btn-info btn-lg m-5">Add new Pirate</Link>
            </div>
            <div className="d-flex justify-content-around flex wrap">
            {
                pirates.map((item, i) => {
                return <PirateBox item={item} key={i} />
            })
            }
            </div>
        </div>
    )
}
export default Main;