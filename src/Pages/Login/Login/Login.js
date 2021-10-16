import React from 'react';
import useAuth from '../../../Hooks/UseAuth';

const Login = () => {
    const {singInUsingGoogle} = useAuth()
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={singInUsingGoogle} className="btn-warning">Google Singin</button>
        </div>
    );
};

export default Login;