import React, {useState, useCallback} from 'react';
import axios from "axios";

export const useAxios = () => {
    const [error, setError] = useState(null);

    const request = useCallback(async (url, password, email) => {
        try {
            const response = await axios.post(url, {email, password})
                // .then(res => res.data)
                .catch(error => {
                    // обработка ошибок
                    throw new Error(error.response.data.message || "Что то пошло не так");
                })
            ;

            return response;
        } catch (e) {
            setError(e.message);
            throw e;
        }
    }, []);

    const clearError = () => setError(null);

    return {request, error, setError}
};