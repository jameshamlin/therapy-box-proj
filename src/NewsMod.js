import React, {useState} from 'react';
import netAPI from "./NetAPI";

const NewsMod = () => {

    const [newsHead, setNewsHead]   = useState('');
    const [newsDesc, setNewsDesc]   = useState('');

    const retrieveNews = () => {

        const response = netAPI({system: 'news'}, (response) => {
            setNewsDesc(response.newstext);
            setNewsHead(response.newsheadline);
        });



    }

    React.useEffect( retrieveNews, [] );

    return (

       <>
            <div>News</div>
            <div>{newsHead}</div>
            <div>{newsDesc}</div>
</>
    );
}

export default NewsMod;