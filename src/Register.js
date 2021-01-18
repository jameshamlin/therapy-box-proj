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

const Register = ({doLogin}) => {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email,    setEmail]    = useState('');
    const [picture,  setPicture]  = useState('');

    const [msg, setMsg]          = useState('');

    const register = (event) => {

        const form = event.currentTarget;

        event.preventDefault();
        event.stopPropagation();

        const response = netAPI({system: 'register', username: username, password: password,
            email: email, picture: picture }, (response) => {

            console.log('login');

            doLogin(username);
        });
    }
    const inputStyle = {
        backgroundColor: 'rgba(0,0,0,0.01)',
        color: 'white',
        border: 0,
        borderBottom: '1px solid white',
    }
    const marginRight = '5rem';

    return (
        <div className="App">
            <header>
                <h1 className='' >Dev Challenge</h1>
            </header>
            <Container>
                <form onSubmit={register} >
                    <input style={{...inputStyle, marginRight}} type='text'     value={username} onChange={e => {setUsername(e.target.value)}} placeholder='User Name'/>
                    <input style={inputStyle}                   type='email'     value={email} onChange={e => {setEmail(e.target.value)}}       placeholder='Email' />
                    <br style={{marginBottom: '2rem'}}/>
                    <input style={{...inputStyle, marginRight}} type='password' value={password} onChange={e => {setPassword(e.target.value)}}  placeholder='Password'/>
                    <input style={inputStyle} type='password' value={password} onChange={e => {setPassword(e.target.value)}}  placeholder='Confirm password'/>
                    <br/>
                    <button className='btn btn-primary' type='submit'  style={{marginTop: '10rem'}} >
                        Register
                    </button>
                </form>
                <div style={{marginTop: '1rem', color: 'yellow'}}>{msg}</div>

            </Container>
            {/*<Container>
                <Row>
                    <Col md={{span: 4, offset: 2}} >
                        <h1>Register</h1>
                    </Col>
                </Row>
                <Form onSubmit={register} >
                    <FormGroup controlId='loginUsername' value={username} onChange={e => {setUsername(e.target.value)}} >
                        <FormControl type='text'     placeholder='User Name' />
                    </FormGroup>
                    <FormGroup controlId='loginEmail'>
                        <FormControl type='text' placeholder='Email'  value={email} onChange={e => {setEmail(e.target.value)}} />
                    </FormGroup>
                    <FormGroup controlId='loginPassword'>
                        <FormControl type='password' placeholder='Password'  value={password} onChange={e => {setPassword(e.target.value)}} />
                    </FormGroup>

                    <Button variant='primary' type='submit' onClick={register} >
                        Register
                    </Button>
                </Form>
            </Container>*/}
        </div>
    )
}

export default Register;