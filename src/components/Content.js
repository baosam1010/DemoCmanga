import React, { Component } from 'react';
import './../assets/css/content.css';
import ChatBox from './ChatBox';
import MainHomePage from './mainHomePage/MainHomePage'
import RightHomePage from './RightHomePage';



class Content extends Component {
    render() {
        return (
            <div className=" content">
                <div className="grid wide content-wrapper ">
                    <div className="row">
                        <div className="col l-9">
                            <ChatBox/>
                            <MainHomePage/>
                        </div>
                        <div className="col l-3">
                            <RightHomePage/>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;