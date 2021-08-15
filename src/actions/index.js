
//----------CÁC ACTION-------

import *as Types from './../constants/TypesAction'
import callAPI from './../utils/apiCaller'

// Danh sách các truyện cần hiển thị

export const listAllRequests = () =>{
    return (dispatch)=>{
        return callAPI("","GET", null)
            .then(response => {
                dispatch(listAll(response.data)) 
            })
    }
}

export const listAll = (mangaList)=> {
    return {
        type: Types.LIST_ALL,
        mangaList
    }
    
}
// CHAPTER LIST
export const chapterListRequests = ()=>{
    return  (dispatch)=>{
        return callAPI("","GET", null)
            .then(response=>{
                dispatch(chapterList(response.data))
            })
    }
}
export const chapterList = (mangaList)=>{
    return {
        type: Types.CHAPTER_LIST,
        mangaList
    }
}
// Get chapter

export const getChapterRequests = ()=>{
    return  (dispatch)=>{
        return callAPI("","GET", null)
            .then(response=>{
                dispatch(chapter(response.data))
            })
    }
}
export const chapter = (mangaLists)=>{
    return {
        type: Types.GET_CHAPTER,
        mangaLists
    }
}
//  Sort 
export const sortMangas = (typeSort) => {
    return {
        type: Types.SORT,
        typeSort// type sort nhận được từ HomePageMenus
    }
}
// change grid to list
export const changeGrid = (typeGrid)=>{
    return {
        type: Types.CHANGE_GRID,
        typeGrid      // type grid nhận được từ HomePageMenus
    }
}
// FILTER SEARCH AND
export const filterSearch = (filter)=>{
    return {
        type: Types.FILTER_SEARCH,
        filter      // type grid nhận được từ HomePageMenus
    }
}
// CHANGE COLOR
export const changeColor = (isColor)=>{
    return {
        type: Types.CHANGE_COLOR,
        isColor      // type grid nhận được từ Header Menu
    }
}
// CHANGE TOP
export const changeTopRequests = ()=>{
    return  (dispatch)=>{
        return callAPI("","GET", null)
            .then(response=>{
                dispatch(changeTop(response.data))
            })
    }
}
export const changeTop = (mangaList)=>{
    return {
        type: Types.CHANGE_TOP,
        mangaList
    }
}
// SEND NAME MANGA
export const sendNameManga = (nameLink)=>{
    return {
        type: Types.SEND_NAME_MANGA,
        nameLink      //  nhận được từ Header Menus chỗ action, xuyên không...
    }
}