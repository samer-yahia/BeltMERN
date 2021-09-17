import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Disp = (props) => {

    const [pirates, setPirates] = useState([]);

    useEffect(() => { getPirates() }, []);

    const getPirates = () => {
        axios.get("http://localhost:8000/api/pirates/all")
            .then(res => setPirates(res.data.piratesArr))
            .catch(err => console.log(err))
    }

    const deletePirate = (pirateID) => {
        axios.delete("http://localhost:8000/api/pirates/delete/"+pirateID)
            .then(res => setPirates(pirates.filter(pirate => pirate._id !== pirateID)))
            .catch(err => console.log(err))
    }
    return (
        <fieldset>
            <fieldset style={{ display: "flex", justifyContent: 'center' }}>
                <h2>Pirate Crew</h2>
                <Link to={"/pirates/new"}><button style={{ marginLeft: "50px", marginTop: "27px"}}>Add Pirate</button></Link>
            </fieldset>
            <fieldset>
                {
                    pirates.map((pirate, idx) => {
                        return (
                            <fieldset key={pirate._id} style={{ backgroundColor: "lavender", display: "flex", justifyContent: "center", alignItems: "center", gap: 25 }}>
                                <img src={pirate.picture} alt={`${pirate.name}'s picture'`} style={{height:"100px", width:"200px"}}/>
                                <h2>{pirate.name}</h2>
                                <Link to={`/pirates/${pirate._id}`}><button style={{backgroundColor: "dodgerblue", color: "white", height: "30px", width: "100px"}}>View Pirate</button></Link>
                                <button onClick={() => (deletePirate(pirate._id))} style={{backgroundColor: "red", color: "white", height: "30px", width: "125px"}}>Walk the Plank!</button>

                            </fieldset>
                        )
                    })
                }

            </fieldset>
        </fieldset>
    )
}

export default Disp
