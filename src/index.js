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
    // 'SET_SEARCH_RESULT' ???
    return state
}

const favListReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_FAV':
            return [...state, action.payload]
        case 'SET_FAVLIST':
            return action.payload
        default:
            return state;
    }
    
};

const categoriesReducer = (state = [], action) => {
    switch(action.type){
        case 'SET_CATEGORIES':
            return action.payload
        default:
            return state;
    }
}

//SAGAS
function* rootSaga() {
    yield takeEvery('SAGA.FETCH_SEARCH_RESULTS',fetchSearchResults); //triggers AXIOS GET /API/GIPHY
    yield takeEvery('SAGA.FETCH_FAVLIST',fetchFavList); //triggers AXIOS GET /fav table
    yield takeEvery('SAGA.FETCH_CATEGORIES',fetchCategories); //triggers AXIOS GET /fav table
    yield takeEvery('SAGA.CREATE_FAV',addImageToFav); //triggers AXIOS POST /fav table
    yield takeEvery('SAGA.SET_CATEGORY',setImageCategory); //triggers AXIOS PUT /fav table
}


    // SAGAS GET
function* fetchSearchResults() {
    try {

        //pass to searchResultReducer 'SET_SEARCH_RESULT'
    } catch (err) {
        console.log('err');
    }
}

function* fetchFavList() {
    try {
        const favRes = yield axios.get('/api/favorite');
        // console.log(favRes.data)
        yield put({
            type: 'SET_FAVLIST',
            payload: favRes.data
        })

        //pass to favListReducer 'SET_FAVLIST'
    } catch (err) {
        console.log('err');
    }
}

function* fetchCategories() {
    try {
        const categoryRes = yield axios.get('/api/category');
        console.log(categoryRes.data);
        yield put({
            type:'SET_CATEGORIES',
            payload: categoryRes.data
        })

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

function* setImageCategory(action) {
    // const cat_id =  action.payload.selected;
    const id = action.payload.imageID;
    const updateObject = action.payload
    //will break down object in server instead
    try {
        yield axios.put(`/api/favorite/${id}`, updateObject)
        
    } catch (err) {
        console.log('err', err);
    };
  
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
