// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';
import HomePage from './pages/HomePage';
import ChapterPage from './pages/ChapterPage';
import NotFound from './pages/NotFound';
import ChaptersListPage from './pages/ChaptersListPage';

const routes = [
    {   
        exact : true,
        path: '/',
        main:() => <HomePage/>
    },
    {   
        exact: false,
        path:'/:slug/:slugChapter',
        main:({match}) => <ChapterPage match={match}/>
    },
    {   
        exact: false,
        path: '/:slug',
        main:({match}) => <ChaptersListPage match={match}/>
    },
    {   
        exact: false,
        path: '',
        main:() => <NotFound/>
    }
];


export default routes;
