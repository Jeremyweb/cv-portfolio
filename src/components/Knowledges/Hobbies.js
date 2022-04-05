import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-running">
                        <span>  Basketball</span>
                    </i>
                </li>
                <li className="hobby">
                    <i className="fas fa-gamepad">
                        <span>Jeux-vidéo</span></i>
                </li>
                <li className="hobby">
                    <i className="fas fa-play">
                        <span>  Youtube</span></i>
                </li>
                <li className="hobby">
                    <i className="fas fa-dumbbell">
                        <span>Musculation</span>
                    </i>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;