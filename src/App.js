import React from 'react'
import './../src/assets/css/grid.css';
import './App.css';
// import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './../src/components/header/Header';

// import Content from './../src/components/Content';
// import HomePage from './pages/HomePage';
// import NotFound from './pages/NotFound';
// import ChaptersListPage from './pages/ChaptersListPage';
// import ChapterPage from './pages/ChapterPage';
// import axios from 'axios';


import routes from './routes';



const showContentMenus = (routes)=> {
  var result = null;
  if(routes.length > 0) {
    result = routes.map((route, index) => {
      // các route trong trang chủ
      return <Route key={index} exact={true} path={route.path} component={route.main}/>

    })
  };
  return result;
};

function App() {
  
  return (
    <Router >
      <div className="grid">
        <Header />
      </div>
      <Switch>
        {showContentMenus(routes)}

        {/* <Route exact path="/" component={HomePage} />
        <Route path="/chapterslist" component={ChaptersListPage}  />
        <Route path="/chapter" component={ChapterPage} />
        <Route component={NotFound} /> */}

      </Switch>
    </Router>
  );

}

export default App;
