import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>Demeulenaere
                        <br /> Jérémy</h1>
                    <h2>Développeur Full-stack</h2>
                    <div className="pdf">
                        <a href="./media/cv.pdf" target="_blank">Télécharger mon cv</a>
                    </div>
                    <div className="profil-pic">
                        <img src="./media/jdcrea.png" alt="profil-pic"></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;