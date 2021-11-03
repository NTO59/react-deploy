import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {

    state = {
        languages: [
            { id: 1, value: "Javascript", xp: 1.3 },
            { id: 2, value: "Css", xp: 1.9 },
            { id: 3, value: "Php", xp: 1.4 },
            { id: 4, value: "Sql", xp: 1.5},
            
        ],
        frameworks: [
            { id: 1, value: "React", xp: 1.2 },
            { id: 2, value: "Bootstrap", xp: 1.7 },
            { id: 3, value: "Sass", xp: 1.8 },
            { id: 3, value: "Laravel", xp: .8},


        ]
    }

    render() {
        let { languages, frameworks } = this.state;

        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"


                />
                <ProgressBar  
                    languages= {frameworks}
                    title="Frameworks & bibliothèques"
                    className="frameworksDisplay"
                
                />
            </div>
        );
    }
}

export default Languages;