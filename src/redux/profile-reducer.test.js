import {addNewPostActionCreator, deletePostActionCreator, profileReducer} from "./profile-reducer";
let state = {
	postsData: [
		{ id: 1, message: 'It is my first post', likeCount: 15,},
		{ id: 2, message: 'Hi, whats up', likeCount: 20,},
	]
}
it('new post should be added', () => {
	let action = addNewPostActionCreator('Hi, I\'m Alex')
	let newState = profileReducer(state, action)
	
	expect(newState.postsData.length).toBe(3)
	expect(newState.postsData[2].message).toBe('Hi, I\'m Alex')
})
it('after deleting post, length should be decrement', () => {
	let action = deletePostActionCreator(1)
	
	let newState = profileReducer(state, action)
	
	expect(newState.postsData.length).toBe(1)
})
it('after deleting post with incorrect id, length should not change', () => {
	let action = deletePostActionCreator(1000)
	
	let newState = profileReducer(state, action)
	
	expect(newState.postsData.length).toBe(2)
})
