import React from 'react';
import { Link } from 'react-router';

const LoginButtons = () => {
    return (
        <Link to='/login' className="
        btn border-green-600 text-green-400
         hover:bg-green-700 hover:text-white
         rounded-xl">Login</Link>
    );
};

export default LoginButtons;