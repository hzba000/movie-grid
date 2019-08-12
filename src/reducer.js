import {TEST} from './actions';
import {STORE_QUERY} from './actions'
import {STORE_DATA} from './actions'
// import {STORE_TITLE} from './actions'



const initialState = {
    test: null,
    query: null,
    data: null,
    title: null,
};

export default(state=initialState, action) => {
    if (action.type === TEST) {
        return Object.assign({}, state, {
            test: action.test
    });

}

    if (action.type === STORE_QUERY){
        return Object.assign({}, state, {
            query: action.query,
        });
    }

    if (action.type === STORE_DATA){
        return Object.assign({}, state, {
            data: action.data,
        });
    }

    // if (action.type === STORE_TITLE){
    //     return Object.assign({}, state, {
    //         title: action.title,
    //     });
    // }

return state;

};