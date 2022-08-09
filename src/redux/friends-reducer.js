let initialState = {
    friendsNames: [
        {id: 1, name: 'Leha', avatar: 'https://cdn-icons-png.flaticon.com/512/53/53104.png'},
        {id: 2, name: 'Sanya', avatar: 'https://cdn-icons-png.flaticon.com/512/53/53104.png'},
        {id: 3, name: 'Ira', avatar: 'https://cdn-icons-png.flaticon.com/512/53/53104.png'},
        {id: 4, name: 'Ira', avatar: 'https://cdn-icons-png.flaticon.com/512/53/53104.png'},
        {id: 5, name: 'Ira', avatar: 'https://cdn-icons-png.flaticon.com/512/53/53104.png'},
        {id: 6, name: 'Ira', avatar: 'https://cdn-icons-png.flaticon.com/512/53/53104.png'},
    ]
}

const friendsReducer = (state = initialState, action) => {
    return state
}

export {friendsReducer}