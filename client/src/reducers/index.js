import {combineReducers} from "redux";

import posts from "./posts";

// call as function, then put object inside of it
// we only habe posts.. but this is good for scalability
export default combineReducers({
  posts,
});
