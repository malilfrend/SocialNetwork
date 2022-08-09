import {addNewPostActionCreator, onPostChangeActionCreator} from '../../../redux/profile-reducer'
import MyPosts from "./MyPosts"
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: () => {
            dispatch(addNewPostActionCreator())
        },
        updateNewPostText: (inputText) => {
            dispatch(onPostChangeActionCreator(inputText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer