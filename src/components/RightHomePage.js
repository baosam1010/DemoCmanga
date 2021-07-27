import React, { Component } from 'react';
import './../assets/css/righthomepage.css';
import rightImg from './../assets/images/header-menu-right.jpg';
import logo from './../assets/images/logo.png';
import hack from './../assets/images/hack.jpg';



class RightHomePage extends Component {

    onLoadMore = (e) => {
        console.log("đã click");
        e.preventDefault();
        document.getElementById('top-lenght').style.maxHeight = "inherit";
        document.getElementById('top-load-more').style.display = "none";
    };
    onChangeTop = (e) => {
        // console.log(e.target.innerText);

        let tagPtop = e.target.parentElement.children;
        // console.log(tagPtop)

        let tagNextTop = e.target.parentElement.nextSibling.children;

        if (tagPtop.length > 0) {
            for (let i = 0; i < tagPtop.length; i++) {
                // console.log("đã vào đây:", tagPtop[i]);
                let activeClass = tagPtop[i].className;
                if (activeClass === "active-top") {

                    // console.log(`vào đây ${i}`,tagPtop[i]);
                    tagPtop[i].classList.remove("active-top");
                    e.target.classList.add("active-top");

                }
            }
            switch (e.target.innerText) {

                case "Top Ngày":
                    if (tagNextTop.length > 0) {
                        // console.log("vào trường hợp 11111")
                        for (let i = 0; i < tagNextTop.length; i++) {
                                // console.log(`đây là ${i}`,tagNextTop[i].classList)
                            if (tagNextTop[i].classList.value === "top-day") {
                                // console.log(tagNextTop[i].classList)
                                tagNextTop[i].style.display = "flex";
                            }else  {tagNextTop[i].style.display = "none";}
                        }
                    }
                    break;

                case "Top Tuần":
                    if (tagNextTop.length > 0) {
                        // console.log("vào trường hợp 22222")
                        for (let i = 0; i < tagNextTop.length; i++) {
                                // console.log(`đây là ${i}`,tagNextTop[i].classList)
                            if (tagNextTop[i].classList.value === "top-week") {
                                // console.log(tagNextTop[i].classList)
                                tagNextTop[i].style.display = "flex";
                            }else  {tagNextTop[i].style.display = "none";}
                        }
                    }
                    break;
                case "Top Tổng":
                    if (tagNextTop.length > 0) {
                        // console.log("vào trường hợp 3333")
                        for (let i = 0; i < tagNextTop.length; i++) {
                                // console.log(`đây là ${i}`,tagNextTop[i].classList)
                            if (tagNextTop[i].classList.value === "top-total") {
                                // console.log(tagNextTop[i].classList)
                                tagNextTop[i].style.display = "flex";
                            }else  {tagNextTop[i].style.display = "none";}
                        }
                    }
                    break;
                default: break;
            }

        }
    }




    render() {


        return (
            <div className="right-home-page">
                <header className="right-home-header" >
                    <a
                        href="https://www.facebook.com/cmangamovie/"
                    >
                        <img className="right-header-bkg" src={rightImg} alt="rightImg" />
                        <img className="right-header-logo" src={logo} alt="logo" />

                        <p>Truyện tranh Cmanga</p>
                    </a>
                </header>
                <div className="right-home-top">
                    <div className="top-manga-wrapper">
                        <h3 className="top-manga-heading">
                            <p onClick={this.onChangeTop} className="active-top">Top Ngày</p>
                            <p onClick={this.onChangeTop} >Top Tuần</p>
                            <p onClick={this.onChangeTop} >Top Tổng</p>
                        </h3>
                        <ul id="top-lenght">
                            <li className="top-day">
                                <span className="top-manga-stt">1</span>
                                <img className="top-manga-img" src={hack} alt="manga1"></img>
                                <div className="top-manga-info">
                                    <a href="/">Thông thiên cửu địa</a>
                                    <p className="top-manga-info-chapter">chapter 150</p>
                                    <p className="top-manga-info-view"><i className="fas fa-eye"></i> 150</p>
                                </div>
                            </li>
                            <li className="top-day">
                                <span className="top-manga-stt">2</span>
                                <img className="top-manga-img" src={hack} alt="manga1"></img>
                                <div className="top-manga-info">
                                    <a href="/">Thông thiên cửu địa</a>
                                    <p className="top-manga-info-chapter">chapter 6</p>
                                    <p className="top-manga-info-view"><i className="fas fa-eye"></i> 122</p>
                                </div>
                            </li>
                            <li className="top-day">
                                <span className="top-manga-stt">3</span>
                                <img className="top-manga-img" src={hack} alt="manga1"></img>
                                <div className="top-manga-info">
                                    <a href="/">Thông thiên cửu địa</a>
                                    <p className="top-manga-info-chapter">chapter 9</p>
                                    <p className="top-manga-info-view"><i className="fas fa-eye"></i> 120</p>
                                </div>
                            </li>
                            <li className="top-day">
                                <span className="top-manga-stt">4</span>
                                <img className="top-manga-img" src={hack} alt="manga1"></img>
                                <div className="top-manga-info">
                                    <a href="/">Thông thiên cửu địa</a>
                                    <p className="top-manga-info-chapter">chapter 10</p>
                                    <p className="top-manga-info-view"><i className="fas fa-eye"></i> 444</p>
                                </div>
                            </li>


                            {/*   -------TOP WEEK */}

                            <li className="top-week">
                                <span className="top-manga-stt">1</span>
                                <img className="top-manga-img" src={hack} alt="manga1"></img>
                                <div className="top-manga-info">
                                    <a href="/">Thông thiên cửu địa</a>
                                    <p className="top-manga-info-chapter">chapter 10</p>
                                    <p className="top-manga-info-view"><i className="fas fa-eye"></i> 444</p>
                                </div>
                            </li>
                            <li className="top-week">
                                <span className="top-manga-stt">2</span>
                                <img className="top-manga-img" src={hack} alt="manga1"></img>
                                <div className="top-manga-info">
                                    <a href="/">Thông thiên cửu địa</a>
                                    <p className="top-manga-info-chapter">chapter 16</p>
                                    <p className="top-manga-info-view"><i className="fas fa-eye"></i> 444</p>
                                </div>
                            </li>
                            <li className="top-week">
                                <span className="top-manga-stt">3</span>
                                <img className="top-manga-img" src={hack} alt="manga1"></img>
                                <div className="top-manga-info">
                                    <a href="/">Thông thiên cửu địa</a>
                                    <p className="top-manga-info-chapter">chapter 19</p>
                                    <p className="top-manga-info-view"><i className="fas fa-eye"></i> 444</p>
                                </div>
                            </li>
                            <li className="top-week">
                                <span className="top-manga-stt">4</span>
                                <img className="top-manga-img" src={hack} alt="manga1"></img>
                                <div className="top-manga-info">
                                    <a href="/">Thông thiên cửu địa</a>
                                    <p className="top-manga-info-chapter">chapter 110</p>
                                    <p className="top-manga-info-view"><i className="fas fa-eye"></i> 444</p>
                                </div>
                            </li>

                            {/* ---------TOP TOTAL----------- */}

                            <li className="top-total">
                                <span className="top-manga-stt">1</span>
                                <img className="top-manga-img" src={hack} alt="manga1"></img>
                                <div className="top-manga-info">
                                    <a href="/">Thông thiên cửu địa</a>
                                    <p className="top-manga-info-chapter">chapter 150</p>
                                    <p className="top-manga-info-view"><i className="fas fa-eye"></i> 125</p>
                                </div>
                            </li>
                            <li className="top-total">
                                <span className="top-manga-stt">2</span>
                                <img className="top-manga-img" src={hack} alt="manga1"></img>
                                <div className="top-manga-info">
                                    <a href="/">Thông thiên cửu địa</a>
                                    <p className="top-manga-info-chapter">chapter 6</p>
                                    <p className="top-manga-info-view"><i className="fas fa-eye"></i> 125</p>
                                </div>
                            </li>
                            <li className="top-total">
                                <span className="top-manga-stt">3</span>
                                <img className="top-manga-img" src={hack} alt="manga1"></img>
                                <div className="top-manga-info">
                                    <a href="/">Thông thiên cửu địa</a>
                                    <p className="top-manga-info-chapter">chapter 9</p>
                                    <p className="top-manga-info-view"><i className="fas fa-eye"></i> 125</p>
                                </div>
                            </li>
                            <li className="top-total">
                                <span className="top-manga-stt">4</span>
                                <img className="top-manga-img" src={hack} alt="manga1"></img>
                                <div className="top-manga-info">
                                    <a href="/">Thông thiên cửu địa</a>
                                    <p className="top-manga-info-chapter">chapter 10</p>
                                    <p className="top-manga-info-view"><i className="fas fa-eye"></i> 125</p>
                                </div>
                            </li>


                        </ul>
                        <a onClick={this.onLoadMore} id="top-load-more" href="/">Xem thêm</a>
                    </div>
                </div>

            </div>

        );

    }
}



export default RightHomePage;