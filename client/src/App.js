import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from './context/AuthContext'

function App() {
    const {token, login, logout, userId} = useAuth();
    let isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);

    return (
        <div className="App">
            <AuthContext.Provider value={{
                token, login, logout, isAuthenticated
            }}>
                <div className="container">
                    <Router>
                        {routes}
                    </Router>
                </div>
            </AuthContext.Provider>
        </div>
    );
}

export default App;
