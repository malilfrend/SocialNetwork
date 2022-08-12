import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SER_USER_PROFILE = 'SET-USER-PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'

let initialState = {
    postsData: [
        { id: 1, message: 'It is my first post', likeCount: 15,},
        { id: 2, message: 'Hi, whats up', likeCount: 20,},
    ],
    newPostText: '',
    profile: null,
    status: null,
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
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}
// actionCreators
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
const setUserStatus = (status) => {
    return {
        type: SET_USER_STATUS,
        status
    }
}
// thunkCreators
export const getUserProfileThunk = (userId) => {
    return (
        (dispatch) => {
            usersAPI.getUserProfile(userId)
                .then(data => {
                    dispatch(setUserProfile(data))
                })
        }
    )
}
export const setUserStatusThunk = (userId) => {
    return (
        (dispatch) => {
            usersAPI.getUserStatus(userId)
                .then(status => {
                    dispatch(setUserStatus(status))
                })
        }
    )
}
export {profileReducer, addNewPostActionCreator, onPostChangeActionCreator, setUserProfile}