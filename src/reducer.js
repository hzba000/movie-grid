import {TEST} from './actions';

const initialState = {
    test: null,
};



export default(state=initialState, action) => {
    if (action.type === TEST) {
        return Object.assign({}, state, {
            test: action.test
    });

}

return state;

};