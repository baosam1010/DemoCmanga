import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePageNav extends Component {
    render() {
        var isColor = this.props.isColor;
        return (
            <div className="navigation">
                <ul className="navigation-list"
                >
                    <li className="navigation-item">
                        <a 
                            className="navigation-link active-nav" 
                            href="/"
                            style={{
                                color: isColor ? "#98B3B8" : "white"
                            }}
                        >1</a>
                    </li>
                    <li className="navigation-item">
                        <a
                            className="navigation-link"
                            href="/"
                            style={{
                                color: isColor ? "#98B3B8" : "black"
                            }}
                        >2</a>
                    </li>
                    <li className="navigation-item">
                        <a 
                            className="navigation-link" 
                            href="/"
                            style={{
                                color: isColor ? "#98B3B8" : "black"
                            }}                            
                        >3</a>
                    </li>
                    <li className="navigation-item">
                        <a 
                            className="navigation-link" 
                            href="/"
                            style={{
                                color: isColor ? "#98B3B8" : "black"
                            }}                            
                        >4</a>
                    </li>
                    <li className="navigation-item">
                        <a 
                            className="navigation-link" 
                            href="/"
                            style={{
                                color: isColor ? "#98B3B8" : "black"
                            }}                            
                        >5</a>
                    </li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isColor: state.changeColor,// nhận từ reducer
    }
}
export default connect(mapStateToProps)(HomePageNav);