// prettier-ignore
export default (posts = [], action) => {

  switch (action.type) {

    case "FETCH_ALL":
      return action.payload;

    case "CREATE":
      return [ ...posts, action.payload];

    case "UPDATE":
      // go through every post
      // find the post that matches the ID we got from the payload
      // if it matches, thats the post we want to update, so send new payload post
      return posts.map((post) => post._id == action.payload._id ? action.payload : post);

    default:
      return posts;
  }
};
