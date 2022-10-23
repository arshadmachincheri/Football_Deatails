import { combineReducers } from "redux";
import { teamReducer } from "./footballreducer";


export const rootReducer = combineReducers({
  teamsReducer: teamReducer,

});