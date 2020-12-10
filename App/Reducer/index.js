import {combineReducers} from 'redux';
import netinforeducer from './NetInfoReducer';
import reducer from './reducer';

export default combineReducers({
    netinforeducer,
    reducer
})

