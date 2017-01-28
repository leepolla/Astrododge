import React, { Component } from 'react';
import allisonImg from "../img/allison.jpg";
import leeImg from "../img/lee.jpg"
import noahImg from "../img/noah.jpg"
import trevorImg from "../img/trevor.jpg"

class Footer extends Component {

    render() {
        var gameInstance = document.querySelector('canvas');
        if (gameInstance) {
            gameInstance.style.display = "none";
        }
        return (
            <section className="team-section">
                <div className="container">
                    <h2>About Us</h2>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="team-member">
                                <h3>Lee</h3>
                                <img src={leeImg} alt="Lee" />
                                <div className="team-member-copy">
                                    <p><a href="http://students.washington.edu/leepolla/cgpp/somethingCool.html">Something Cool</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="team-member">
                                <h3>Noah</h3>
                                <img src={noahImg} alt="Noah" />
                                <div className="team-member-copy">
                                    <p>Hey whats up</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </section>
        )
    }
}

export default Footer;