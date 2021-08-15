import React, { Component } from 'react';
import Footer from './../components/Footer';
import './../assets/css/chapterpage.css';
import { connect } from 'react-redux';
import { getChapterRequests } from './../actions/index'
import axios from 'axios';




class ChapterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mangaList: [],
            textComment: [],
            arrComment: [],

        }
    };

    componentDidMount() {
        // this.props.getChapterAll()
        axios.get('https://60f7820c9cdca00017454e83.mockapi.io/manga/v1/articles')
            .then(response => this.setState({ mangaList: response.data }))
    };
    onTypingText = (e) => {
        var value = e.target.value;
        console.log("valueChapter:", value)
        this.setState({
            textComment: e.target.value
        })
    }
    onAddComment = (e) => {
        e.preventDefault();
        console.log('e:', e)
    }

    render() {
        var mangaList = this.state.mangaList;
        var isColor = this.props.isColor;
        console.log("chapterColor:", isColor)
        console.log("props",this.props)
        // console.log("textCom:", this.state.textComment)

        // --------Lấy url trên chorme
        var { match } = this.props;
        var url = match.url;
        // console.log("ChapterPageUrl:", url);
        // console.log(this.state.mangaList)

        const showChapter = (mangaList) => {
            var result = null;
            if (mangaList.length > 0) {
                for (let i = 0; i < mangaList.length; i++) {
                    if (url.indexOf(mangaList[i].slug) > 0) {
                        result = mangaList[i].chapters.map((chapter) => {
                            if (url.indexOf(chapter.slugChapter) > 0) {
                                return (
                                    <div 
                                        key={chapter.chapterNum} 
                                        className="chapter-wrapper"
                                    >
                                        <button className="change-server">Đổi server ảnh</button>
                                        <h2>Chapter {chapter.chapterNum}</h2>
                                        <img alt={chapter.name} src={chapter.imgURL} />
                                        <img alt={chapter.name} src={chapter.imgURL} />
                                    </div>
                                )
                            }
                            return chapter = null;
                        })
                    }
                }
            }
            return result;
        }

        return (
            <div 
                className=" chapter-page"
                style={{ backgroundColor: isColor ? "#18191a":"var(--heading-color)"}}

            >
                {showChapter(mangaList)}
                {/* {showChapter(this.state.mangaList)} */}
                <div className="grid wide book-form-wrapper-chapter"
                    style={{ marginBottom: '50px' }}
                >
                    {/* Hiển thị nội dung chat */}

                    {/* <ul style={{listStyleType:'none'}}>
                        <li> truyện hay đó ad</li>
                        <li> {this.state.textComment}</li>
                    </ul> */}

                    <form className="book-item-comment" onSubmit={this.onAddComment} >
                        <label htmlFor="book-item-input"><i className="fas fa-comments"></i> 0 bình luận</label>
                        <textarea
                            id="book-item-input"
                            type="text"
                            placeholder="Nội dung comment ..."
                            name="textComment"
                            onChange={this.onTypingText}
                        />
                        <button type="submit"><i className="tele-icon fab fa-telegram-plane"></i></button>
                    </form>
                    <button className="all-comments">xem tất cả bình luận</button>
                </div>
                <Footer />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getChapterAll: () => {
            dispatch(getChapterRequests());
        }
    }
}
const mapStateToProps = (state) => {
    return {
        //  lấy ở index store có chứa các state
        mangaList: state.getChapter,
        isColor: state.changeColor,// nhận từ store

    }
}
export default connect(mapDispatchToProps, mapStateToProps)(ChapterPage);