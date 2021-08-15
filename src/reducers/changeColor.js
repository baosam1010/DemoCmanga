import *as Types from './../constants/TypesAction'


var initialState = false;

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHANGE_COLOR:
             state = action.isColor// type grid nhận được từ HomePageMenus

            return state;

        default: return state;
    }
};

export default myReducer;