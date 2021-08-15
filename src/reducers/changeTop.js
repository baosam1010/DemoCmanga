import *as Types from './../constants/TypesAction'


var initialState = [];

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHANGE_TOP:
             state = action.mangaList// type grid nhận được từ HomePageMenus
            return [...state];
        default: return [...state];
    }
};

export default myReducer;