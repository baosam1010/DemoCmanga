import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class ItemManga extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: "none",
            isLink: false,
        }
    }
//----------Xem lại đoạn này----------
    // onSendNameManga=()=>{
    //     if (this.props.match.url.includes('category')){
    //         console.log("khi clickMangaItem:",this.props.match.url)
    //     }
    // }

    render() {
        var {match} = this.props;
        // var url = match.url;
        // console.log("itemMangaUrl:",match)
        var grid = this.props.grid;
        // console.log("grid Itemmanga:",grid)
        var showGrid = grid === true ? "block" : "none";
        var showList = grid === true ? "none" : "block";
        var isColor = this.props.isColor;
        // console.log("mangaItemSlug:",this.props.manga.slug)

        // var nameLink = this.props.match.url
        // console.log("nameLink:",nameLink);

        var ccc = null;

        if (match === undefined){
            // console.log("match undefined")
            ccc = this.props.manga.slug
        }else if(match !== undefined){
            if(match.url.includes('category')){
                // console.log("da vao category")
                var url = match.url;
                ccc = url + '/' + this.props.manga.slug 
            }
        }

        // var slugName = this.props.manga.slug

        // if (url.includes('category')){
        //     console.log("da vao ccc")
        //     ccc = url + '/' + slugName;
            
        // }else{
        //     ccc = this.props.manga.slug }

        // console.log('url_slugname1:', url)
        // console.log('url_slugname2:',  slugName)
        // console.log('url_slugname3:',  ccc)



        return (
            <>
                <li key={this.props.manga.id} className="col l-3 m-4 c-6 item-manga-grid" style={{ display: showGrid }}>
                    <div className="manga-avatar">
                        <div>
                            <Link 
                                // to = { isLink === true ? ccc : slugName}
                                to = {ccc}
                            >
                                <img className="manga-avatar-img" src={this.props.manga.imageurl} alt={this.props.manga.name} />
                            </Link>
                            <div className="manga-detail">
                                <span className="manga-detail-views"><i className="fas fa-eye"></i> {this.props.manga.views}</span>
                                <span className="manga-detail-tags"><i className="fas fa-tags"></i>{this.props.manga.follows}</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="manga-info"
                        style={{
                            color: isColor ? "#8C9571" : "black",
                        }}
                    >
                        <Link
                            to = {ccc}
                            // to={this.props.manga.slug}
                            // to = { isLink === true ? ccc : slugName}

                            className="manga-info-heading"
                            style={{
                                color: isColor ? "white" : "black",
                            }}
                        >
                            {this.props.manga.name}
                        </Link>
                        <div className="manga-info-detail">
                            <Link
                                to={`${ccc}/chapter-${this.props.manga.chapters.length}`}
                                className="last-chater"
                                style={{
                                    color: isColor ? "white" : "black",
                                }}
                            >
                                Chapter {this.props.manga.chapters.length}
                            </Link>
                            <p 
                                className="time-chapter"
                                style={{ color: isColor ? "#7fa5b8" : "black"}}
                            >
                                {Math.floor(this.props.manga.undateTime / 86400000)} ngày
                            </p>
                        </div>
                    </div>
                </li>
                <li
                    className="col l-12 m-12 c-12 item-manga-list"
                    style={{
                        display: showList,
                        backgroundColor: isColor ? "#242526" : "white",
                        color: isColor ? "white" : "black"
                    }}
                >
                    <div className="manga-avatar-list">
                        <Link
                            onClick={this.onSendNameManga}
                            // to={this.props.manga.slug}
                            to = {ccc}
                        >
                            <img className="manga-avatar-img-list" src={this.props.manga.imageurl} alt={this.props.manga.name} />
                        </Link>
                    </div>
                    <div className="manga-info-list">
                        <Link
                            className="manga-info-heading-list"
                            // to={this.props.manga.slug}
                            to = {ccc}
                            style={{color: isColor ? "white" : "black"}}
                        >
                            {this.props.manga.name}
                        </Link>
                        <div
                            className="manga-detail-list"
                            style={{color: isColor ? "white" : "black"}}
                        >
                            <span className="manga-detail-views-list"><i className="fas fa-eye"> </i> {this.props.manga.views}</span>
                            <span className="manga-detail-tags-list"><i className="fas fa-tags" style={{ color: "var(--primary-color)" }}> </i>{this.props.manga.follows}</span>
                        </div>
                        <div className="manga-info-detail-list">
                            <Link
                                to={`${this.props.manga.slug}/chapter-${this.props.manga.chapters.length}`}
                                className="last-chater-list"
                                style={{ color: isColor ? "white" : "black"}}
                            >
                                Chapter {this.props.manga.chapters.length}
                            </Link>
                            <p 
                                className="time-chapter-list"
                                style={{ color: isColor ? "#7fa5b8" : "black"}}
                                
                            >
                                {Math.floor(this.props.manga.undateTime / 86400000)} ngày
                            </p>
                        </div>
                    </div>
                </li>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    grid: state.changeGrid,
    isColor: state.changeColor,// nhận từ reducer
    nameLink: state.sendNameManga

})
export default connect(mapStateToProps, null)(ItemManga);