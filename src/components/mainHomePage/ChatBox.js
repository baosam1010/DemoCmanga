import React, { Component } from 'react';
import './../../assets/css/chatbox.css';
import women from './../../assets/images/women.png';
import research from './../../assets/images/research.png';
import scientist from './../../assets/images/scientist.png';

import helmet from './../../assets/images/helmet.png';
import gloves from './../../assets/images/gloves.png';
import boots from './../../assets/images/boots.png';




class ChatBox extends Component {
    constructor(props) {
        super(props);
        this.state  = {
                height: 267,
                display: "none",
                activeClass:"button-circle"
        }
    };

    showInfo = () => {
        this.setState({
            display: "flex"
            }) 
    };
    onCloseProfile=()=>{
        this.setState({
            display: "none"
            }) 
    };
    onChangeSize=()=>{
        this.setState({ 
            height: 350,
            activeClass:"button-circle active-button"
        })
    }

    render() {
        return (
            <div className="chat-control">
                <div className="chat-menu-header">
                    <div className="chat-menu-left">
                        <button className="button-rectange menu-left-global active-button">
                            Tổng
                            {/* <span className="count-chat active-info ">12</span> */}
                        </button>
                        <button className="button-rectange menu-left-market">
                            Chợ
                            {/* <span className="count-chat">1</span> */}
                        </button>
                        <button className="button-rectange menu-left-recruit ">
                            Tuyển
                            {/* <span className="count-chat">12</span> */}
                        </button>
                    </div>
                    <div className="chat-menu-right">
                        <button 
                            className="button-circle "
                            title="Bật/tắt thông báo"
                        >
                                <i className="fas fa-pager"></i>
                        </button>

                        <button 
                            className={this.state.activeClass}
                            title="Tăng kích thước khung chat"
                            onClick={this.onChangeSize}
                        >
                                <i className="fas fa-sort-amount-up-alt "></i> 
                        </button>

                        <button 
                            className="button-circle "
                            title="Bật/tắt âm thanh"
                        >
                                <i className="fas fa-volume-up"></i>
                        </button>

                    </div>
                </div>
                {/* Chat Box */}
                <div className="chat-box" >
                    <div className="chat-div" style={{ height: this.state.height + 'px' }}>
                        <ul className="chat-list chat-global" >
                            <li>
                                <img className="img-user" src={women} alt="women"/>
                                <p className="chat-content">
                                    <span className="name-user" onClick={this.showInfo}>SamSam</span>
                                    <span className="chat-des">: Có ai có đồ bán không</span>
                                    <span className="time time-format"> 14 phút trước</span> 
                                </p>
                            </li>
                            <li>
                                <img className="img-user" src={research} alt="research"/>
                                <p className="chat-content">
                                    <span className="name-user" onClick={this.showInfo}>Harley</span>
                                    <span className="chat-des">: Có ai có đồ bán không</span>
                                    <span className="time time-format"> 13 phút trước</span> 
                                </p>
                            </li>
                            <li>
                                <img className="img-user" src={scientist} alt="women"/>
                                <p className="chat-content">
                                    <span className="name-user" onClick={this.showInfo}>LuLu</span>
                                    <span className="chat-des">: Không có gì...</span>
                                    <span className="time time-format"> 12 phút trước</span> 
                                </p>
                            </li>
                            <li>
                                <img className="img-user" src={women} alt="women"/>
                                <p className="chat-content">
                                    <span className="name-user" onClick={this.showInfo}>SamSam</span>
                                    <span className="chat-des">: Có ai có đồ bán không</span>
                                    <span className="time time-format"> 11 phút trước</span> 
                                </p>
                            </li>
                            <li>
                                <img className="img-user" src={research} alt="research"/>
                                <p className="chat-content">
                                    <span className="name-user" onClick={this.showInfo}>Harley</span>
                                    <span className="chat-des">: Có ai có đồ bán không</span>
                                    <span className="time time-format"> 10 phút trước</span> 
                                </p>
                            </li>
                            <li>
                                <img className="img-user" src={scientist} alt="women"/>
                                <p className="chat-content">
                                    <span className="name-user" onClick={this.showInfo}>LuLu</span>
                                    <span className="chat-des">: Không có gì...</span>
                                    <span className="time time-format"> 9 phút trước</span> 
                                </p>
                            </li>
                            <li>
                                <img className="img-user" src={women} alt="women"/>
                                <p className="chat-content">
                                    <span className="name-user" onClick={this.showInfo}>SamSam</span>
                                    <span className="chat-des">: không bán </span>
                                    <span className="time time-format"> 8 phút trước</span> 
                                </p>
                            </li>
                            <li>
                                <img className="img-user" src={research} alt="research"/>
                                <p className="chat-content">
                                    <span className="name-user" onClick={this.showInfo}>Harley</span>
                                    <span className="chat-des">: Có không</span>
                                    <span className="time time-format"> 7 phút trước</span> 
                                </p>
                            </li>
                            <li>
                                <img className="img-user" src={scientist} alt="women"/>
                                <p className="chat-content">
                                    <span className="name-user" onClick={this.showInfo}>LuLu</span>
                                    <span className="chat-des">: haha </span>
                                    <span className="time time-format"> 6 phút trước</span> 
                                </p>
                            </li>   
                            
                        </ul>
                        <ul className="chat-list chat-market" >
                            <li>
                                <img src="" alt=""/>
                                <p className="chat-content">
                                    Có đồ cần bán 
                                    <span className="time time-format"> 6 phút trước</span>
                                </p>
                            </li>
                        </ul>
                        <ul className="chat-list chat-recruit" >
                            <li>
                                <img src="" alt="logo-admin"/>
                                <p className="chat-content">
                                    Cần tuyển editor
                                    <span className="time time-format"> 6 phút trước</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="chat-add">
                        <input 
                            className="chat-text"
                            type="text"                           
                            placeholder="Bạn muốn nói điều gì"
                        />
                        <button className="reload-chat">
                            <i className="fas fa-arrow-circle-down"></i>
                        </button>
                        
                    </div>
                </div>
                {/* Profile của user */}
                <div id="profileUser" className="profile-userInfo" style={{display: this.state.display}}>
                    <div className="col l-3 user-list_info">
                        <img className="profile-avatar-user" src={women} alt="women"/>
                        <p className="profie-name-user">SamSam</p>
                        <div className="profile-equipment">
                            <img className="equipment-user" src={helmet} alt="helmet"/>
                            <img className="equipment-user" src={gloves} alt="gloves"/>
                            <img className="equipment-user" src={boots} alt="equipment-3"/>
                        </div>
                        <button className="profile-btn" onClick={this.onCloseProfile}>Close</button>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default ChatBox;