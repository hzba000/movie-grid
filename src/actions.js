export const TEST = 'TEST';
export const test = (testVariable) => ({
    type: TEST,
    test: testVariable
})

export const STORE_QUERY = 'STORE_QUERY';
export const storeQuery = (newQuery) => ({
    type: STORE_QUERY,
    query: newQuery
})

export const STORE_DATA = 'STORE_DATA';
export const storeData = (newData) => ({
    type: STORE_DATA,
    data: newData
})

export const SET_NAME = 'SET_NAME';
export const setName = (newName) => ({
    type: SET_NAME,
    name: newName
})




