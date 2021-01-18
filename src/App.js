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
import Tasks        from './Tasks';
import Dash         from './Dash';
import Photos       from './Photos';
import Sport        from './Sport';
import Login        from './Login';
import Register     from './Register';

import PrivRoute    from "./PrivRoute";
import PubRoute     from './PubRoute';

import update from 'immutability-helper';

/*import Card         from 'react-bootstrap/Card';
import Container    from 'react-bootstrap/Container';
import Row          from 'react-bootstrap/Row';
import Col          from 'react-bootstrap/Col';*/
import {useCallback, useState} from "react";
import SportMod from "./SportMod";

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
    const [tasks, setTask] = useState( [
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
    ] );
    const addTask = useCallback( () => {

        let newTask = {id: tasks.length + 1, text: 'New task', done: false};
        setTask( update( tasks, {
            $push: [ newTask ],
        } ) );
    }, [tasks] );
    const setTaskDone = useCallback((taskID, done) => {
        const foundTask = tasks.filter( t => t.id === taskID )[0];
        const taskIndex = tasks.indexOf( foundTask );


        console.log('Tasks',tasks);
        console.log('TaskID',taskID);
        console.log('Task',taskIndex);
        console.log('Taskdone',done);

        foundTask.done = done;

        setTask(update(tasks, {
            $splice: [
                [taskIndex, 1],
                [taskIndex, 0, foundTask],
            ],
        }));
    }, [tasks] )
    const setTaskText = useCallback( (taskID, newText) => {
        const foundTask = tasks.filter( t => t.id === taskID )[0];
        const taskIndex = tasks.indexOf( foundTask );

        console.log('Tasks',tasks);
        console.log('TaskID',taskID);

        foundTask.text = newText;

        setTask(update(tasks, {
            $splice: [
                [taskIndex, 1],
                [taskIndex, 0, foundTask],
            ],
        }));
    }, [tasks] );

    const [team, setTeam] = useState( 'Atalanta' );


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
                        <Tasks tasks={tasks} addTask={addTask} setTaskDone={setTaskDone} updateTaskText={setTaskText}/>
                    </PrivRoute>
                    <PrivRoute path="/photos" isLoggedIn={isLoggedIn} >
                        <Photos />
                    </PrivRoute>
                    <PrivRoute path="/sport" isLoggedIn={isLoggedIn} >
                        <Sport setTeam={setTeam}  team={team} />
                    </PrivRoute>
                    <PrivRoute path="/" isLoggedIn={isLoggedIn} >
                        <Dash tasks={tasks} username={username} setTaskDone={setTaskDone} updateTaskText={setTaskText} team={team}/>
                    </PrivRoute>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
