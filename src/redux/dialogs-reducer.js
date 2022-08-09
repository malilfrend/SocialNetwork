const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 4,
                text: state.newMessageText
            }
            return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, newMessage ]
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText,
            }
        default:
            return state
    }
}

const addNewMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE,
    }
}

const updateMessageTextActionCreator = (textAreaText) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: textAreaText,
    }
}

export {dialogsReducer, addNewMessageActionCreator, updateMessageTextActionCreator}