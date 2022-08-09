const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SER_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = {
    postsData: [
        { id: 1, message: 'It is my first post', likeCount: 15,},
        { id: 2, message: 'Hi, whats up', likeCount: 20,},
    ],
    newPostText: '',
    profile: null,
}

const profileReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 3,
                message: state.newPostText,
                likeCount: 0,
            }
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, newPost]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SER_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}

const addNewPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
}
const onPostChangeActionCreator = (inputText) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: inputText,
    }
}
const setUserProfile = (profile) => {
    return {
        type: SER_USER_PROFILE,
        profile
    }
}

export {profileReducer, addNewPostActionCreator, onPostChangeActionCreator, setUserProfile}