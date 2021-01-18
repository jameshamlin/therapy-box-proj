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
        });
    }

    React.useEffect( retrieveNews, [] );

    return (

        <Container>
            <Row>
                <Col md={{span: 2}} >
                    <h1>News</h1>
                </Col>
                <Col md={{span: 4, offset: 2}} >
                   <Image src={newsImg} />
                 </Col>
            </Row>
            <Row>
                <Col md={{span: 4, offset: 4}} >
            <div>{newsHead}</div>
                </Col>
            </Row>
            <Row>
                <Col md={{span: 8, offset: 2}} >
            <div>{newsDesc}</div>
                </Col>
            </Row>
        </Container>
    );
}

export default News;