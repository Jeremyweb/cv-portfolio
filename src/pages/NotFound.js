import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="notFoundContent">
                <h3>Désolé cette page n'éxiste pas !</h3>
                <Link exact to ="/">
                    <i className="fas fa-home"></i>
                    <span> Accueil</span>
                </Link>
            </div>
            
        </div>
    );
};

export default NotFound;