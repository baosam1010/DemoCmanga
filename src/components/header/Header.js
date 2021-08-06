import React, { Component } from 'react';
import logo from './../../assets/images/logo.png';
import './../../assets/css/header.css'
import Form from './Form';
// import Content from './../Content';

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { filterSearch } from './../../actions'




const menus = [
    {
        name: 'Action',
        to: '/action',
        exact: false,
    },
    {
        name: 'Cổ đại',
        to: '/co-dai',
        exact: false,
    },
    {
        name: 'Manhwa',
        to: '/manhwa',
        exact: false,
    },
    {
        name: 'Chuyển Sinh',
        to: '/chuyen-sinh',
        exact: false,
    },
    {
        name: 'Ngôn tình',
        to: '/ngon-tinh',
        exact: false,
    },
    {
        name: 'Manga',
        to: '/manga',
        exact: false,
    },
    {
        name: 'Xuyên Không',
        to: '/xuyen-khong',
        exact: false,
    },
    {
        name: 'Yaoi',
        to: '/yaoi',
        exact: false,
    },
    {
        name: 'Comic',
        to: '/comic',
        exact: false,
    },
    {
        name: 'Trinh Thám',
        to: '/trinh-tham',
        exact: false,
    },
    {
        name: 'Đam Mỹ',
        to: '/dam-my',
        exact: false,
    },
    {
        name: 'Josei',
        to: '/josei',
        exact: false,
    },

];

// ------------custom link để thêm class active ------------
// const MenuLink = ({label, to, activeOnlyWhenExact}) => {
//     return(
//         <Route path={to} exact={activeOnlyWhenExact} children={({match})=>{
//             var active =  match ? 'active abc': '';
//             return(
//                 <li className={`col l-2 ${active}`}>
//                     <Link to={to}>{label}</Link>
//                 </li>
//             )
//         }}/>
//     )
// }

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            isShowNav: false,
            
        });
        this.myRef = React.createRef();
    };
    // ------------- Show menus --------------
    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (<li key={index} className="col l-2 m-4 c-6"><Link to={menu.to} exact={menu.exact ? 1 : 0} >{menu.name}</Link></li>)
            })
        }
        return result;
    }

    // -----------Open and close Form login,register---------------
    onOpenForm = (e) => {
        document.getElementById('login-signup').style.display = 'flex';
        let target = e.target.innerText;
        // let getItem = document.getElementById('module-list').getElementsByTagName('li');
        // console.log("Item",getItem)
        switch (target) {
            case 'Đăng Ký':
                console.log("Đã vào Đăng ký form-1")

                document.getElementById('form-1').style.display = 'flex';
                document.getElementById('form-2').style.display = 'none';
                // document.getElementById('btn-register').style.display ='block';
                break;

            case 'Đăng Nhập':
                console.log("Đã vào đăng nhập Form-2");
                document.getElementById('form-1').style.display = 'none';
                document.getElementById('form-2').style.display = 'flex';
                // document.getElementById('btn-logup').style.display ='block';
                break;
            default: break;
        }
    }
    // ------show Subnav----------
    onShowNav = () => {
        this.setState({ isShowNav: !this.state.isShowNav })
    };
    // ----- filter search----------

    // --------onSearch----------
    onSearch = (e) => {
        const value = e.target.value
        var dispatch = this.props.dispatch;
        // console.log("myRef:", this.myRef)
        setTimeout(() => {
            dispatch(filterSearch(value))
        }, 300)
      

    };
    //------Submit form search------------
    onSubmitSearch = (event) => {

        event.preventDefault();
        console.log("Đã submit thành công");
    };

    render() {
        var filter = this.props.filter;
        console.log("filter:", filter)

        return (
            <header >
                <div className="grid wide header-top">
                    <div className="header-top-left">
                        <Link to="/" ><img className="header-top-logo" src={logo} alt="logo" /></Link>
                    </div>
                    <button className="dark-mode">
                        <i className="fas fa-lightbulb"></i>
                    </button>
                    <form
                        id="search_top"
                        className="top-search header-input-mc"
                        onSubmit={this.onSubmitSearch}
                    >
                        <input
                            className="top-search_input"
                            type="text"
                            placeholder="Bạn muốn tìm truyện gì"
                            name="filterWord"
                            value={filter}
                            onChange={this.onSearch}
                            autoComplete="true"
                            


                        />
                        <button type="submit" className="top-search_btn"><i className="top-search_icon fas fa-search"></i></button>
                    </form>
                    <div className="header-top-right">
                        <ul className="header-top-right_list">
                            <button className="top-search_inp-right "><i className="top-search_icon fas fa-search"></i></button>
                            <li><button onClick={this.onOpenForm} className="header-btn" >Đăng Ký</button></li>
                            <li><button onClick={this.onOpenForm} className="header-btn" >Đăng Nhập</button></li>
                        </ul>
                    </div>
                    <Form />

                </div>
                <nav id="nav_menu" className="header-bottom-wrapper" >
                    <div className="grid wide header-bottom-bkg ">
                        <div className="header-bottom menu_pc" style={{ display: this.state.isShowNav === true ? 'flex' : 'none' }} >
                            <ul className="header-bottom-left">
                                <li className="menu-hide">
                                    <Link to="/category">
                                        Thể Loại
                                        <i className="arrow-down fas fa-sort-down"></i>
                                    </Link>
                                    <ul className=" menus-hide-list ">
                                        {/* <li className="col l-2"><Link className="active-category" to="/category/action">Action</Link></li>
                                    <li className="col l-2"><Link to="/category/co-dai">Cổ đại</Link></li>
                                    <li className="col l-2"><Link className="active-category" to="/category/manhwa">Manhwa</Link></li>
                                    <li className="col l-2"><Link to="/category/chuyen-sinh">Chuyển Sinh</Link></li>
                                    <li className="col l-2"><Link to="/category/ngon-tinh">Ngôn tình</Link></li>
                                    <li className="col l-2"><Link className="active-category" to="/category/manga">Manga</Link></li>
                                    <li className="col l-2"><Link to="/category/xuyen-khong">Xuyên không</Link></li>
                                    <li className="col l-2"><Link className="active-category" to="/category/yaoi">yaoi</Link></li>
                                    <li className="col l-2"><Link to="/category/comic">Comic</Link></li>
                                    <li className="col l-2"><Link to="/category/trinh-tham">Trinh thám</Link></li>
                                    <li className="col l-2"><Link to="/category/dam-my">Đam mỹ</Link></li>
                                    <li className="col l-2"><Link className="active-category" to="/category/josei">Josei</Link></li> */}
                                        {this.showMenus(menus)}
                                    </ul>

                                </li>
                                <li className=""><Link to="/vip-truyen">VIP Truyện siêu hay</Link></li>
                                <li className=""><Link to="/cgame">CGame</Link></li>
                            </ul>
                            <ul className="header-bottom-right">
                                <li><Link to="/market">Chợ</Link></li>
                                <li><Link to="/dau-truong">Đấu trường</Link></li>
                                <li><a href="https://www.facebook.com/groups/cmangadotcom">Group Facebook</a></li>
                            </ul>
                        </div>
                        <button onClick={this.onShowNav} className="btn_nav">
                            <i className="fas fa-bars" />
                        </button>
                    </div>
                </nav>

            </header>


        );
    }
}
const mapStateToProps = (state) => {
    return {
        filter: state.filterSearch,
    }
}
export default connect(mapStateToProps, null)(Header);