import React, { Component } from 'react';
import './../assets/css/chatbox.css';
import women from './../assets/images/women.png';
import helmet from './../assets/images/helmet.png';
import gloves from './../assets/images/gloves.png';
import boots from './../assets/images/boots.png';




class ChatBox extends Component {
    render() {
        return (
            <div className="chat-control">
                <div className="chat-menu-header">
                    <div className="chat-menu-left">
                        <button className="button-rectange menu-left-global active-button">
                            Tổng
                            <span className="count-chat">12</span>
                        </button>
                        <button className="button-rectange menu-left-market">
                            Chợ
                            <span className="count-chat">1</span>
                        </button>
                        <button className="button-rectange menu-left-recruit ">
                            Tuyển
                            <span className="count-chat">12</span>
                        </button>
                    </div>
                    <div className="chat-menu-right">
                        <button 
                            className="button-circle on-off-nity"
                            title="Bật/tắt thông báo"
                        >
                                <i className="fas fa-pager"></i>
                        </button>

                        <button 
                            className="button-circle up-size-chat"
                            title="Tăng kích thước khung chat"
                        >
                                <i className="fas fa-sort-amount-up-alt"></i> 
                        </button>

                        <button 
                            className="button-circle on-off-volume"
                            title="Bật/tắt âm thanh"
                        >
                                <i className="fas fa-volume-up"></i>
                        </button>

                    </div>
                </div>
                <div className="chat-box">
                    <div className="chat-div">
                        <ul className="chat-list chat-global" >
                            <li>
                                <img className="img-user" src={women} alt="women"/>
                                <p className="chat-content">
                                    <span className="name-user" onClick={this.showInfo}>SamSam</span>
                                    <span className="chat-des">: Có ai có đồ bán không</span>
                                    <span className="time time-format"> 6 phút trước</span> 
                                </p>
                            </li>
                            <li>
                                <img className="img-user" src={women} alt="women"/>
                                <p className="chat-content">
                                    <span className="name-user" onClick={this.showInfo}>SamSam</span>
                                    <span className="chat-des">: Có ai có đồ bán không</span>
                                    <span className="time time-format"> 6 phút trước</span> 
                                </p>
                            </li>
                            <li>
                                <img className="img-user" src={women} alt="women"/>
                                <p className="chat-content">
                                    <span className="name-user" onClick={this.showInfo}>SamSam</span>
                                    <span className="chat-des">: Có ai có đồ bán không</span>
                                    <span className="time time-format"> 6 phút trước</span> 
                                </p>
                            </li><li>
                                <img className="img-user" src={women} alt="women"/>
                                <p className="chat-content">
                                    <span className="name-user" onClick={this.showInfo}>SamSam</span>
                                    <span className="chat-des">: Có ai có đồ bán không</span>
                                    <span className="time time-format"> 6 phút trước</span> 
                                </p>
                            </li><li>
                                <img className="img-user" src={women} alt="women"/>
                                <p className="chat-content">
                                    <span className="name-user" onClick={this.showInfo}>SamSam</span>
                                    <span className="chat-des">: Có ai có đồ bán không</span>
                                    <span className="time time-format"> 6 phút trước</span> 
                                </p>
                            </li><li>
                                <img className="img-user" src={women} alt="women"/>
                                <p className="chat-content">
                                    <span className="name-user" onClick={this.showInfo}>SamSam</span>
                                    <span className="chat-des">: Có ai có đồ bán không</span>
                                    <span className="time time-format"> 6 phút trước</span> 
                                </p>
                            </li><li>
                                <img className="img-user" src={women} alt="women"/>
                                <p className="chat-content">
                                    <span className="name-user" onClick={this.showInfo}>SamSam</span>
                                    <span className="chat-des">: Có ai có đồ bán không</span>
                                    <span className="time time-format"> 6 phút trước</span> 
                                </p>
                            </li><li>
                                <img className="img-user" src={women} alt="women"/>
                                <p className="chat-content">
                                    <span className="name-user" onClick={this.showInfo}>SamSam</span>
                                    <span className="chat-des">: Có ai có đồ bán không</span>
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
                <div id="profileUser" className="profile-userInfo">
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
    showInfo = () => {
        document.getElementById('profileUser').style.display = "flex";
    };
    onCloseProfile=()=>{
        document.getElementById('profileUser').style.display = "none";
    };
}

export default ChatBox;