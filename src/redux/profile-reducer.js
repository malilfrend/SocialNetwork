import {profileAPI} from "../api/api";

const ADD_POST = 'social_network/profile/ADD-POST'
const DELETE_POST = 'social_network/profile/DELETE_POST'
const SER_USER_PROFILE = 'social_network/profile/SET-USER-PROFILE'
const SET_USER_STATUS = 'social_network/profile/SET_USER_STATUS'
const TOGGLE_IS_FETCHING ='social_network/profile/TOGGLE_IS_FETCHING'

let initialState = {
    postsData: [
        { id: 1, message: 'It is my first post', likeCount: 15,},
        { id: 2, message: 'Hi, whats up', likeCount: 20,},
    ],
    profile: null,
    status: '',
    isFetching: false,
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
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id !== action.postId)
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
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
const deletePostActionCreator = (postId) => {
    return {
        type: DELETE_POST,
        postId
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
const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}
// thunkCreators
export const getUserProfileThunk = (userId) => async (dispatch) => {
    let data = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(data))
}


export const setUserStatusThunk = (userId) => async (dispatch) => {
    let status = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(status))
}


export const updateUserStatusThunk = (status) => async (dispatch) => {
    let r = await profileAPI.updateUserStatus(status)
    if (r.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
    if (r.data.resultCode !== 0) {
        dispatch(setUserStatus('Error! Try another status'))
    }
}


export {profileReducer, addNewPostActionCreator, deletePostActionCreator, setUserProfile}