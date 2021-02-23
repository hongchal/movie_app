// import { func } from 'prop-types';
import react from 'react';
import { Link } from 'react-router-dom';
import "../style/css/Navigation.css"

function Navigation(){
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Navigation;