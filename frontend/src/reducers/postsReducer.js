// A Reducer is a function that accepts two parameters: state(which must always equal to something so at least an empty array []) and action
// Basically we say that for example, if the action.type === 'FETCH_ALL, then we will return something. The logic is if THIS is the action, then return THAT.
// We can rename the state to posts since we are creating a posts reducer but remember it represents the state

export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload]; // We send over an array of posts, consisting of all the posts that it already contains (...posts) + the new Post, stored in the action.payload

        default:
            return posts
    }
}