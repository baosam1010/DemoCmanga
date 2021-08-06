import {combineReducers} from 'redux';
import listAll from './listAll';
import chapterList from './chapterList';
import getChapter from './getChapter';
import sort from './sort';
import changeGrid from './changeGrid';
import filterSearch from './filterSearch';






const myReducer = combineReducers({
    listAll,// listAll:listAll
    chapterList,
    getChapter,
    sort,
    changeGrid,
    filterSearch,
    
});

export default myReducer;