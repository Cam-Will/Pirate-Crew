import React from "react";

const Form = (props) => {
    return(
        <div>
            <form onSubmit={props.onSubmitHandler}>
                <div className="form-group m-3 col-5 mx-auto center">
                    <input type="text" name="pirateName" className="form-control" placeholder="Pirate Name" onChange={props.onChangeHandler} value={props.form.pirateName} />
                    <span className="alert-danger">{props.errors.pirateName && props.errors.pirateName.message}</span>
                </div>
                <div className="form-group m-3 col-5 mx-auto center">
                    <input type="number" name="treasureChests" className="form-control" placeholder="Treasure Chests" onChange={props.onChangeHandler} value={props.form.treasureChests} />
                    <span className="alert-danger">{props.errors.treasureChests && props.errors.treasureChests.message}</span>
                </div>
                <div className="form-group m-3 col-5 mx-auto center">
                    <label htmlFor="pegLeg">Do they have a Peg Leg?</label>
                    <input type="checkbox" name="pegLeg" className="form-check-input" onChange={props.onChangeHandler} checked={props.form.pegLeg} />
                    <span className="alert-danger">{props.errors.pegLeg&& props.errors.pegLeg.message}</span>
                </div>
                <div className="form-group m-3 col-5 mx-auto center">
                    <label htmlFor="eyePatch">Do they have a Eye Patch?</label>
                    <input type="checkbox" name="eyePatch" className="form-check-input" onChange={props.onChangeHandler} checked={props.form.eyePatch}/>
                    <span className="alert-danger">{props.errors.eyePatch&& props.errors.eyePatch.message}</span>
                </div>
                <div className="form-group m-3 col-5 mx-auto center">
                    <label htmlFor="hookHand">Do they have a Hook Hand?</label>
                    <input type="checkbox" name="hookHand" className="form-check-input" onChange={props.onChangeHandler} checked={props.form.hookHand}/>
                    <span className="alert-danger">{props.errors.hookHand&& props.errors.hookHand.message}</span>
                </div>
                <div className="form-group m-3 col-5 mx-auto center">
                    <input type="text" name="imageUrl" className="form-control" placeholder="Pirate Image Url" onChange={props.onChangeHandler} value={props.form.imageUrl} />
                    <span className="alert-danger">{props.errors.imageUrl && props.errors.imageUrl.message}</span>
                </div>
                <div className="form-group m-3 col-5 mx-auto center">
                    <input type="text" name="catchPhrase" className="form-control" placeholder="Catch Phrase" onChange={props.onChangeHandler} value={props.form.catchPhrase} />
                    <span className="alert-danger">{props.errors.catchPhrase && props.errors.catchPhrase.message}</span>
                </div>
                <div className="form-group m-3 col-5 mx-auto center">
                    <label htmlFor="position">
                        Crew Position?
                        <select name="position" value={props.form.position} onChange={props.onChangeHandler}>
                            <option value=""></option>
                            <option value="Captain">Captain</option>
                            <option value="Quarter Master">Quarter Master</option>
                            <option value="First Mate">First Mate</option>
                            <option value="Second Mate">Second Mate</option>
                            <option value="Third Mate">Third Mate</option>
                            <option value="Boatswain">Boatswain</option>
                            <option value="Cabin boy">Cabin Boy</option>
                            <option value="Navigator">Navigator</option>
                            <option value="Powder Monkey">Powder Monkey</option>
                            <option value="Cook">Cook</option>
                        </select>
                        <span className="alert-danger">{props.errors.position && props.errors.position.message}</span>
                    </label>
                </div>
                <input type="submit" className="btn btn-success btn-lg m-5" value="Submit"/>
            </form>
        </div>
    )
}
export default Form;