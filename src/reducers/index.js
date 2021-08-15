import {combineReducers} from 'redux';
import listAll from './listAll';
import chapterList from './chapterList';
import getChapter from './getChapter';
import sort from './sort';
import changeGrid from './changeGrid';
import filterSearch from './filterSearch';
import changeColor from './changeColor';
import changeTop from './changeTop';
import sendNameManga from './sendNameManga';









const myReducer = combineReducers({
    listAll,// listAll:listAll
    chapterList,
    getChapter,
    sort,
    changeGrid,
    filterSearch,
    changeColor,
    changeTop,
    sendNameManga,
    
});

export default myReducer;