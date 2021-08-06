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
        }
    };

    componentDidMount() {
        // this.props.getChapterAll()
        axios.get('https://60f7820c9cdca00017454e83.mockapi.io/manga/v1/articles')
            .then(response => this.setState({ mangaList: response.data }))
    };

    render() {

        var mangaList = this.state.mangaList;

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
                                    <div key={chapter.chapterNum} className="chapter-wrapper">
                                        <button className="change-server">Đổi server ảnh</button>
                                        <h2>Chapter {chapter.chapterNum}</h2>
                                        <img alt={chapter.name} src={chapter.imgURL} />
                                        <img alt={chapter.name} src={chapter.imgURL} />
                                    </div>
                                )
                            }  
                        })
                    }
                }
            }
            return result;
        }

        return (
            <div className=" chapter-page">
                {showChapter(mangaList)}
                {/* {showChapter(this.state.mangaList)} */}
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
    }
}
export default connect(mapDispatchToProps, mapStateToProps)(ChapterPage);