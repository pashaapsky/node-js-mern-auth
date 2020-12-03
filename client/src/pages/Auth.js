import React, {Fragment, useState, useContext} from 'react';
import {useAxios} from "../hooks/axios.hook";
import {AuthContext} from "../context/AuthContext";

function Auth(props) {
    const auth = useContext(AuthContext);
    const {request, error, setError} = useAxios();
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = async (event) => {
        event.preventDefault();

        try {
            const response = await request('/api/auth/register', password, email)
                .then(res => alert(res.message))
            ;

        } catch (e) {
            alert(e.message)
        }
    };

    const login = async (event) => {
        event.preventDefault();

        try {
            const response = await request('/api/auth/login', password, email);

            auth.login(response.token, response.userId);
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