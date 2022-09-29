import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';

// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware

import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

// REDUCERS

const searchResultReducer = (state = [], action) => {
    if (action.type === 'SET_SEARCH_RESULT') {
            return action.payload;
    }
    return state
}

const favListReducer = (state = [], action) => {
    // 'SET_FAVLIST' ???
    return state
}

const categoriesReducer = (state = [], action) => {
    // 'SET_CATEGORYLIST' ???
    return state
}

//SAGAS
function* rootSaga() {
    yield takeEvery('SAGA.SEARCH_VALUE', searchValue)   //  triggers AXIOS GET to find the inital gifs based on search value
    yield takeEvery('SAGA.FETCH_SEARCH_RESULTS',fetchSearchResults); //triggers AXIOS GET /API/GIPHY
    yield takeEvery('SAGA.FETCH_FAVLIST',fetchFavList); //triggers AXIOS GET /fav table
    yield takeEvery('SAGA.FETCH_CATEGORIES',fetchCategories); //triggers AXIOS GET /fav table
    yield takeEvery('SAGA.CREATE_FAV',addImageToFav); //triggers AXIOS POST /fav table
    yield takeEvery('SAGA.SET_CATEGORY',setImageCategory); //triggers AXIOS PUT /fav table
}

function* searchValue(action) {
    try {
        console.log('in searchValue gen func with:', action.payload);
        const searchVal = action.payload;
        const searchRes = yield axios.get(`/search?searchVal=${searchVal}`);
        yield put({
            type: 'SET_SEARCH_RESULT',
            payload: searchRes.data
        });
    } catch (err) {
        console.log('err');
    }
}

    // SAGAS GET
function* fetchSearchResults() {
    try {
        //axios GET to API/GIPHY

        //pass to searchResultReducer 'SET_SEARCH_RESULT'
    } catch (err) {
        console.log('err');
    }
}

function* fetchFavList() {
    try {
        //AXIOS GET /fav table

        //pass to favListReducer 'SET_FAVLIST'
    } catch (err) {
        console.log('err');
    }
}

function* fetchCategories() {
    try {
        //AXIOS GET /cat table

        //pass to categoriesReducer 'SET_CATEGORYLIST'
    } catch (err) {
        console.log('err');
    }
}

function* addImageToFav() {
    try {
        //AXIOS POST to /fav table
            //payload is 'url' (?)

        //pass to searchResultReducer 'SET_FAV_LIST' ???? do we do this after POST?
    } catch (err) {
        console.log('err');
    }
}

function* setImageCategory() {
    try {
        ////triggers AXIOS PUT /fav table
            //payload is {img_id, cat_id} (?)

        //pass to searchResultReducer 'SET_CATEGORYILST' ???? do we do this after PUT?
    } catch (err) {
        console.log('err');
    }
}


const sagaMiddleware = createSagaMiddleware();
const storeInstance = createStore(
    combineReducers({
        favListReducer,
        searchResultReducer,
        categoriesReducer,
    }),
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));
