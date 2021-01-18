import React, {useState} from 'react';
import netAPI from "./NetAPI";


import Card         from 'react-bootstrap/Card';
import Container    from 'react-bootstrap/Container';
import Row          from 'react-bootstrap/Row';
import Col          from 'react-bootstrap/Col';
import Image        from 'react-bootstrap/Image';

const News = () => {

    const [newsHead, setNewsHead]   = useState('');
    const [newsDesc, setNewsDesc]   = useState('');
    const [newsImg,  setNewsImg]    = useState('');

    const retrieveNews = () => {

        const response = netAPI({system: 'news'}, (response) => {

            setNewsDesc(response.newstext);
            setNewsHead(response.newsheadline);
            setNewsImg(response.img);
        });
    }

    React.useEffect( retrieveNews, [] );

    return (

       <div className="App">

        <Container>
            <Row>
                <Col md={{span: 2}} >
                    <header>
                        <h1 className='' >News</h1>
                    </header>
                </Col>
                <Col md={{span: 4, offset: 1}} >
                   <Image
                        style={{
                            border: '1px solid yellow',
                            maxWidth: '30rem',
                            margin: '4rem 0',
                            borderRadius: '10px'
                        }}
                       src={newsImg} />
                 </Col>
            </Row>
            <Row>
                <Col md={{span: 4, offset: 4}} >
            <div style={{color: 'white', fontWeight: 'bold'}}>{newsHead}</div>
                </Col>
            </Row>
            <Row>
                <Col md={{span: 8, offset: 2}} >
            <div style={{color: 'white'}}>{newsDesc}</div>
                </Col>
            </Row>
        </Container>
       </div>
    );
}

export default News;