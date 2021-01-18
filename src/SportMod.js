import React    from 'react'
import sportData from "./SportData";

const SportMod = ({team}) => {

    console.log('team',team);

    const findWinCount = () => {

        let count = 0;
        let result = sportData.filter( d => d[0] === team ).map( t => count += 1 );

        console.log(result);
        return count;
    }


    return <div style={{textDecoration: 'none'}}>Your team: '{team}' beat {findWinCount()} other teams.</div>
}

export default SportMod