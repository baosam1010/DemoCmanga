import React, { Component } from 'react';
import './../assets/css/footer.css';
import logo from './../assets/images/logo.png';
import { Link } from 'react-router-dom'


class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <footer className="grid wide footer-wrapper">
                    <div className="col l-6 m-12 c-12 footer-left">
                        <Link to="/"><img className="footer-logo" src={logo} alt="logo" /></Link>
                        <p className="footer-left-detail">Luôn cập nhật liên tục các bộ truyện mới, truyện VIP để phục vụ độc giả <br/>
                        Đọc truyện hoàn toàn miễn phí, hỗ trợ đa thiết bị.</p> 
                        <p className="footer-left-detail">Email khiếu nại: baosam1010@gmail.com</p> 
                        <ul className="footer-left-detail footer-left-nav">
                            <li><Link to="/">Giới Thiệu</Link></li>
                            <li><Link to="/">Liên Hệ</Link></li>
                            <li><Link to="/">Chính Sách</Link></li>
                        </ul>
                        <p className="footer-left-res">Copyright © 2020 CMANGA.COM</p> 
                    </div>
                    <div className="col l-6 m-12 c-12 footer-right">
                        <ul className="footer-right-list">
                            <li><Link to="/xuyen-khong">truyện xuyên không</Link></li>
                            <li><Link to="/manhwa">manhwa</Link></li>
                            <li><Link to="/manga">manga</Link></li>
                            <li><Link to="/dam-my">đam mỹ</Link></li>
                            <li><Link to="/yaoi">yaoi</Link></li>
                            <li><Link to="/ngon-tinh">ngôn tình</Link></li>
                            <li><Link to="/co-dai">cổ đại</Link></li>
                            <li><Link to="/chuyen-sinh">chuyển sinh</Link></li>
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