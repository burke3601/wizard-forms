import React from 'react';
import { useState } from 'react'

function WizardForm(props) {
    const [name, setName] = useState('');
    const [occupation, setOccupation] = useState('');
    const [house, setHouse] = useState('');


    return(
        <section >
            <h1>{props.title}</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                const wizardObject ={
                    name: name,
                    occupation: occupation,
                    house: house
                }
                props.onSubmit(wizardObject);
                setName('');
                setOccupation('');
                setHouse('');

            }}> 
                <label>Name:
                    <input 
                        placeholder="enter name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    </label>
                <br></br>
                <label>Occupation:
                        <input
                            placeholder="enter occupation"
                            value={occupation}
                            onChange={(e) => {
                                setOccupation(e.target.value);
                            }}
                        />
                </label>
                <br/>
                <label>House:
                        <input
                            placeholder="enter house"
                            value={house}
                            onChange={(e) => {
                                setHouse(e.target.value);
                            }}
                        />
                </label>
                <br/>
                <input type="submit"/>
            </form>
        </section>
    )
}


export default WizardForm;