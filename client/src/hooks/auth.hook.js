import React, {useState} from 'react';

export const useAuth = () => {
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);

    const login = (jwtToken, id) => {
        setToken(jwtToken);
        setUserId(id);
    };

};