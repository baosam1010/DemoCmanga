import React, { Component } from 'react';
import './../assets/css/righthomepage.css';
import rightImg from './../assets/images/header-menu-right.jpg';
import logo from './../assets/images/logo.png';
import { connect } from "react-redux";
import { changeTopRequests } from './../actions/index';
import {Link} from 'react-router-dom'




//  Sort right top
function compareValues(key, order = 'asc') {
    return function (a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // nếu không tồn tại
            return 0;
        }
        const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];
        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return (
            (order === 'desc') ? (comparison * -1) : comparison
        );
    };
};



class RightHomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // mangas:[],
            isColor: false,
            type: 'views',
        }
    }

    // change Length
    onLoadMore = (e) => {
        console.log("đã click");
        e.preventDefault();
        document.getElementById('top-lenght').style.maxHeight = "inherit";
        document.getElementById('top-load-more').style.display = "none";
    };

    // top change
    onChangeTop = (e) => {
        // console.log(e.target.innerText);
        let tagPtop = e.target.parentElement.children;
        // let result = null;
        // console.log("tagPtop:",tagPtop)
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
                case "Top Views":
                    if (tagNextTop.length > 0) {
                        for (let i = 0; i < tagNextTop.length; i++) {
                            if (tagNextTop[i].classList.value === "top-day") {
                                tagNextTop[i].style.display = "flex";
                                this.setState({ type: 'views' })
                            } else { tagNextTop[i].style.display = "none"; }
                        }

                    }
                    break;
                case "Top Follows":
                    if (tagNextTop.length > 0) {
                        for (let i = 0; i < tagNextTop.length; i++) {
                            if (tagNextTop[i].classList.value === "top-week") {
                                tagNextTop[i].style.display = "flex";
                                this.setState({ type: 'follows' })
                            } else { tagNextTop[i].style.display = "none"; }
                        }
                    }
                    break;
                case "Top Total":
                    if (tagNextTop.length > 0) {
                        for (let i = 0; i < tagNextTop.length; i++) {
                            if (tagNextTop[i].classList.value === "top-total") {
                                tagNextTop[i].style.display = "flex";
                                this.setState({ type: 'total' })
                            } else { tagNextTop[i].style.display = "none"; }
                        }
                    }
                    break;
                default: break;
            }
        }
    }
    //  show change top 
    // showChangeTopViews = (mangas) => {
    //     var mangas1 = mangas.sort(compareValues('views', 'desc'))
    //     var isColor = this.props.isColor;
    //     console.log("mangas1", mangas1)

    // }

    componentDidMount() {
        this.props.listmanga();
        // this.setState({
        //     mangas: this.props.mangas,
        //     isColor: this.props.isColor,
        // })
    }



    render() {

        var type = null;
        var isColor = this.props.isColor;
        var mangas = this.props.mangas;

        var mangas1 = mangas
        // console.log("mangas1:", mangas1)
        var mangas2 = mangas
        // console.log("mangas2:", mangas2)
        var mangas3 = mangas
        // console.log("mangas3:", mangas3)


        type = this.state.type;
        // console.log("typeInitial:",type)

        if (type === 'views') {
            mangas1 = mangas.sort(compareValues('views', 'desc'))
        } else if (type === 'follows') {
            mangas2 = mangas.sort(compareValues('follows', 'desc'))
        } else if (type === 'total') {
            let total = null;
            // console.log("da vao type 3")
            for (let i = 0; i < mangas.length; i++) {
                total = mangas[i].views + mangas[i].follows;
                mangas[i].total = total;
            }
            mangas3 = mangas.sort(compareValues('total', 'desc'))
        }

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
                            <p
                                className="active-top"
                                onClick={this.onChangeTop}
                                style={{
                                    backgroundColor: isColor ? "#18191a" : "#ccc",
                                    color: isColor ? "white" : "black"
                                }}
                            >Top Views</p>
                            <p
                                onClick={this.onChangeTop}
                                style={{
                                    backgroundColor: isColor ? "#18191a" : "#ccc",
                                    color: isColor ? "white" : "black"
                                }}
                            >Top Follows</p>
                            <p
                                onClick={this.onChangeTop}
                                style={{
                                    backgroundColor: isColor ? "#18191a" : "#ccc",
                                    color: isColor ? "white" : "black"
                                }}
                            >Top Total</p>
                        </h3>
                        <ul id="top-lenght">

                            {/* top views */}
                            {mangas1.map((manga, index) => {
                                var id = index + 1; 
                                return (
                                    <li className="top-day"
                                        style={{
                                            backgroundColor: isColor ? "#18191a" : "white",
                                            color: isColor ? "white" : "black"
                                        }}
                                        key={index}
                                    >
                                        <span className="top-manga-stt">{id}</span>
                                        <img className="top-manga-img" src={manga.imageurl} alt={manga.name}></img>
                                        <div className="top-manga-info">
                                            <Link   to={`/${manga.slug}`}
                                                style={{
                                                    color: isColor ? "white" : "black"
                                                }}
                                            >{manga.name}</Link>
                                            <p className="top-manga-info-chapter">chapter {manga.chapters.length}</p>
                                            <p className="top-manga-info-view"><i className="fas fa-eye"></i> {manga.views}</p>
                                        </div>
                                    </li>
                                )
                            })}

                            {/*   -------TOP WEEK */}
                            {mangas2.map((manga, index) => {
                            var id = index + 1; 
                                return (
                                    <li className="top-week"
                                        style={{
                                            backgroundColor: isColor ? "#18191a" : "white",
                                            color: isColor ? "white" : "black"
                                        }}
                                        key={index}
                                    >
                                        <span className="top-manga-stt">{id}</span>
                                        <img className="top-manga-img" src={manga.imageurl} alt={manga.name}></img>
                                        <div className="top-manga-info">
                                            <Link to={`/${manga.slug}`}
                                                style={{
                                                    color: isColor ? "white" : "black"
                                                }}
                                            >{manga.name}</Link>
                                            <p className="top-manga-info-chapter">chapter {manga.chapters.length}</p>
                                            <p className="top-manga-info-view"><i className="fas fa-tags"></i> {manga.follows}</p>
                                        </div>
                                    </li>
                                )
                            })}
                            {/* ---------TOP TOTAL----------- */}
                            {mangas3.map((manga, index) => {
                                var id = index + 1; 
                                return (
                                    <li className="top-total"
                                        style={{
                                            backgroundColor: isColor ? "#18191a" : "white",
                                            color: isColor ? "white" : "black"
                                        }}
                                        key={index}
                                    >
                                        <span className="top-manga-stt">{id}</span>
                                        <img className="top-manga-img" src={manga.imageurl} alt={manga.name}></img>
                                        <div className="top-manga-info">
                                            <Link to={`/${manga.slug}`}
                                                style={{
                                                    color: isColor ? "white" : "black"
                                                }}
                                            >{manga.name}</Link>
                                            <p className="top-manga-info-chapter">chapter {manga.chapters.length}</p>
                                            <p className="top-manga-info-view"><i className="fas fa-adjust"></i> {manga.total}</p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                        <a onClick={this.onLoadMore} id="top-load-more" href="/">Xem thêm</a>
                    </div>
                </div>

            </div>

        );

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        listmanga: () => {
            dispatch(changeTopRequests())
        }
    }
}
const mapStateToProps = (state) => {
    return {
        isColor: state.changeColor,// nhận từ reducer
        mangas: state.changeTop
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RightHomePage);