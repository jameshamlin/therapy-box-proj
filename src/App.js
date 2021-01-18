import logo from         './logo.svg';
import                   './App.css';
import {
    BrowserRouter as Router,
    Switch,
    /*Route,
    Link*/
} from "react-router-dom";
/**/import Weather      from './Weather';
import News         from './News';
import TasksMod     from './TasksMod';
import Dash         from './Dash';
import Login        from './Login';
import Register     from './Register';

import PrivRoute    from "./PrivRoute";
import PubRoute     from './PubRoute';

/*import Card         from 'react-bootstrap/Card';
import Container    from 'react-bootstrap/Container';
import Row          from 'react-bootstrap/Row';
import Col          from 'react-bootstrap/Col';*/
import {useState} from "react";

function App() {

    const cardStyle = {
        width: '20rem',
    };
    const cardHeaderStyle = {
        backgroundColor: 'yellow',
        fontWeight: 'bold',
    };

    const [username, doLogin] = useState( '' );

    const isLoggedIn = () => {

        const result = '' != username;
        console.log('isloggedin', result);
        return result;
    }

    const tasksList = [
        {
            id: 1,
            text: 'My Task 1',
            done: false
        },
        {
            id: 2,
            text: 'My Task 2',
            done: true
        },
        {
            id: 3,
            text: 'My Task 3',
            done: true
        }
    ];
    const [tasks, setTask] = useState( tasksList );

    console.log('app_tasks', tasks);
    return (

        <Router>
            <div>

                <Switch>

                    <PubRoute path="/login" isLoggedIn={isLoggedIn} restricted={true} >
                        <Login  doLogin={doLogin}/>
                    </PubRoute>
                    <PubRoute path="/register" isLoggedIn={isLoggedIn} restricted={true} >
                        <Register doLogin={doLogin} />
                    </PubRoute>
                    <PrivRoute path="/news" isLoggedIn={isLoggedIn} >
                        <News />
                    </PrivRoute>
                    <PrivRoute path="/tasks" isLoggedIn={isLoggedIn} >
                        <TasksMod tasks={tasks}/>
                    </PrivRoute>
                    <PrivRoute path="/" isLoggedIn={isLoggedIn} >
                        <Dash tasks={tasks}/>
                    </PrivRoute>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
