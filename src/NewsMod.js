import React, {useState} from 'react';
import netAPI from "./NetAPI";

const NewsMod = () => {

    const [newsHead, setNewsHead]   = useState('');
    const [newsDesc, setNewsDesc]   = useState('');

    const retrieveNews = () => {

        const response = netAPI({system: 'news'}, (response) => {
            setNewsDesc(response.newShort);
            setNewsHead(response.newsheadline);
        });
    }

    React.useEffect( retrieveNews, [] );

    return (

       <>

            <div style={{fontWeight: 'bold', marginBottom: '1rem', textDecoration: 'none'}}>{newsHead}</div>
            <div style={{textDecoration: 'none'}}>{newsDesc}</div>
</>
    );
}

export default NewsMod;