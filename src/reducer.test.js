import reducer from './reducer';

import {
    storeQuery,
    storeData,


} from './actions'

const initialState = {
    test: null,
    query: null,
    data: null,
};

describe('storeQuery', () => {
    it('Should update state with current query term', () => {
        const newQuery = 'Terminator'
        
        let state = {
            query: 'Terminator'
        };
        state = reducer(state, storeQuery(newQuery));

        expect(state).toEqual({
            query: 'Terminator'
        });
    });
});

describe('storeData', () => {
    it('Should update state with current fetch data -- What the user just searched for!', () => {
        const newData = [{"title":"Ninja", "overview":"A ninja seeks vengeance for a stolen smore", "releasedate":"2019-02-02"}]
        
        let state = {
            data: [{"title":"Ninja", "overview":"A ninja seeks vengeance for a stolen smore", "releasedate":"2019-02-02"}]
        };
        state = reducer(state, storeData(newData));

        expect(state).toEqual({
            data: [{"title":"Ninja", "overview":"A ninja seeks vengeance for a stolen smore", "releasedate":"2019-02-02"}]
        });
    });
});

