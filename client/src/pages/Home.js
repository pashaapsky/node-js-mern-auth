import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import {useAuth} from "../hooks/auth.hook";

function Home(props) {
    const auth = useContext(AuthContext);

    const logoutHandler = (event) => {
        event.preventDefault();
        auth.logout();
    };

    return (
        <div className="home">
            <h1>Home page</h1>

            <h2>Welcome {auth.userId}</h2>

            <button onClick={logoutHandler}>Выйти</button>
        </div>
    );
}

export default Home;