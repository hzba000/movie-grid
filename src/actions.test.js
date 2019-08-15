import {
    STORE_QUERY,
    storeQuery,
    STORE_DATA,
    storeData
} from './actions'

describe('storeQuery', () => {
    it('Should return the action', () => {
        const newQuery = 'juice';
        const action = storeQuery(newQuery)
        expect(action.type).toEqual(STORE_QUERY);
        expect(action.query).toEqual(newQuery);
    })
})

describe('storeData', () => {
    it('Should return the action', () => {
        const newData = [{"title":"Aladdin", "overview":"guy finds lamp", "releasedate":"2019-01-01"}];
        const action = storeData(newData)
        expect(action.type).toEqual(STORE_DATA);
        expect(action.data).toEqual(newData);
    })
})

