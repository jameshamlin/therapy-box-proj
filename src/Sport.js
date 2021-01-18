import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import sportData from "./SportData";


/* extracted from results csv taking only home and away wins and appending home and away were result is H, A
respectively */


const Sport = ({team, setTeam}) => {

    const findWins = () => {

        let result = sportData.filter( d => d[0] === team ).map( t => t[1] );

        return result;
    }

    const teamList = [
        'Atalanta',
        'Benevento',
        'Bologna',
        'Cagliari',
        'Chievo',
        'Crotone',
        'Fiorentina',
        'Genoa',
        'Inter',
        'Juventus',
        'Lazio',
        'Milan',
        'Napoli',
        'Roma',
        'Sampdoria',
        'Sassuolo',
        'Spal',
        'Torino',
        'Udinese',
        'Verona',
    ]

    return (

        <div className="App">
            <header>
                <h1 className='' >Sport</h1>
            </header>
            <Container>
                <div style={{color: 'white'}}>Select your team:-</div>
                <select
                    style={{marginBottom: '1rem', backgroundColor: 'yellow',border: '0', padding: '5px 20px'}}
                    value={team} onChange={e => setTeam( e.target.value)} >

                    {teamList.map( t => <option value={t} >{t}</option> )}
                </select>
                <div style={{color: 'white', fontWeight: 'bold', marginBottom: '1rem'}}>Your team beat:-</div>
        <ul>
            {findWins().map(w =>
                <li style={{ listStyle: 'none', color: 'white' }} >{w}</li>
            )}
        </ul>
            </Container>
        </div>
    )

}

export default Sport;

