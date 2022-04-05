import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/jdcrea.png" alt="profil-pic" />
                    <h3>DEMEULENAERE Jérémy</h3>
                </div> 
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" style={({ isActive }) =>
                            isActive? {color: '#928868', fontSize: '1.5rem'} : { color: '#362b07' }}>
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/competences" style={({ isActive }) =>
                            isActive? {color: '#928868', fontSize: '1.5rem'} : { color: '#362b07' }}>
                            <i className="fas fa-mountain"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/portfolio" style={({ isActive }) =>
                            isActive? {color: '#928868', fontSize: '1.5rem'} : { color: '#362b07' }}>
                            <i className="fas fa-images"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" style={({ isActive }) =>
                            isActive? {color: '#928868', fontSize: '1.5rem'} : { color: '#362b07' }}>
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className='socialNetwork'>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-demeulenaere-83555719b/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/Jeremyweb" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i></a>
                    </li>
                    <li>
                        <a href="http://jd-creation.fr" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-globe"></i></a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/JD-Cr%C3%A9ation-106174688499052/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i></a>
                    </li>
                </ul>
                <div className="signature">
                    <a href="http://jd-creation.fr">JD-création - 2022</a>
                </div>
            </div>

        </div>
    );
};

export default Navigation;