import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect } from 'react-redux';


class ItemManga extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: "none"
        }
    }
    
    render() {
        // var {match} = this.props;
        // var url = match.url;
        // console.log("itemManga:",match)
        var grid = this.props.grid;
        // console.log("grid Itemmanga:",grid)
        var showGrid = grid ===true ? "block": "none";
        var showList = grid ===true ? "none": "block";

        return (
            <>
            
                <li className="col l-3 m-6 c-12 item-manga-grid" style={{display:showGrid}}>
                    <div className="manga-avatar">
                        <div>
                            <Link to={this.props.manga.slug}>
                                <img className="manga-avatar-img" src={this.props.manga.imageurl} alt={this.props.manga.name} />
                            </Link>
                            <div className="manga-detail">
                                <span className="manga-detail-views"><i className="fas fa-eye"></i> {this.props.manga.views}</span>
                                <span className="manga-detail-tags"><i className="fas fa-tags"></i>{this.props.manga.follows}</span>
                            </div>
                        </div>
                    </div>
                    <div className="manga-info">
                        <Link className="manga-info-heading" to={this.props.manga.slug}>
                            {this.props.manga.name}
                        </Link>
                        <div className="manga-info-detail">
                            <Link to={`${this.props.manga.slug}/chapter-${this.props.manga.chapters.length}`} className="last-chater">
                                Chapter {this.props.manga.chapters.length}
                            </Link>
                            <p className="time-chapter">{Math.floor(this.props.manga.undateTime / 86400000)} ngày</p>
                        </div>
                    </div>
                </li>
                <li className="col l-12 m-12 c-12 item-manga-list" style={{display:showList}}>
                    <div className="manga-avatar-list">
                        <Link to={this.props.manga.slug}>
                            <img className="manga-avatar-img-list" src={this.props.manga.imageurl} alt={this.props.manga.name} />
                        </Link> 
                    </div>
                    <div className="manga-info-list">
                        <Link className="manga-info-heading-list" to={this.props.manga.slug}>
                            {this.props.manga.name}
                        </Link>
                        <div className="manga-detail-list">
                            <span className="manga-detail-views-list"><i className="fas fa-eye"> </i> {this.props.manga.views}</span>
                            <span className="manga-detail-tags-list"><i className="fas fa-tags" style={{color:"var(--primary-color)"}}> </i>{this.props.manga.follows}</span>
                        </div>
                        <div className="manga-info-detail-list">
                            <Link to={`${this.props.manga.slug}/chapter-${this.props.manga.chapters.length}`} className="last-chater-list">
                                Chapter {this.props.manga.chapters.length}
                            </Link>
                            <p className="time-chapter-list">{Math.floor(this.props.manga.undateTime / 86400000)} ngày</p>
                        </div>
                    </div>
                </li>
            </>
        );
    }
}

const mapStateToProps = (state) =>({
    grid: state.changeGrid
})
export default connect(mapStateToProps,null)(ItemManga);