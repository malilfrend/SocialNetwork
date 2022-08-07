import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from './dialogs-reducer'
import {friendsReducer} from './friends-reducer'


let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: 'It is my first post', likeCount: 15,},
                { id: 2, message: 'Hi, whats up', likeCount: 20,},
            ],
            newPostText: 'jopa',
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Leha'},
                {id: 2, name: 'Sanya'},
                {id: 3, name: 'Ira'},
                {id: 4, name: 'Dima'},
                {id: 5, name: 'Nikicha'},
                {id: 6, name: 'Roma'}
            ],
            messagesData: [
                {id: 1, text: 'Hi, whats up'},
                {id: 2, text: 'hi, its ok'},
                {id: 3, text: 'goodjob'}
            ],
            newMessageText: ''
        },
        friendsPage: {
            friendsNames: [
                {id: 1, name: 'Leha', avatar: 'https://cdn-icons-png.flaticon.com/512/53/53104.png'},
                {id: 2, name: 'Sanya', avatar: 'https://cdn-icons-png.flaticon.com/512/53/53104.png'},
                {id: 3, name: 'Ira', avatar: 'https://cdn-icons-png.flaticon.com/512/53/53104.png'},
                {id: 3, name: 'Ira', avatar: 'https://cdn-icons-png.flaticon.com/512/53/53104.png'},
                {id: 3, name: 'Ira', avatar: 'https://cdn-icons-png.flaticon.com/512/53/53104.png'},
                {id: 3, name: 'Ira', avatar: 'https://cdn-icons-png.flaticon.com/512/53/53104.png'},
            ]
        },
    },
    _callSubscriber() {

    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.friendsPage = friendsReducer(this._state.friendsPage, action)
        this._callSubscriber(this._state)
    }
}


export default store
