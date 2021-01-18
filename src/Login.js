import React, {useState} from "react";

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
                <form onSubmit={login} >
                    <input style={{...inputStyle, marginRight}} type='text'     value={username} onChange={e => {setUsername(e.target.value)}} placeholder='User Name'/>
                    <input style={inputStyle} type='password' value={password} onChange={e => {setPassword(e.target.value)}}  placeholder='Password'/>
                    <br/>
                    <button className='btn btn-primary' type='submit'  style={{marginTop: '10rem'}} >
                        Login
                    </button>
                    <div style={{marginTop: '1rem', color: 'white'}}>New user:
                        <Link style={{color: 'yellow', fontWeight: 'bold'}} to='/register' > Signup</Link></div>
                </form>
                <div style={{marginTop: '1rem', color: 'yellow'}}>{msg}</div>

            </Container>
        </div>
    )
}

export default Login;