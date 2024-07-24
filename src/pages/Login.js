import React, { useState } from 'react';
import axios from 'axios';
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import { useHistory } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/token/', { username, password });
            localStorage.setItem('access', response.data.access);
            localStorage.setItem('refresh', response.data.refresh);
            history.push('/photo');
        } catch (error) {
            console.error('There was an error logging in!', error);
        }
    };

    return (
        <div>
            <h1>Вход</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Имя пользователя</label>
                    <Form.Control style={{width: '60%', marginLeft: '20%'}} type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Пароль</label>
                    <Form.Control style={{width: '60%', marginLeft: '20%'}} type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <br></br>
                <Button type="submit">Войти</Button>
            </form>
        </div>
    );
}

export default Login;
