import {addNewPostActionCreator} from '../../../redux/profile-reducer'
import MyPosts from "./MyPosts"
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage?.postsData,
        newPostText: state.profilePage.newPostText,
        photo: state.profilePage.profile?.photos?.small
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: (title, body) => {
            dispatch(addNewPostActionCreator(title, body))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer