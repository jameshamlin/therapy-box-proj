import logo from         './logo.svg';
import                   './App.css';
import Weather      from './Weather';
import NewsMod      from './NewsMod';
import TaskMod      from './TasksMod';
import SportMod     from './SportMod';
import ClothesMod   from './ClothesMod';
import PhotoMod     from './PhotoMod';

import Card         from 'react-bootstrap/Card';
import Container    from 'react-bootstrap/Container';
import Row          from 'react-bootstrap/Row';
import Col          from 'react-bootstrap/Col';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Tasks from "./Tasks";

function Dash({tasks, username, updateTaskText,setTaskDone, team}) {

    console.log('dash_tasks', tasks);
    const cardStyle = {
        width: '20rem',
        height: '100%',
        color: 'black'
    };
    const cardHeaderStyle = {
        backgroundColor: 'yellow',
        fontWeight: 'bold',
    };

    const colStyle = {
        marginBottom: '60px'
    }

    return (
        <div className="App">
            <header>
                <h1 className='' >Good day {username}</h1>
            </header>
            <Container >
                <Row >
                    <Col style={colStyle} >
                        <Card style={cardStyle} className='border-warning' >
                            <Card.Header style={cardHeaderStyle}>Weather</Card.Header>
                            <Card.Body>

                                <Weather></Weather>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={colStyle} >
                        <Link to='/news' >
                        <Card style={cardStyle} >
                            <Card.Header style={cardHeaderStyle}>News</Card.Header>
                            <Card.Body>
                                <NewsMod></NewsMod>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>

                    <Col style={colStyle}>
                        <Link to='/sport' >
                        <Card style={cardStyle} >
                            <Card.Header style={cardHeaderStyle}>Sport</Card.Header>
                            <Card.Body>
                                <SportMod team={team} />
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>

                </Row>
                <Row>
                    <Col style={colStyle}>

                        <Card style={cardStyle} >
                            <Card.Header style={cardHeaderStyle}>Photos</Card.Header>
                            <Card.Body>
                                <PhotoMod />
                            </Card.Body>
                        </Card>

                    </Col>

                    <Col style={colStyle}>
                        <Link to='/tasks' >
                        <Card style={cardStyle} >
                            <Card.Header style={cardHeaderStyle}>Tasks</Card.Header>
                            <Card.Body>
                                <TaskMod tasks={tasks} setTaskDone={setTaskDone} updateTaskText={updateTaskText}/>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>

                    <Col style={colStyle}>
                        <Card style={cardStyle} >
                            <Card.Header style={cardHeaderStyle}>Clothes</Card.Header>
                            <Card.Body>
                                <ClothesMod />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Dash;
