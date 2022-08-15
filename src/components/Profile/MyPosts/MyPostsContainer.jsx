import {addNewPostActionCreator} from '../../../redux/profile-reducer'
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
        addNewPost: (post) => {
            dispatch(addNewPostActionCreator(post))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer