import './App.css';
import TextInput from '../../commponents/textInput/textInput.jsx';
import { useState } from 'react';
import React from 'react';

export default function App() {
    const [pgn, setPgn] = useState('');
    const [praority, setPraority] = useState('');
    const [sender, setSender] = useState('');
    const cabusParameters = {
        PGN: { title: 'PGN', propertySetFunc: setPgn },
        praority: { title: 'עדיפות', propertySetFunc: setPraority },
        sender: { title: 'שולח', propertySetFunc: setSender },
    };

    const calculateId = (pgn, praority) => {
        const isSpecial = pgn.length === 5;
        const binarParaority = Number(praority).toString(2);
        const baseBinar = `${binarParaority}${isSpecial ? 1 : ''}`;
        const numberOffLeading0 = Array(4 - (baseBinar.length % 4))
            .fill(0)
            .reduce((compined) => (compined = `${compined}0`));
        const startNumber = parseInt(`${numberOffLeading0}${baseBinar}`, 2);

        return startNumber + pgn.substr(isSpecial ? 1 : 0);
    };

    return (
        <div className="App">
            <div className="app-background">
                <div className='background-dumbener'></div>
                <h1 className="title">Canbus Id Convertor</h1>
                <div className="inputs">
                    {' '}
                    {Object.keys(cabusParameters).map((parameter) => (
                        <TextInput
                            key={parameter}
                            propertySetFunc={cabusParameters[parameter].propertySetFunc}
                            title={cabusParameters[parameter].title}
                        />
                    ))} 
                </div>

                <h1 className="title" style={{fontSize: 50}}>calculateed canbus id:</h1>
                <h1 className="title" style={{fontSize: 50}}>{`0x${calculateId(pgn, praority)}${sender}`}</h1>
            </div>
        </div>
    );
}
