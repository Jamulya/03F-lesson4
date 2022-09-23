import { combineReducers } from "redux";
import tasks from "./tasks";
import users from "./users";



const rootReduer = () => combineReducers({
    tasks,
    users
})

export default rootReduer;