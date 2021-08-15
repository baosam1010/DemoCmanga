import *as Types from './../constants/TypesAction'


var initialState = "";

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SEND_NAME_MANGA:
             state = action.nameLink//  nhận được từ action send Name Manga

            return state;

        default: return state;
    }
};

export default myReducer;