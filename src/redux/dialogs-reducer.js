const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
    dialogs: [
        {id: 1, avatar: "https://avatars.githubusercontent.com/u/1133213?v=4", name: "Alex"},
        {
            id: 2,
            avatar: "https://avatars.mds.yandex.net/i?id=6f2fa2e29019048d55dc0de3cdd5ffd2_l-5350111-images-thumbs&n=13",
            name: "Rex"
        },
        {
            id: 3,
            avatar: "https://www.clipartmax.com/png/full/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png",
            name: "John"
        },
        {
            id: 4,
            avatar: "https://avatars.mds.yandex.net/i?id=41e7e53b6723e77c2040316a5886dca1_l-5287630-images-thumbs&n=13",
            name: "Roman"
        },
        {
            id: 5,
            avatar: "https://cdn0.iconfinder.com/data/icons/team-work-and-organization-2/128/78-1024.png",
            name: "Dendi"
        },
        {id: 6, avatar: "https://i.pinimg.com/originals/f4/f3/dd/f4f3dd7acfd64b16aa51027159a6f5e8.png", name: "Sergei"},
    ],
    messages: [
        {id: 1, message: "hi", ava: "https://avatars.githubusercontent.com/u/1133213?v=4", name: "user"},
        {
            id: 2,
            message: "hello",
            ava: "https://avatars.mds.yandex.net/i?id=6f2fa2e29019048d55dc0de3cdd5ffd2_l-5350111-images-thumbs&n=13",
            name: "other"
        },
        {id: 3, message: "how are u", ava: "https://avatars.githubusercontent.com/u/1133213?v=4", name: "user"},
        {
            id: 4,
            message: "fine thx",
            ava: "https://avatars.mds.yandex.net/i?id=6f2fa2e29019048d55dc0de3cdd5ffd2_l-5350111-images-thumbs&n=13",
            name: "other"
        },
    ],
    newMessagesText: "введите сообщение.."
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: state.messages.length + 1,
                message: state.newMessagesText,
                ava: "https://avatars.githubusercontent.com/u/1133213?v=4",
                name: "user"
            }

            return {
                ...state,
                newMessagesText: "",
                messages: [...state.messages, newMessage],
            };
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessagesText: action.newText
            }
        }
        default:
            return state;
    }
}


export const addNewMessageText = () => ({type: ADD_MESSAGE})
export const updateNewMessageText = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer;