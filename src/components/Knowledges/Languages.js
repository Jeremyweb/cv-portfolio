import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

export default class Languages extends Component {
    state = {
        languages:[
            {id: 1, value: "Javascript", xp: 1},
            {id: 2, value: "Css", xp: 1.5},
            {id: 3, value: "Php", xp: 0.7},
            {id: 4, value: "Html", xp: 1.6}
        ],

        frameworks: [
            {id: 1, value: "React", xp: 0.6},
            {id: 2, value: "Bootstrap", xp: 1.6},
            {id: 3, value: "Symfony", xp: 1},
            {id: 4, value: "jquery", xp: 0.8}
        ]
    }

    render() {
        let {languages, frameworks} = this.state;
        return (

            <div className=" languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    className="languagesDisplay"
                    title="langages"
                />
                
                <ProgressBar 
                    languages={frameworks}
                    title="frameworks & bibliothèques"
                    className="frameworksDisplay"
                />
            </div>
        );
    }
}

