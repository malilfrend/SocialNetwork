import {profileAPI} from "../api/api";
const SET_POSTS = 'social_network/profile/SET_POSTS'
const ADD_POST = 'social_network/profile/ADD-POST'
const DELETE_POST = 'social_network/profile/DELETE_POST'
const SER_USER_PROFILE = 'social_network/profile/SET-USER-PROFILE'
const SET_USER_STATUS = 'social_network/profile/SET_USER_STATUS'
const TOGGLE_IS_FETCHING ='social_network/profile/TOGGLE_IS_FETCHING'
const UPDATE_USER_PHOTO = 'social_network/profile/UPDATE_USER_PHOTO'
const UPDATE_USER_INFO = 'social_network/profile/UPDATE_USER_INFO'

let initialState = {
    postsData: null,
    profile: null,
    status: '',
    isFetching: false,
}

const profileReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 4,
                title: action.title,
                body: action.body,
            }
            return {
                ...state,
                postsData: [newPost, ...state.postsData]
            }
        case SET_POSTS:
            return {
                ...state,
                postsData: [...action.postsData]
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
                profile: {...action.profile, contacts: {...action.profile.contacts}}
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        case UPDATE_USER_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        case UPDATE_USER_INFO:
            return {
                ...state,
                profile: {...state.profile, ...action.info}
            }
        default:
            return state
    }
}
// actionCreators
const setPostsActionCreator = (postsData) => {
    return {
        type: SET_POSTS,
        postsData
    }
}
const addNewPostActionCreator = (title, body) => {
    return {
        type: ADD_POST,
        title,
        body
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
const updateUserPhoto = (photos) => {
    return {
        type: UPDATE_USER_PHOTO,
        photos
    }
}
const updateUserInfo = (info) => {
    return {
        type: UPDATE_USER_INFO,
        info
    }
}
// thunkCreators
export const getUserProfileThunk = (userId) => async (dispatch) => {
    let data = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(data))
}
export const getUserPosts = () => async (dispatch) => {
    let posts = await profileAPI.getUserPosts()
    dispatch(setPostsActionCreator(posts.reverse()))
}
export const saveUserPhoto = (photo) => async (dispatch) => {
    let data = await profileAPI.uploadUserPhoto(photo)
    
    if (data.resultCode === 0) {
        dispatch(updateUserPhoto(data.data.photos))
    }
}
export const setUserStatusThunk = (userId) => async (dispatch) => {
    let status = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(status))
}


export const updateUserStatusThunk = (status) => async (dispatch) => {
    try {
        let data = await profileAPI.updateUserStatus(status)
        if (data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
        if (data.resultCode !== 0) {
            dispatch(setUserStatus('Error! Try another status'))
        }
    }
    catch (error) {
        alert("something wrong")
    }
    
}
export const updateUserInfoThunk = (info, setStatus, setSubmitting) => async (dispatch) => {
    let data = await  profileAPI.updateUserInfo(info)
    if(data.resultCode === 0) {
        dispatch(updateUserInfo(info))
    }
    if (data.resultCode !== 0) {
        setStatus(data.messages)
    }
    setSubmitting(false)
}


export {profileReducer, addNewPostActionCreator, deletePostActionCreator, setUserProfile, setUserStatus}