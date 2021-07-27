import React, { Component } from 'react';

class HomePageNav extends Component {
    render() {
        return (
            <div className="navigation">
            <ul className="navigation-list">
                <li className="navigation-item"><a className="navigation-link active-nav" href="/">1</a></li>
                <li className="navigation-item"><a className="navigation-link" href="/">2</a></li>
                <li className="navigation-item"><a className="navigation-link" href="/">3</a></li>
                <li className="navigation-item"><a className="navigation-link" href="/">4</a></li>
                <li className="navigation-item"><a className="navigation-link" href="/">5</a></li>
            </ul>
        </div>
        );
    }
}

export default HomePageNav;