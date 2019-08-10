import {TEST} from './actions';
import {STORE_QUERY} from './actions'
// import {STORE_DATA} from './actions'


const initialState = {
    test: null,
    query: null,
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

    // if (action.type === STORE_DATA){
    //     return Object.assign({}, state, {
    //         data: action.data,
    //     });
    // }
return state;

};