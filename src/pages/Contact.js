import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import swal from 'sweetalert';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
                <div className="header"></div>
                    <div className="contactBox">
                        <h1>Contactez-moi</h1>
                        <ul>
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Annoeullin</span>
                            </li>
                            <li>
                                <i className="fas fa-mobile-alt"></i>
                                <CopyToClipboard text="0642826432">
                                <span 
                                    className="clickInput" 
                                    onClick={() =>{swal("", "Vous avez bien copié le n° de téléphone", "success")}}
                                >
                                    06.42.82.64.32
                                </span>
                                </CopyToClipboard>
                            </li>
                            <li>
                                <i className="fas fa-envelope"></i>
                                <CopyToClipboard text="jeremy.demeulenaere59120@gmail.com">
                                <span 
                                    className="clickInput" 
                                    onClick={() =>{swal("", "Vous avez bien copié l'e-mail", "success")}}
                                >
                                    jeremy.demeulenaere59120@gmail.com
                                </span>
                                </CopyToClipboard>
                            </li>
                        </ul>
                    </div>
                    <div className="socialNetwork">
                        <ul>
                            <a href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-demeulenaere-83555719b/" target="_blank" rel="noopener noreferrer">
                                    <h4>LinkedIn</h4>
                                    <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/Jeremyweb" target="_blank" rel="noopener noreferrer">
                                    <h4>Github</h4>
                                    <i className="fab fa-github"></i>
                            </a>
                            <a href="http://jd-creation.fr" target="_blank" rel="noopener noreferrer">
                                    <h4>JD-création</h4>
                                    <i className="fa fa-globe"></i>
                            </a>
                            <a href="https://www.facebook.com/JD-Cr%C3%A9ation-106174688499052/" target="_blank" rel="noopener noreferrer">
                                    <h4>Facebook</h4>
                                    <i className="fab fa-facebook"></i>
                            </a>
                        </ul>
                    </div>
            </div>
        </div>
    );
};

export default Contact;