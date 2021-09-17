import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory, Link } from 'react-router-dom';

const ViewOne = (props) => {

    let history = useHistory();

    const { id } = useParams();
    const [pegLeg, setPegLeg] = useState();
    const [eyePatch, setEyePatch] = useState();
    const [hookHand, setHookHand] = useState();
    const [pirate, setPirate] = useState({});

    useEffect(() => { axioPirate() }, [id])

    const axioPirate = () => {
        axios.get("http://localhost:8000/api/pirates/" + id)
            .then(res => {
                setPirate(res.data)
                setPegLeg(res.data.pegLeg);
                setEyePatch(res.data.eyePatch);
                setHookHand(res.data.hookHand);
            })
            .catch(err => console.log(err));
    };



    // const editPirate = (e) =>
    //     e.preventDefault();
    //     console.log({pirate, pegLeg, eyePatch, hookHand});
    //     axios.put("http://localhost:8000/api/pirates/update/"+id, {pirate, pegLeg, eyePatch, hookHand})
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))

    return (
        <fieldset>
            <fieldset style={{ display: "flex", justifyContent: 'center' }}>
                <h2>{pirate.name}</h2>
                <Link to={"/pirates"}><button style={{ marginLeft: "50px", marginTop: "27px" }}>Crew Board</button></Link>
            </fieldset>

            <fieldset style={{ backgroundColor: "lavender", display: "flex", justifyContent: "center", alignItems: "center", gap: 25 }}>
                <div>
                    <img src={pirate.picture} alt={`${pirate.name}'s picture'`} style={{ height: "100px", width: "200px" }} />
                    <h3>{pirate.piratePhrase}</h3>
                </div>
                <div>
                    <h2>About</h2>
                    <p>Position: {pirate.crewRole}</p>
                    <p>Treasure Chests: {pirate.chests}</p>
                    <div style={{display: "flex"}}>
                        <p>Peg Leg: {pegLeg ? "Yes" : "No"}</p>
                        <label style={{backgroundColor: "blue", color: "white", padding: "10px", border: '2px solid black', marginLeft: "30px"}} for="pegLegBool"> {pegLeg ? "No" : "Yes"} </label>
                        <input type="checkbox" id="pegLegBool" style={{ visibility: "hidden" }} onChange={e => setPegLeg(e.target.checked)} defaultChecked={pegLeg} />
                    </div>
                    <div style={{display: "flex"}}>
                        <p>Eye Patch: {eyePatch ? "Yes" : "No"}</p>
                        <label style={{backgroundColor: "blue", color: "white", padding: "10px", border: '2px solid black', marginLeft: "30px"}} for="eyePatchBool"> {eyePatch ? "No" : "Yes"} </label>
                        <input type="checkbox" id="eyePatchBool" onChange={e => setEyePatch(e.target.checked)} defaultChecked={eyePatch} />
                    </div>
                    <div style={{display: "flex"}}>
                        <p>Hook Hand: {hookHand ? "Yes" : "No"}</p>
                        <label style={{backgroundColor: "blue", color: "white", padding: "10px", border: '2px solid black', marginLeft: "30px"}} for="hookHandBool"> {hookHand ? "No" : "Yes"} </label>
                        <input type="checkbox" id="hookHandBool" style={{ visibility: "hidden" }} onChange={e => setHookHand(e.target.checked)} defaultChecked={hookHand} />
                    </div>
                </div>
            </fieldset>
        </fieldset>
    )
}

export default ViewOne
