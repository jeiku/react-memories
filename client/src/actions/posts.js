import * as api from "../api";

// Action Creators
// functions that return actions

// these are asynchronous, so we use redux THUNK
// allows to specify additional arrow function... async(dispatch) =>
// now have access to dispatch
export const getPosts = () => async (dispatch) => {
  // in the response, we always have a data object, so destructured data
  // which is returning from backend
  // data represents the posts
  try {
    const {data} = await api.fetchPosts();
    // can just dispatch right here
    dispatch({type: "FETCH_ALL", payload: data});

    // Now successfully using redux to pass action from data form backend
  } catch (error) {
    console.log(error);
  }

  // instead of returning the action, with redux thunk
  // have to dispatch action
  // const action = {type: "FETCH_ALL", payload: []};
  // dispatch(action);
};

export const createPost = (post) => async (dispatch) => {
  try {
    // destructure data from response
    // making API post request to our backend server, sending a post
    const {data} = await api.createPost(post);
    dispatch({type: "CREATE", paylod: data});
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const {data} = await api.updatePost(id, post);

    dispatch({type: "UPDATE", payload: data});
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({type: "DELETE", payload: id});
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const {data} = await api.likePost(id);

    dispatch({type: "LIKE", payload: data});
  } catch (error) {
    console.log(error);
  }
};
