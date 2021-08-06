import *as Types from './../constants/TypesAction'


var initialState ="undateTime";

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SORT:
             state = action.typeSort// type sort nhận được từ HomePageMenus

            return state;

        default: return state;
    }
};

export default myReducer;