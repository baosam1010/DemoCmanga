// import *as Types from './../constants/TypesAction'


// var initialState =  [];

// var myReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case Types.GET_CHAPTER:
//              state = action.mangaList
//             return [...state];

//         default: return [...state];
//     }
// };

// export default myReducer;
import *as Types from './../constants/TypesAction'


var initialState =  [];

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_CHAPTER:
             state = action.mangaLists
            return [...state];

        default: return [...state];
    }
};

export default myReducer;