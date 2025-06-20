const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessagesText,
                ava: "https://avatars.githubusercontent.com/u/1133213?v=4",
                name: "user"
            }
            state.messages.push(newMessage);
            state.newMessagesText = "";
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessagesText = action.newText;
            return state;

        default:
            return state;
    }
}


export const addNewMessageText = () => ({type: ADD_MESSAGE})
export const updateNewMessageText = (text) => (
    {type: UPDATE_NEW_MESSAGE_TEXT, newText: text}
)

export default dialogsReducer;