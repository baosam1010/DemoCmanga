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
        path: '/category/action',
        main:({match}) => <HomePage match={match}/>,
    },
    {   
        exact: false,
        path:'/category/co-dai',
        main:({match}) => <HomePage match={match}/>
    },
    {   
        exact: false,
        path:'/category/manhwa',
        main:({match}) => <HomePage match={match}/>
    },
    {   
        exact: false,
        path:'/category/chuyen-sinh',
        main:({match}) => <HomePage match={match}/>
    },
    {   
        exact: false,
        path:'/category/ngon-tinh',
        main:({match}) => <HomePage match={match}/>
    },
    {   
        exact: false,
        path:'/category/manga',
        main:({match}) => <HomePage match={match}/>
    },
    {   
        exact: false,
        path:'/category/xuyen-khong',
        main:({match}) => <HomePage match={match}/>
    },
    {   
        exact: false,
        path:'/category/yaoi',
        main:({match}) => <HomePage match={match}/>
    },
    {   
        exact: false,
        path:'/category/comic',
        main:({match}) => <HomePage match={match}/>
    },
    {   
        exact: false,
        path:'/category/trinh-tham',
        main:({match}) => <HomePage match={match}/>
    },
    {   
        exact: false,
        path:'/category/dam-my',
        main:({match}) => <HomePage match={match}/>
    },
    {   
        exact: false,
        path:'/category/josei',
        main:({match}) => <HomePage match={match}/>
    },
    {   
        exact: false,
        path: '/:slug',
        main:({match}) => <ChaptersListPage match={match}/>
    },

    {   
        exact: false,
        path:'/category/action/:slug',
        main:({match}) => <ChaptersListPage match={match}/>
    },
    {   
        exact: false,
        path:'/category/action/:slug/:slugChapter',
        main:({match}) => <ChapterPage match={match}/>
    },
    {   
        exact: false,
        path:'/category/co-dai/:slug',
        main:({match}) => <ChaptersListPage match={match}/>
    },
    {   
        exact: false,
        path:'/category/co-dai/:slug/:slugChapter',
        main:({match}) => <ChapterPage match={match}/>
    },
    {   
        exact: false,
        path:'/category/manhwa/:slug',
        main:({match}) => <ChaptersListPage match={match}/>
    },
    {   
        exact: false,
        path:'/category/manhwa/:slug/:slugChapter',
        main:({match}) => <ChapterPage match={match}/>
    },
    {   
        exact: false,
        path:'/category/chuyen-sinh/:slug',
        main:({match}) => <ChaptersListPage match={match}/>
    },
    {   
        exact: false,
        path:'/category/chuyen-sinh/:slug/:slugChapter',
        main:({match}) => <ChapterPage match={match}/>
    },
    {   
        exact: false,
        path:'/category/ngon-tinh/:slug',
        main:({match}) => <ChaptersListPage match={match}/>
    },
    {   
        exact: false,
        path:'/category/ngon-tinh/:slug/:slugChapter',
        main:({match}) => <ChapterPage match={match}/>
    },
    {   
        exact: false,
        path:'/category/manga/:slug',
        main:({match}) => <ChaptersListPage match={match}/>
    },
    {   
        exact: false,
        path:'/category/manga/:slug/:slugChapter',
        main:({match}) => <ChapterPage match={match}/>
    },
    {   
        exact: false,
        path:'/category/xuyen-khong/:slug',
        main:({match}) => <ChaptersListPage match={match}/>
    },
    {   
        exact: false,
        path:'/category/xuyen-khong/:slug/:slugChapter',
        main:({match}) => <ChapterPage match={match}/>
    },
    {   
        exact: false,
        path:'/category/yaoi/:slug',
        main:({match}) => <ChaptersListPage match={match}/>
    },
    {   
        exact: false,
        path:'/category/yaoi/:slug/:slugChapter',
        main:({match}) => <ChapterPage match={match}/>
    },
    {   
        exact: false,
        path:'/category/comic/:slug',
        main:({match}) => <ChaptersListPage match={match}/>
    },
    {   
        exact: false,
        path:'/category/comic/:slug/:slugChapter',
        main:({match}) => <ChapterPage match={match}/>
    },
    {   
        exact: false,
        path:'/category/trinh-tham/:slug',
        main:({match}) => <ChaptersListPage match={match}/>
    },
    {   
        exact: false,
        path:'/category/trinh-tham/:slug/:slugChapter',
        main:({match}) => <ChapterPage match={match}/>
    },
    {   
        exact: false,
        path:'/category/dam-my/:slug',
        main:({match}) => <ChaptersListPage match={match}/>
    },
    {   
        exact: false,
        path:'/category/dam-my/:slug/:slugChapter',
        main:({match}) => <ChapterPage match={match}/>
    },
    {   
        exact: false,
        path:'/category/josei/:slug',
        main:({match}) => <ChaptersListPage match={match}/>
    },
    {   
        exact: false,
        path:'/category/josei/:slug/:slugChapter',
        main:({match}) => <ChapterPage match={match}/>
    },

    {   
        exact: false,
        path:'/:slug/:slugChapter',
        main:({match}) => <ChapterPage match={match}/>
    },

    // {   
    //     exact: false,
    //     path: '/category/:slug/:slugChapter',
    //     main:({match}) => <ChapterPage match={match}/>
    // },
   
    {   
        exact: false,
        path: '',
        main:() => <NotFound/>
    }
];


export default routes;
