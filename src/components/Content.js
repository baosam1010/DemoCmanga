import React, { Component } from 'react';
import './../assets/css/content.css';
import ChatBox from './mainHomePage/ChatBox';
import MainHomePage from './mainHomePage/MainHomePage'
import RightHomePage from './RightHomePage';
import {connect} from 'react-redux'


class Content extends Component {

    render() {
        var isColor = this.props.isColor;
        // console.log("Content:",this.props.match)

        return (
            <div 
                className=" content"
                style={{backgroundColor: isColor ? "#18191a" :"var(--heading-color)"}}

            >
                <div className="grid wide content-wrapper ">
                    <div className="row margin-row ">
                        <div className="col l-9 row_width">
                            <ChatBox/>
                            <MainHomePage match={this.props.match}/>
                        </div>
                        <div className="col l-3 row_width">
                            <RightHomePage/>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        isColor: state.changeColor,// nhận từ reducer
    }
}
export default connect(mapStateToProps)(Content);