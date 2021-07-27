import React, { Component } from 'react';


class ItemManga extends Component {
    render() {
        return (
            <li className="col l-3 m-6 c-12 item-manga">
                <div className="manga-avatar">
                    <div>
                        <a href="/">
                            <img className="manga-avatar-img" src={this.props.manga.imageurl} alt={this.props.manga.name} />
                        </a>
                        <div className="manga-detail">
                            <span className="manga-detail-views"><i className="fas fa-eye"></i> {this.props.manga.views}</span>
                            <span className="manga-detail-tags"><i className="fas fa-tags"></i>{this.props.manga.follows}</span>
                        </div>
                    </div>
                </div>
                <div className="manga-info">
                    <a className="manga-info-heading" href="/">{this.props.manga.name}</a>
                    <div className="manga-info-detail">
                        <a href="/" className="last-chater">Chapter {this.props.manga.chapters.length} </a>
                        <p className="time-chapter">{this.props.manga.undateTime}</p>
                    </div>
                </div>

            </li>

        );
    }
}

export default ItemManga;