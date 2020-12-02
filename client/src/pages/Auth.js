import React, {Fragment, useState, useEffect} from 'react';
import axios from "axios";
import {useAxios} from "../hooks/axios.hook";

function Auth(props) {
    const {request, error, setError} = useAxios();
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = async (event) => {
        event.preventDefault();

        try {
            const response = await request('/api/auth/register', password, email);

            console.log(response);
        } catch (e) {
            alert(e.message)
        }
    };

    const test = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/auth/test', {email, password})
                .then(res => res.data)
                .catch(error => {
                    // обработка ошибок
                    throw new Error(error.response.data.message);
                })
            ;

            console.log(response);
        } catch (e) {
            alert(e.message)
        }
    };

    const login = async (event) => {
        event.preventDefault();

        try {
            const response = await request('/api/auth/login', password, email);

            console.log(response);
        } catch (e) {
            alert(e.message)
        }
    };

    return (
        <div className="card grey">
            <div className="card-content white-text">
                <span className="card-title">Welcome</span>

                <form className="white" action="">
                    <label htmlFor="login-email">Введите email</label>
                    <input className="input-field" id="login-email" type="email" name="email" value={email}
                           onChange={event => setEmail(event.target.value)}/>

                    <label htmlFor="login-password">Введите пароль</label>
                    <input className="input-field" id="login-password" type="password" name="password" value={password}
                           onChange={event => setPassword(event.target.value)}/>

                    <div className="card-action" style={{borderTop: "none"}}>
                        <button className="btn yellow darken-4" onClick={register}>Зарегистрироваться</button>

                        <button className="btn grey lighten-1 black-text" onClick={login}>Войти</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Auth;