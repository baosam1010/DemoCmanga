import React, { Component } from 'react';
import './../../assets/css/mainhomepage.css';
import HomePageMenus from './HomePageMenus';
import HomePageDes from './HomePageDes';
import HomePageNav from './HomePageNav';
import HomePageList from './HomePageList';
import axios from 'axios';





class MainHomePage extends Component {
    state = {
        MangaList: [],
    };

    componentDidMount() {
        
        axios.get("https://60f7820c9cdca00017454e83.mockapi.io/manga/v1/articles")
            .then(response => this.setState({ MangaList: response.data }));
    };

    render() {
        return (
            <div className="main-home-page">
                <HomePageMenus />
                <HomePageDes />
                <HomePageList mangas={this.state.MangaList} />
                <HomePageNav />
            </div>
        );
    }
}

export default MainHomePage;