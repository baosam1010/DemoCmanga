import React, { Component } from 'react';

class HomePageMenus extends Component {
    render() {
        return (
            <div className="home-page-menus">
                    <div className="home-menu-left">
                        <p>
                            <i className="fas fa-sync mr-8"></i>
                            Truyện mới cập nhật
                        </p>
                    </div>
                    <div className="home-menu-right">
                        <button
                            title="Loại bỏ nội dung 18+"
                            className="button-circle"
                        >
                            <i className="fas fa-baby"></i>
                        </button>
                        <button
                            title="Đổi giao diện List/Grid"
                            className="button-circle"
                        >
                            <i className="fas fa-list"></i>
                        </button>
                        <select className="update-sort" >
                            <option value="new">Sắp xếp theo </option>
                            <option value="new">Ngày cập nhật </option>
                            <option value="new">Tổng lượt xem </option>
                            <option value="new">Người theo dõi  </option>
                        </select>
                    </div>
                </div>
        );
    }
}

export default HomePageMenus;