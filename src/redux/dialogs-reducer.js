const ADD_MESSAGE = 'social_network/dialogs/ADD-MESSAGE';

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
}

const dialogsReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 4,
                text: action.newMessage
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage ]
            }
        default:
            return state
    }
}

const addNewMessageActionCreator = (newMessage) => {
    return {
        type: ADD_MESSAGE,
        newMessage
    }
}

export {dialogsReducer, addNewMessageActionCreator}