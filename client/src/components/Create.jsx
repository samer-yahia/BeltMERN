import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

const Create = (props) => {

    let history = useHistory();

    const [name, setName] = useState("")
    const [picture, setPicture] = useState("")
    const [chests, setChests] = useState("")
    const [piratePhrase, setPiratePhrase] = useState("")
    const [crewRole, setCrewRole] = useState("")
    const [pegLeg, setPegLeg] = useState(true)
    const [eyePatch, setEyePatch] = useState(true)
    const [hookHand, setHookHand] = useState(true)
    const [errDB, setErrDB] = useState([]);



    const submitPirate = (e) => {
        e.preventDefault();
        const newPirate = {name, picture, chests, piratePhrase, crewRole, pegLeg, eyePatch, hookHand}

        axios.post("http://localhost:8000/api/pirates/create", newPirate)
            .then(res => {
                setName("");
                setPicture("");
                setChests("");
                setPiratePhrase("");
                setCrewRole("");
                setPegLeg(true);
                setEyePatch(true);
                setHookHand(true);
                history.push("/pirates");
            })
            .catch(err => {
                const {errors} = err.response.data.error;
                const messages = Object.keys(errors).map(err => errors[err].message);
                setErrDB(messages);
            });
    }

    return (
        <fieldset>
            <fieldset style={{ display: "flex", justifyContent: 'center' }}>
                <h2>Add Pirate</h2>
                <Link to={"/pirates"}><button style={{ marginLeft: "50px", marginTop: "27px" }}>Crew Board</button></Link>
            </fieldset>

            {errDB.map((err, idx) => <p key={idx} style={{color: "red"}}>{err}</p>)}


            <form onSubmit={submitPirate}>
                <label> Pirate Name: </label>
                <input type="text" onChange={e => setName(e.target.value)} value={name} /><br></br>

                <label> Image URL: </label>
                <input type="text" onChange={e => setPicture(e.target.value)} value={picture} /><br></br>

                <label> Number of Treasure Chests: </label>
                <input type="number" onChange={e => setChests(e.target.value)} value={chests} /><br></br>

                <label> Pirate Catch Phrase: </label>
                <textarea name="Catch Phrase" rows="2" cols="25" onChange={e => setPiratePhrase(e.target.value)} value={piratePhrase}></textarea><br></br>

                <label> Crew Position: </label>
                <select name="crewRole" onChange={(e) => setCrewRole(e.target.value)} value={crewRole}>
                    <option value=""></option>
                    <option value="Captain">Captain</option>
                    <option value="First Mate">First Mate</option>
                    <option value="Quarter Master">Quarter Master</option>
                    <option value="Boatswain">Boatswain</option>
                    <option value="Powder Monkey">Powder Monkey</option>
                    <option value="Lackey">Lackey</option>
                </select><br></br>

                <label> Peg Leg: </label>
                <input type="checkbox" onChange={(e) => setPegLeg(e.target.checked)} defaultChecked={pegLeg}/><br></br>

                <label> Eye Patch: </label>
                <input type="checkbox" onChange={(e) => setEyePatch(e.target.checked)} defaultChecked={eyePatch}/><br></br>

                <label> Hook Hand: </label>
                <input type="checkbox" onChange={(e) => setHookHand(e.target.checked)} defaultChecked={hookHand}/><br></br>

                <button>Add Pirate</button>
            </form>
        </fieldset>
    )
}

export default Create