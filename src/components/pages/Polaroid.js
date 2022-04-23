import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Polaroid from "react-polaroid";
import men from './menjpg.jpg';
import women from './women.jpg';
import kids from './kids.jpg';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            flip: false
        };
    }
    flip = () => {
        this.setState({
            flip: !this.state.flip
        });
    };

    render() {
        return (
            <div className="catMen">
                <NavLink to="/Men" ><Polaroid
                    imgSrc={men}
                    height='400'
                    width='320'
                    frontText="Men"
                    cardColor=''
                    rotation={0}
                    flip={this.state.flip1}
                    onClick={() => this.flip()}

                />
                </NavLink>


                <div className="catWomen">
                    <NavLink to="/Women" ><Polaroid
                        imgSrc={women}
                        height='400'
                        width='320'
                        frontText="Women"
                        rotation={0}
                        flip={this.state.flip1}
                        onClick={() => this.flip()}

                    />
                    </NavLink>

                    <div className="catKids">
                        <NavLink to="/Kids" ><Polaroid
                            imgSrc={kids}
                            height='400'
                            width='320'
                            frontText="Kids"
                            rotation={0}
                            flip={this.state.flip1}
                            onClick={() => this.flip()}

                        />
                        </NavLink>

                    </div>

                </div>
            </div>
        

        );
    }
}
