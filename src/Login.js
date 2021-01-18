import React, {useState} from "react";

import Form         from 'react-bootstrap/Form';
import FormControl  from 'react-bootstrap/FormControl';
import FormLabel    from 'react-bootstrap/FormLabel';
import FormGroup    from 'react-bootstrap/FormGroup';
import Container    from 'react-bootstrap/Container';
import Row          from 'react-bootstrap/Row';
import Col          from 'react-bootstrap/Col';
import {Button} from "react-bootstrap";
import netAPI from "./NetAPI";
import {Link} from "react-router-dom";

const Login = ({doLogin}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const [msg, setMsg]          = useState('');

    const login = (event) => {

        const form = event.currentTarget;

            event.preventDefault();
            event.stopPropagation();

        const response = netAPI({system: 'login', username: username, password: password},(response) => {

             console.log('login', response.status);

             if( response.status ){
                 doLogin(username);
             }else{
                setMsg('Wrong username or password');
             }

            }
        )
    }

    return (
        <div className="App">
            <header>
                <h1 className='' >Dev Challenge</h1>
            </header>
            <Container>
                <Form onSubmit={login} >
                    <FormGroup controlId='loginUsername' value={username} onChange={e => {setUsername(e.target.value)}}>
                        <FormControl type='text'     placeholder='User Name' />
                    </FormGroup>
                    <FormGroup controlId='loginPassword' value={password} onChange={e => {setPassword(e.target.value)}} >
                        <FormControl type='password' placeholder='Password' />
                    </FormGroup>
                    <Button variant='primary' type='submit' onClick={login} >
                        Login
                    </Button>
                    <div>New user: <Link to='/register' >Signup</Link></div>
                </Form>
                <div>{msg}</div>
            </Container>
        </div>
    )
}

export default Login;