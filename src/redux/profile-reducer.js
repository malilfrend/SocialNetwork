import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const SER_USER_PROFILE = 'SET-USER-PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'

let initialState = {
    postsData: [
        { id: 1, message: 'It is my first post', likeCount: 15,},
        { id: 2, message: 'Hi, whats up', likeCount: 20,},
    ],
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 3,
                message: action.post,
                likeCount: 0,
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost]
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
const addNewPostActionCreator = (post) => {
    return {
        type: ADD_POST,
        post
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
            profileAPI.getUserProfile(userId)
                .then(data => {
                    dispatch(setUserProfile(data))
                })
        }
    )
}
export const setUserStatusThunk = (userId) => {
    return (
        (dispatch) => {
            profileAPI.getUserStatus(userId)
                .then(status => {
                    dispatch(setUserStatus(status))
                })
        }
    )
}
export const updateUserStatusThunk = (status) => {
    return (
        (dispatch) => {
            profileAPI.updateUserStatus(status)
                .then(r => {
                    if(r.data.resultCode == 0) {
                        dispatch(setUserStatus(status))
                    }
                    if (r.data.resultCode != 0) {
                        dispatch(setUserStatus('Error! Try another status'))
                    }
                })
        }
    )
}
export {profileReducer, addNewPostActionCreator, setUserProfile}