import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'

function App() {
    const routes = useRoutes(false);

    return (
        <div className="App">
            <div className="container">
                <Router>
                    {routes}
                </Router>
            </div>
        </div>
    );
}

export default App;
