const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 0, message: "hello", like: "5"},
        {id: 1, message: "how are you?", like: "0"}
    ],
    text: ''
};


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                message: state.text, like: "0"
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                text: ''
            }
            // stateCopy.posts = [...state.posts];
            // stateCopy.posts.push(newPost);
            // stateCopy.text = '';
            // return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                text: action.newText
            }
            // stateCopy.text = action.newText;
            // return stateCopy;
        }
        default:
            return state;

    }

}

export const addPostActionCreator = () => ({type: ADD_POST})

export const addTextChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})


export default profileReducer;


