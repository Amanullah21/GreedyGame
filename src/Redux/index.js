import {  createStore } from "redux";

import {reducer} from "./InitState/reducer";

// const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(reducer)