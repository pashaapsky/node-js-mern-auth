import React, {useEffect, useState, Fragment, useCallback} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from 'axios'

function App() {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('/api/auth/register', {email, password})
                .then(res => res.data)
                .catch(error => {
                    // обработка ошибок
                    throw new Error(error.response.data.message);
                })
            ;

            setUser(email);
        }
        catch (e) {
            alert(e.message)
        }
    };

    const login = async () => {
        try {
            const response = await axios.post('/api/auth/login', {email, password})
                .then(res => res.data)
                .catch(error => {
                    // обработка ошибок
                    throw new Error(error.response.data.message);
                })
            ;

            setUser(email);
        }
        catch (e) {
            alert(e.message)
        }
    };

    return (
        <div className="App">
            <Router>
                {user ? (
                    <Fragment>
                        <h1>Привет {user}</h1>

                        <button>Log Out</button>
                    </Fragment>
                ) : (
                    <Fragment>
                        <h1>Привет гость</h1>

                        <div className="">
                            <h2>Войти</h2>

                            <form action="" onSubmit={login}>
                                <label htmlFor="login-email">Введите email</label>
                                <input id="login-email" type="email" name="email" value={email}
                                       onChange={event => setEmail(event.target.value)}/>

                                <label htmlFor="login-password">Введите пароль</label>
                                <input id="login-password" type="password" name="password" value={password}
                                       onChange={event => setPassword(event.target.value)}/>

                                <button type="submit">Log In</button>
                            </form>
                        </div>

                        <div className="div">
                            <h2>Зарегистрироваться</h2>

                            <form action="" onSubmit={register}>
                                <label htmlFor="reg-email">Введите email</label>
                                <input id="reg-email" type="email" name="email" value={email}
                                       onChange={event => setEmail(event.target.value)}/>

                                <label htmlFor="reg-password">Введите пароль</label>
                                <input id="reg-password" type="password" name="password" value={password}
                                       onChange={event => setPassword(event.target.value)}/>

                                <button type="submit">Register</button>
                            </form>
                        </div>
                    </Fragment>
                )}
            </Router>

        </div>
    );
}

export default App;
