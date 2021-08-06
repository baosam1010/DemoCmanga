import React, { useState,useEffect } from 'react';
import Footer from './../components/Footer'
import { Link } from 'react-router-dom'
import './../assets/css/chapterslistpage.css';
// import axios from 'axios';
// import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {chapterListRequests} from './../actions/index'


// ChaptersListPage.defaultProps = [];

 function ChaptersListPage(props) {
    var [mangaList] = useState([]);

    console.log("ChapterlistPage 1:",mangaList)

    // url trên chorm
    var {match} = props;
    var url = match.url;
    // console.log("ListpageUrl:",match)

    useEffect(() => {
         props.getChapterList()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  

    mangaList = props.mangaList
    console.log("ChapterListpage:",mangaList)

    // -----------Kiểm tra tên truyện đầu vào--------------
    var nameManga = match.url.substring(1);
    // console.log(nameManga);
    
    

    // -----------Lấy category trong mangaList ------------
    const getCategory = (mangaList) => {
        // var result = null;
        if (mangaList.length > 0) {
            for (let i = 0; i < mangaList.length; i++) {
                if (mangaList[i].slug === nameManga) {
                    return (
                        mangaList[i].category.map((theloai, index) => {
                            return (
                                // <li key={index}>{theloai}</li>
                                <li key={index}><Link className="book-item-category-link" to="/xuyen-khong">{theloai}</Link></li>)

                        })
                    );
                }
            }
        }
        // return console.log("Result:",result);
    };
    // -----------Lấy danh sách chương---------------------
    const getChapters = (mangaList) => {
        var result = null;
        if (mangaList.length > 0) {
            for (let i = 0; i < mangaList.length; i++) {
                if (mangaList[i].slug === nameManga) {
                    result = mangaList[i].chapters.map((chapter, index) => {
                        return (
                            <tr key={index}>
                                <td key={index}><Link className="book-item-link" to={`${url}/chapter-${chapter.chapterNum}`}>Chương {chapter.chapterNum} </Link></td>
                                <td>{Math.floor(mangaList[i].undateTime / 86400000)} ngày</td>
                                <td>{mangaList[i].views}</td>
                            </tr>
                        )
                    })
                }
            }
        }
        return result;
    };
    // ---------------Lấy thời gian update truyện--------------
    const getTimeUpdate = (mangaList) => {
        var result = null;
        if (mangaList.length > 0) {
            for (let i = 0; i < mangaList.length; i++) {
                if (mangaList[i].slug === nameManga) {
                    return (
                        <tbody>
                            <tr>
                                <td className="book-item-width-stt">Tình trạng:</td>
                                <td className="book-item-width-stt">Đang tiến hành</td>
                            </tr>
                            <tr>
                                <td className="book-item-width-stt">Cập nhật:</td>
                                <td className="book-item-width-stt">{Math.floor(mangaList[i].undateTime / 86400000)} ngày</td>
                            </tr>
                            <tr>
                                <td className="book-item-width-stt">Lượt xem:</td>
                                <td className="book-item-width-stt">{mangaList[i].views}</td>
                            </tr>
                            <tr>
                                <td className="book-item-width-stt">Lượt theo dõi:</td>
                                <td className="book-item-width-stt">{mangaList[i].follows}</td>
                            </tr>
                        </tbody>
                    )
                }
            }
        }
        return result;
    };
    //------------Lấy avartar của Book manga----------------
    const getAvatarBook = (mangaList) =>{
        if(mangaList.length > 0){
            for (let i = 0; i < mangaList.length; i++) {
               if(mangaList[i].slug === nameManga){
                   return (
                        <div className=" book-item-avartar"><img src={mangaList[i].imageurl} alt={mangaList[i].name}></img></div> 
                   )
               }
            }
        }   
    };
    //--------------Lấy tên truyện---------------------------
    const getNameBook = (mangaList) =>{
        if(mangaList.length > 0){
            for (let i = 0; i < mangaList.length; i++) {
               if(mangaList[i].slug === nameManga){
                   return (
                    <h2 className="book-item-name">{mangaList[i].name}</h2>
                   )
               }
            }
        }   
    };



    return (
        <div className=" chapters-list">
            <div className="grid wide chapters-list-wrapper">
                <div className=" book-item">
                    {getAvatarBook(mangaList)}
                    {/* <div className=" book-item-avartar"><img src={hack} alt="manga-avatar"></img></div> */}
                    <div className=" book-item-manga">
                        {/* Tên truyện */}
                        {getNameBook(mangaList)}
                        {/* <h2 className="book-item-name">{nameManga}</h2> */}
                        <ul className="book-item-category">
                            {/* hiển thị category */}
                            {getCategory(mangaList)}
                        </ul>
                        <table className="book-item-info">
                            {/* HIển thị trạng thái của truyện */}
                            {getTimeUpdate(mangaList)}
                        </table>
                        <div className="book-item-btn">
                            <button className="book-item-btn-begin"><i className="fas fa-book"></i> Đọc từ đầu</button>
                            <button className="book-item-btn-follow"><i className="fas fa-tags"></i> Theo dõi</button>
                            <button className="book-item-btn-error"><i className="fas fa-exclamation-triangle"></i> Báo Lỗi</button>
                            <button className="book-item-btn-share">F share</button>
                        </div>
                    </div>
                </div>
                <h3 className="book-item-des"><i className="fas fa-info-circle"></i> Giới thiệu</h3>
                <p className="book-item-content">
                    Giới thiệu truyện:Thiếu niên Diệp Thiên đạt năng lực phục chế kĩ năng của người khác,
                    từ đây nghịch thiên sửa mệnh, vì bảo vệ muội muội, ở mạt thế dị thú cường hoành.
                    Vì trở nên càng mạnh, hắn bắt đầu tìm hiểu thế giới này, dần dần vạch trần bí mật của dị thứ nguyên……
                    【 độc nhất vô nhị / mỗi tuần canh hai chap / biên tập viên: Hoa thanh 】
                </p>
                <h3 className="book-item-title-list"><i className="fas fa-list"></i> Danh sách chương</h3>
                <table className="book-item-list">
                    <tbody>
                        <tr>
                            <th>Chapter</th>
                            <th>Cập nhật</th>
                            <th>Lượt xem</th>
                        </tr>
                        {getChapters(mangaList)}
                    </tbody>
                </table>
            </div>
            {/* <div className="grid wide book-form-wrapper">
                        <form className="book-item-comment" onSubmit={this} >
                            <label for="book-item-input"><i className="fas fa-comments"></i> 0 bình luận</label>
                            <textarea id="book-item-input" type="text" placeholder="Nội dung comment ..." />
                            <button type="submit"><i className="tele-icon fab fa-telegram-plane"></i></button>
                        </form>
                        <button className="all-comments">xem tất cả bình luận</button>
                </div>   */}
            <div className="mt-50">
                <Footer />
            </div>

        </div>
    )
}

const mapDispatchToProps = (dispatch, props)=>{
    return {
        getChapterList : ()=>{
            dispatch(chapterListRequests())
        }    
    }
}
const mapStateToProps = (state)=>{
    return {
        mangaList: state.chapterList, //  lấy ở index store có chứa các state
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ChaptersListPage);