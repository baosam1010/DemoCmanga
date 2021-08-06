import *as Types from './../constants/TypesAction'


var initialState = true;

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHANGE_GRID:
             state = action.typeGrid// type grid nhận được từ HomePageMenus

            return state;

        default: return state;
    }
};

export default myReducer;