import React, { Component } from 'react';
import logo from './../assets/images/logo.png';
import './../assets/css/header.css';

class Header extends Component {
    render() {
        return (
            <header >
                <div className="grid wide header-top">
                    <div className="header-top-left">
                        <a href="/" ><img className="header-top-logo" src={logo} alt="logo" /></a>
                    </div>
                    <button className="dark-mode">
                        <i className="fas fa-lightbulb"></i>
                    </button>
                    <div className="top-search">
                        <input className="top-search_input " type="text" placeholder="Bạn muốn tìm truyện gì" />
                        <button className="top-search_btn"><i className="top-search_icon fas fa-search"></i></button>
                    </div>
                    <div className="header-top-right">
                        <ul className="header-top-right_list">
                            <li><button onClick={this.onOpenForm} className="header-btn" >Đăng Ký</button></li>
                            <li><button onClick={this.onOpenForm} className="header-btn" >Đăng Nhập</button></li>
                        </ul>
                    </div>
                    <div id="login-signup">
                        <form id="form-1" className="col l-4 ">

                            <h2 id="form-heading" >Chưa nhận được </h2>

                            <ul id="module-list">
                                <li className="module-item">
                                    <p className="user-name">Tên đăng nhập</p>
                                    <input className="input-user-name" type="text" placeholder="Vui lòng nhập tên đăng nhập" />
                                </li>
                                <li className="module-item">
                                    <p className="user-password">Mật khẩu</p>
                                    <input className="input-user-password" type="password" placeholder="Vui lòng nhập mật khẩu" />
                                </li>
                                <li id="module-repeat-pass" className="module-item">
                                    <p className="rep-user-password">Nhập lại mật khẩu</p>
                                    <input className="input-rep-user-password" type="password" placeholder="Vui lòng nhập lại mật khẩu" />
                                </li>
                            </ul>
                            <div className="btn-form">
                                <button onClick={this.onSubmitForm} id="btn-logup" className="btn-common">Đăng Nhập</button>
                                <button onClick={this.onSubmitForm} id="btn-register" className="btn-common">Đăng Ký</button>
                                <button onClick={this.onCloseForm} className="btn-close">Hủy</button>
                            </div>
                        </form>
                    </div>

                </div>
                <nav className="header-bottom-wrapper">
                    <div className="grid wide header-bottom ">
                        <ul className="header-bottom-left">
                            <li className="menu-hide">
                                <a href="/">
                                    Thể Loại
                                    <i className="arrow-down fas fa-sort-down"></i>
                                </a>
                                <ul className=" menus-hide-list ">
                                    <li className="col l-2"><a className="active-category" href="/">Action</a></li>
                                    <li className="col l-2"><a href="/">Cổ đại</a></li>
                                    <li className="col l-2"><a className="active-category" href="/">Manhwa</a></li>
                                    <li className="col l-2"><a href="/">Chuyển Sinh</a></li>
                                    <li className="col l-2"><a href="/">Ngôn tình</a></li>
                                    <li className="col l-2"><a className="active-category" href="/">Manga</a></li>
                                    <li className="col l-2"><a href="/">Xuyên không</a></li>
                                    <li className="col l-2"><a className="active-category" href="/">yaoi</a></li>
                                    <li className="col l-2"><a href="/">Comic</a></li>
                                    <li className="col l-2"><a href="/">Trinh thám</a></li>
                                    <li className="col l-2"><a href="/">Đam mỹ</a></li>
                                    <li className="col l-2"><a className="active-category" href="/">Josei</a></li>
                                </ul>

                            </li>
                            <li className=""><a href="/">VIP Truyện siêu hay</a></li>
                            <li className=""><a href="/">CGame</a></li>
                        </ul>
                        <ul className="header-bottom-right">
                            <li><a href="/">Chợ</a></li>
                            <li><a href="/">Đấu trường</a></li>
                            <li><a href="https://www.facebook.com/groups/cmangadotcom">Group Facebook</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
    onCloseForm = (e) => {
        e.preventDefault();
        document.getElementById('login-signup').style.display = 'none';

    }

    onOpenForm = (e) => {
        document.getElementById('login-signup').style.display = 'flex';
        let target = e.target.innerText;
        // console.log("target:",target)

        let heaingForm = document.getElementById('form-heading')
        // console.log(heaingForm)
        let getItem = document.getElementById('module-list').getElementsByTagName('li');
        // console.log("Item",getItem)

        switch (target){
            case 'Đăng Ký':
                console.log("Đã vào Đăng ký")       
                heaingForm.innerHTML="Đăng Ký Mới"
                if(getItem.length > 0){
                    document.getElementById('module-repeat-pass').style.display = 'block'   
                }
                document.getElementById('btn-register').style.display ='block';
                document.getElementById('btn-logup').style.display ='none';


                break;

            case 'Đăng Nhập':
                console.log("Đã vào đăng nhập");
                heaingForm.innerHTML="Đăng Nhập"
                if(getItem.length > 0){
                    document.getElementById('module-repeat-pass').style.display = 'none'   
                }
                document.getElementById('btn-register').style.display ='none';
                document.getElementById('btn-logup').style.display ='block';

                break;
            default: break;
        }   
    }
    onSubmitForm = (e) => {
        e.preventDefault();
        console.log("Submitform")
    }
}

export default Header;