import React, { useEffect } from 'react';
import { useState } from 'react'

function WizardForm(props) {
    //console.log(props.wizard)
    const [name, setName] = useState('');
    const [occupation, setOccupation] = useState('');
    const [house, setHouse] = useState('');

    useEffect(() =>{
        console.log('the props have changed!!!!!!!!!');
        if (props.wizard.name) {
            setName(props.wizard.name);
            setOccupation(props.wizard.occupation);
            setHouse(props.wizard.house)
        }
    }, [props.wizard]);

    // useEffect(() => {
    //     console.log('you just changed the name')
    // }, [name]);

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
                //have to include id
                if (props.wizard.id) {
                    wizardObject.id = props.wizard.id;
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