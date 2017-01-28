import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <header>
                <div className="container">
                    <h1>Astro Dodge</h1>
                    <h2 className="sub-heading">Don't get hit by the falling asteroids!</h2>
                </div>
            </header>
        )
    }
}

export default Header;
