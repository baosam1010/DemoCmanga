import React, { Component } from 'react';
import './../assets/css/footer.css';
import logo from './../assets/images/logo.png';

class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <footer className="grid wide footer-wrapper">
                    <div className="col l-6 footer-left">
                        <a href="/"><img className="footer-logo" src={logo} alt="logo" /></a>
                        <p className="footer-left-detail">Luôn cập nhật liên tục các bộ truyện mới, truyện VIP để phục vụ độc giả <br/>
                        Đọc truyện hoàn toàn miễn phí, hỗ trợ đa thiết bị.</p> 
                        <p className="footer-left-detail">Email khiếu nại: baosam1010@gmail.com</p> 
                        <ul className="footer-left-detail footer-left-nav">
                            <li><a href="/">Giới Thiệu</a></li>
                            <li><a href="/">Liên Hệ</a></li>
                            <li><a href="/">Chính Sách</a></li>
                        </ul>
                        <p className="footer-left-res">Copyright © 2020 CMANGA.COM</p> 
                    </div>
                    <div className="col l-6 footer-right">
                        <ul className="footer-right-list">
                            <li><a href="/">truyện ngôn tình</a></li>
                            <li><a href="/">manhwa</a></li>
                            <li><a href="/">manhhua</a></li>
                            <li><a href="/">đam mỹ</a></li>
                            <li><a href="/">yaoi</a></li>
                            <li><a href="/">ngôn tình</a></li>
                            <li><a href="/">cổ đại</a></li>
                            <li><a href="/">chuyển sinh</a></li>
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

export default Footer;