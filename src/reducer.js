import {TEST} from './actions';
import {STORE_QUERY} from './actions'
import {STORE_DATA} from './actions'
import {SET_NAME} from './actions'
import {CHECK_API} from './actions'

const initialState = {
    test: null,
    query: "Why not try 'ninja'?",
    data: null,
    name: "The Movie Grid",
    apiworking:true,
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

    if (action.type === SET_NAME){
        return Object.assign({}, state, {
            name: action.name,
        });
    }

    if (action.type === CHECK_API){
        return Object.assign({}, state, {
            apiworking: action.apiworking
        });
    }

return state;

};