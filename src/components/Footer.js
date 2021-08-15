import React, { Component } from 'react';
import './../assets/css/footer.css';
import logo from './../assets/images/logo.png';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';



class Footer extends Component {
    render() {

        var isColor = this.props.isColor;

        return (
            <div
                className="footer-container"
                style={{
                    backgroundColor: isColor ? "#242526" : "var(--light-background)",
                    borderTop: isColor ? "5px solid white" : "5px solid var(--primary-color)",
                    color: isColor ? "#7FA5B8" : "black",
                }}
            >
                <footer className="grid wide footer-wrapper">
                    <div className="col l-6 m-12 c-12 footer-left">
                        <Link to="/"><img className="footer-logo" src={logo} alt="logo" /></Link>
                        <p className="footer-left-detail">Luôn cập nhật liên tục các bộ truyện mới, truyện VIP để phục vụ độc giả <br />
                            Đọc truyện hoàn toàn miễn phí, hỗ trợ đa thiết bị.</p>
                        <p className="footer-left-detail">Email khiếu nại: baosam1010@gmail.com</p>
                        <ul className="footer-left-detail footer-left-nav">
                            <li>
                                <Link
                                    to="/"
                                    style={{ color: isColor ? "white" : "black", }}
                                >Giới Thiệu
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    style={{ color: isColor ? "white" : "black", }}
                                >Liên Hệ</Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    style={{ color: isColor ? "white" : "black", }}
                                >Chính Sách</Link>
                            </li>
                        </ul>
                        <p className="footer-left-res">Copyright © 2020 CMANGA.COM</p>
                    </div>
                    <div className="col l-6 m-12 c-12 footer-right">
                        <ul className="footer-right-list">
                            <li style={{ backgroundColor: isColor ? "#18191a" : "#e2e2e2", }}>
                                <Link
                                    style={{ color: isColor ? "white" : "black", }}
                                    to="/category/xuyen-khong">truyện xuyên không</Link></li>
                            <li style={{ backgroundColor: isColor ? "#18191a" : "#e2e2e2", }}>
                                <Link
                                    style={{ color: isColor ? "white" : "black", }}
                                    to="/category/manhwa">manhwa</Link></li>
                            <li style={{ backgroundColor: isColor ? "#18191a" : "#e2e2e2", }}>
                                <Link
                                    style={{ color: isColor ? "white" : "black", }}
                                    to="/category/manga">manga</Link></li>
                            <li style={{ backgroundColor: isColor ? "#18191a" : "#e2e2e2", }}>
                                <Link
                                    style={{ color: isColor ? "white" : "black", }}
                                    to="/category/dam-my">đam mỹ</Link></li>
                            <li style={{ backgroundColor: isColor ? "#18191a" : "#e2e2e2", }}>
                                <Link
                                    style={{ color: isColor ? "white" : "black", }}
                                    to="/category/yaoi">yaoi</Link></li>
                            <li style={{ backgroundColor: isColor ? "#18191a" : "#e2e2e2", }}>
                                <Link
                                    style={{ color: isColor ? "white" : "black", }}
                                    to="/category/ngon-tinh">ngôn tình</Link></li>
                            <li style={{ backgroundColor: isColor ? "#18191a" : "#e2e2e2", }}>
                                <Link
                                    style={{ color: isColor ? "white" : "black", }}
                                    to="/category/co-dai">cổ đại</Link></li>
                            <li style={{ backgroundColor: isColor ? "#18191a" : "#e2e2e2", }}>
                                <Link
                                    style={{ color: isColor ? "white" : "black", }}
                                    to="/category/chuyen-sinh">chuyển sinh</Link></li>
                        </ul>
                        <p className="footer-right-detail">Mọi thông tin và hình ảnh trên website đều được sưu tầm trên Internet.
                            Chúng tôi không sở hữu hay chịu trách nhiệm bất kỳ thông tin nào trên web này.
                            Nếu làm ảnh hưởng đến cá nhân hay tổ chức nào, khi được yêu cầu,
                            chúng tôi sẽ xem xét và gỡ bỏ ngay lập tức.</p>
                    </div>
                </footer>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isColor: state.changeColor,// nhận từ reducer
    }
}
export default connect(mapStateToProps)(Footer);