import { Link, navigate } from "@reach/router";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PirateBox from "../components/PirateBox";

const SinglePirate = (props) => {
    const [pirate, setPirate] = useState({})

    const [feature, setFeature] = useState("")
    
    const [loaded, setLoaded] = useState(false)


    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirate/${props._id}`)
            .then(res => {
                setPirate(res.data);
                setLoaded(true);
                })
            .catch(err => console.log(err))
    }, [loaded])

    const onClickPeg = (bool) => {
        console.log(bool)
        setFeature(bool)
        axios.patch(`http://localhost:8000/api/pirate/${props._id}/edit`, {pegLeg: bool})
            .then(res => {
                console.log(res);
                setLoaded(false);
            })
            .catch(err => console.log(err))
    }

    const onClickEye = (bool) => {
        console.log(bool)
        setFeature(bool)
        axios.patch(`http://localhost:8000/api/pirate/${props._id}/edit`, {eyePatch: bool})
            .then(res => {
                console.log(res);
                setLoaded(false);
            })
            .catch(err => console.log(err))
    }

    const onClickHook = (bool) => {
        console.log(bool)
        setFeature(bool)
        axios.patch(`http://localhost:8000/api/pirate/${props._id}/edit`, {hookHand: bool})
            .then(res => {
                console.log(res);
                setLoaded(false);
            })
            .catch(err => console.log(err))
    }

    return(
        <div className="align-center">
            <div className="d-flex justify-content-center" id="header">
            <h1 className="display-1">{pirate.pirateName}</h1>
            <Link to="/" className="btn btn-info btn-lg m-4">Home Page</Link>
            <Link to={`/pirate/${props._id}/edit`} className="btn btn-primary btn-lg m-4">Edit Pirate</Link><br/>
            </div>
            {/* <PirateBox item={pirate} className="d-inline-flex"/> */}
            <img src={pirate.imageUrl} alt= {pirate.pirateName} className="pic"/>
            <h1>{pirate.catchPhrase}</h1>
            <div>
                <h3 className="display-2 text-align-center">About</h3>
                <h5>Position: {pirate.position}</h5>
                <h5>Treasures: {pirate.treasureChests} </h5>
                <h5>Peg Leg: {pirate.pegLeg + ''} &nbsp; {pirate.pegLeg ? <button className="btn btn-danger" onClick={ () => onClickPeg(!pirate.pegLeg)}>NO</button> : <button className="btn btn-success" onClick={ () => onClickPeg(!pirate.pegLeg)}>YES</button>}</h5>
                
                <h5>Eye Patch: {pirate.eyePatch + ''} &nbsp; {pirate.eyePatch ? <button className="btn btn-danger" onClick={ () => onClickEye(!pirate.eyePatch)} >NO</button> : <button className="btn btn-success" onClick={() => onClickEye(!pirate.eyePatch)} >YES</button>}</h5>
                
                <h5>Hook Hand: {pirate.hookHand + ''} &nbsp; {pirate.hookHand ? <button className="btn btn-danger" onClick={ () => onClickHook(!pirate.hookHand)} >NO</button> : <button className="btn btn-success" onClick={ () => onClickHook(!pirate.hookHand)} >YES</button>}</h5>
            </div>
            
        </div>
    )
}
export default SinglePirate;