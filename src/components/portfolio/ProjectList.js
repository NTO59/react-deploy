import React, { Component } from 'react';
import { portfolioData } from '../../data/portfolioData';
import Project from './Project';


class ProjectList extends Component {

    state = {
        projects: portfolioData,
        radios: [
            { id: 1, value: "javascript" },
            { id: 3, value: "react" },
            { id: 4, value: "php" },
            { id: 5, value: "wordpress" },
            { id: 6, value: "sass" },
            { id: 4, value: "sql" },
        ],
        selectedRadio: 'javascript'
    };

    handleRadio = (e) => {
        //console.log(e.target.value);
        let radio = e.target.value;
        this.setState({ selectedRadio: radio })
    }




    render() {

        let { projects, radios, selectedRadio } = this.state;



        return (
            <div className="portfolioContent">
                <ul className="radioDisplay">
                    {
                        radios.map((radio) => {
                            return (
                                <li key={radio.id}>
                                    <input
                                        type="radio"
                                        name="radio"
                                        checked={radio.value === selectedRadio}
                                        value={radio.value}
                                        id={radio.id}
                                        onChange={this.handleRadio}

                                    />
                                    <label htmlFor={radio.value} > {radio.value} </label>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="projects">
                    {
                        projects
                            .filter(item => item.languages.includes(selectedRadio))
                            .map(item => {

                            return (
                                <Project
                                    key={item.id}
                                    item={item}
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ProjectList;