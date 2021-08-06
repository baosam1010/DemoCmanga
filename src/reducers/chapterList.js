import *as Types from './../constants/TypesAction'


var initialState =  [];

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHAPTER_LIST:
             state = action.mangaList
            return [...state];

        default: return [...state];
    }
};

export default myReducer;