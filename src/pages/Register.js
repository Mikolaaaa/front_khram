import React, { useState } from 'react';
import axios from 'axios';
import {Form, Button} from "react-bootstrap";

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            alert('Passwords do not match');
            return;
        }
        try {
            await axios.post('http://localhost:8000/api/register/', { username, password, password2 });
        } catch (error) {
            console.error('There was an error registering!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Регистрация</h2>
            <div>
                <label>Имя пользователя</label>
                <Form.Control style={{width: '60%', marginLeft: '20%'}} type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div>
                <label>Пароль</label>
                <Form.Control style={{width: '60%', marginLeft: '20%'}} type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div>
                <label>Подтверждение пароля</label>
                <Form.Control style={{width: '60%', marginLeft: '20%'}} type="password" value={password2} onChange={(e) => setPassword2(e.target.value)} required />
            </div>
            <br></br>
            <Button type="submit">Зарегистрироваться</Button>
        </form>
    );
}

export default Register;
