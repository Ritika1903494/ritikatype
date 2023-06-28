import { combineReducers } from "redux";
import{reducer} from './reducer';
import {fetchreducer} from "./fetchreducer";
import { submitreducer } from "./submitreducer";

const mainreducer= combineReducers({
    reducer,
    fetchreducer,
    submitreducer
})


export default mainreducer;