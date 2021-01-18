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

const Register = ({doLogin}) => {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email,    setEmail]    = useState('');
    const [picture,  setPicture]  = useState('');

    const login = (event) => {

        const form = event.currentTarget;

        event.preventDefault();
        event.stopPropagation();

        const response = netAPI({system: 'register', username: username, password: password,
            email: email, picture: picture }, (response) => {

            console.log('login');

            doLogin(username);
        });
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col md={{span: 4, offset: 2}} >
                        <h1>Register</h1>
                    </Col>
                </Row>
                <Form onSubmit={login} >
                    <FormGroup controlId='loginUsername' value={username} onChange={e => {setUsername(e.target.value)}} >
                        <FormControl type='text'     placeholder='User Name' />
                    </FormGroup>
                    <FormGroup controlId='loginEmail'>
                        <FormControl type='text' placeholder='Email'  value={email} onChange={e => {setEmail(e.target.value)}} />
                    </FormGroup>
                    <FormGroup controlId='loginPassword'>
                        <FormControl type='password' placeholder='Password'  value={password} onChange={e => {setPassword(e.target.value)}} />
                    </FormGroup>

                    <Button variant='primary' type='submit' onClick={login} >
                        Register
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default Register;