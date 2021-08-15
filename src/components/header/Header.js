import React, { Component } from 'react';
import logo from './../../assets/images/logo.png';
import './../../assets/css/header.css'
import Form from './Form';
// import Content from './../Content';

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { filterSearch } from './../../actions'
import { changeColor } from './../../actions'
// import { sendNameManga } from './../../actions'






const menus = [
    {
        name: 'Action',
        to: '/category/action',
        exact: false,
    },
    {
        name: 'Cổ đại',
        to: '/category/co-dai',
        exact: false,
    },
    {
        name: 'Manhwa',
        to: '/category/manhwa',
        exact: false,
    },
    {
        name: 'Chuyển Sinh',
        to: '/category/chuyen-sinh',
        exact: false,
    },
    {
        name: 'Ngôn tình',
        to: '/category/ngon-tinh',
        exact: false,
    },
    {
        name: 'Manga',
        to: '/category/manga',
        exact: false,
    },
    {
        name: 'Xuyên Không',
        to: '/category/xuyen-khong',
        exact: false,
    },
    {
        name: 'Yaoi',
        to: '/category/yaoi',
        exact: false,
    },
    {
        name: 'Comic',
        to: '/category/comic',
        exact: false,
    },
    {
        name: 'Trinh Thám',
        to: '/category/trinh-tham',
        exact: false,
    },
    {
        name: 'Đam Mỹ',
        to: '/category/dam-my',
        exact: false,
    },
    {
        name: 'Josei',
        to: '/category/josei',
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
            isColor: true,
            // isInp: false,
        });
        this.myRef = React.createRef();
    };

    // ------------- Show menus --------------
    // onSendNameManga=(e)=>{
    //     // console.log("e_header:",e.target.href)
    //     var nameLink = e.target.href
    //     var dispatch = this.props.dispatch;
    //     dispatch(sendNameManga(nameLink))
    // }

    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                <li key={index} className="col l-2 m-4 c-6">
                    <Link 
                        to={menu.to} exact={menu.exact ? 1 : 0} 
                        onClick={this.onSendNameManga}
                    >
                        {menu.name}
                    </Link>
                </li>)
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

    // Window.onClick = (e) => {
    //     if (e.target == modal) {
    //         modal.style.display = "none";
    //       }
    // };

    // --------onSearch----------
    onSearch = (e) => {
        const value = e.target.value
        // console.log("myRef:", this.myRef)
        // setTimeout(() => {
        // }, 300)
        var dispatch = this.props.dispatch;
        dispatch(filterSearch(value))


    };
    //------Submit form search------------
    onSubmitSearch = (event) => {
        event.preventDefault();
        console.log("Đã submit thành công");
    };
    //------------Đổi màu nền -----------------
    onChangeColor = () => {
        // document.documentElement.style.setProperty("--primary-color", "black")
        
        // this.setState(state => ({ isColor: !state.isColor }))
        this.setState({isColor: !this.state.isColor})
        var dispatch = this.props.dispatch
        dispatch(changeColor(this.state.isColor))
    };
    // ------onOpenInpHeader-------
    onOpenInpHeader=()=> {
        document.getElementById('search_top').style.display = 'flex';
        document.getElementById('nav_menu').style.marginTop = '62px';
    }

    render() {
        var filter = this.props.filter;
        var isColor = this.props.isColor;
        // console.log("isColor1:",this.state.isColor)
        // console.log("filter:", filter)

        return (
            <header className="header" style={{ backgroundColor: isColor ? "#18191a" : "white" }}>
                <div className="grid wide header-top">
                    <div className="header-top-left">
                        <Link to="/" ><img className="header-top-logo" src={logo} alt="logo" /></Link>
                    </div>
                    <button
                        className="dark-mode"
                        onClick={this.onChangeColor}
                        style={{
                            backgroundColor: isColor ? "#E4E6EB" : "white",
                            color: isColor ? "black" : "var(--primary-color)",
                            border: isColor ? "1px solid #E4E6EB" : "1px solid var(--primary-color)"

                        }}
                    >
                        <i className="fas fa-lightbulb"></i>
                    </button>
                    <form
                        id="search_top"
                        className="top-search header-input-mc "
                        onSubmit={this.onSubmitSearch}
                        
            // -----------xem lại -------------------------
                        // style={{  display: this.state.isInp ? 'flex' :'none' }}
                    >
                        <input
                            className="top-search_input"
                            type="text"
                            placeholder="Bạn muốn tìm truyện gì"
                            name="filterWord"
                            value={filter}
                            onChange={this.onSearch}
                            autoComplete="true"
                            style={{
                                backgroundColor: isColor ? "#3a3b3c" : "white",
                                border: isColor ? "1px solid #3a3b3c" : "1px solid var(--primary-color)"
                            }}
                        />
                        <button
                            type="submit"
                            className="top-search_btn"
                            style={{
                                color: isColor ? "#999da1" : "var(--primary-color)",
                            }}
                        >
                            <i className="top-search_icon fas fa-search"></i>
                        </button>
                    </form>
                    <div className="header-top-right">
                        <ul className="header-top-right_list">
                            <button
                                className="top-search_inp-right"
                                style={{
                                    backgroundColor: isColor ? "#E4E6EB" : "white",
                                    color: isColor ? "black" : "var(--primary-color)",
                                    border: isColor ? "1px solid #E4E6EB" : "1px solid var(--primary-color)",
                    
                                }}
                                onClick={this.onOpenInpHeader}
                            >
                                <i className="top-search_icon fas fa-search"></i>
                            </button>
                            <li><button onClick={this.onOpenForm} className="header-btn" >Đăng Ký</button></li>
                            <li><button onClick={this.onOpenForm} className="header-btn" >Đăng Nhập</button></li>
                        </ul>
                    </div>
                    <Form />

                </div>
                <nav
                    id="nav_menu"
                    className="header-bottom-wrapper"
                    style={{ 
                        backgroundColor: isColor ? "#242526" : "var(--primary-color)",
                        // marginTop: this.state.isInp ? "60px":"0"
                        }}
                >
                    <div className="grid wide header-bottom-bkg ">
                        <div className="header-bottom menu_pc" style={{ display: this.state.isShowNav === true ? 'flex' : 'none' }} >
                            <ul className="header-bottom-left">
                                <li className="menu-hide">
                                    <Link to='/'>
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
                        <button
                            onClick={this.onShowNav}
                            // onOutsideClick={}
                            className="btn_nav"
                        >
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
        filter: state.filterSearch,// nhận từ reduceer
        isColor: state.changeColor,// nhận từ reducer
    }
}
export default connect(mapStateToProps, null)(Header);