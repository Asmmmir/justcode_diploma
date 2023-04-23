import { legacy_createStore as createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import {rootReducer} from "./reducers";



let store = createStore(rootReducer, devToolsEnhancer());

export default store;
