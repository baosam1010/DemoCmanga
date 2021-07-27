import React, { Component } from 'react';
import ItemManga from './ItemManga';


class HomePageList extends Component {
    render() {
        return (
            <div className="home-page-list">
                <ul className="lists-manga">
                        {this.props.mangas.map((manga) => (
                                <ItemManga key={manga.id} manga={manga} />
                        ))}
                </ul>
            </div>
        );
    }
}

export default HomePageList;