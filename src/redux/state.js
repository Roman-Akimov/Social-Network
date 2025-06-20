import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        user:[
            {avatarUser: "https://www.pinclipart.com/picdir/middle/415-4151365_line-icon-mac-os-user-icon-clipart.png"}
        ],

        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are u?', likesCount: "12"},
                {id: 2, message: 'its mt first post!)', likesCount: "43"},
            ],
            newPostText: "введите текст.."
        },
        dialogsPage: {
            dialogs: [
                {id: 1, avatar: "https://avatars.githubusercontent.com/u/1133213?v=4",name: "Alex"},
                {id: 2, avatar: "https://avatars.mds.yandex.net/i?id=6f2fa2e29019048d55dc0de3cdd5ffd2_l-5350111-images-thumbs&n=13",name: "Rex"},
                {id: 3, avatar: "https://www.clipartmax.com/png/full/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png",name: "John"},
                {id: 4, avatar: "https://avatars.mds.yandex.net/i?id=41e7e53b6723e77c2040316a5886dca1_l-5287630-images-thumbs&n=13",name: "Roman"},
                {id: 5, avatar: "https://cdn0.iconfinder.com/data/icons/team-work-and-organization-2/128/78-1024.png",name: "Dendi"},
                {id: 6, avatar: "https://i.pinimg.com/originals/f4/f3/dd/f4f3dd7acfd64b16aa51027159a6f5e8.png",name: "Sergei"},
            ],
            messages: [
                {id: 1, message: "hi", ava: "https://avatars.githubusercontent.com/u/1133213?v=4", name: "user"},
                {id: 2, message: "hello", ava: "https://avatars.mds.yandex.net/i?id=6f2fa2e29019048d55dc0de3cdd5ffd2_l-5350111-images-thumbs&n=13", name: "other"},
                {id: 3, message: "how are u", ava: "https://avatars.githubusercontent.com/u/1133213?v=4", name: "user"},
                {id: 4, message: "fine thx", ava: "https://avatars.mds.yandex.net/i?id=6f2fa2e29019048d55dc0de3cdd5ffd2_l-5350111-images-thumbs&n=13", name: "other"},
            ],
            newMessagesText: "введите сообщение.."
        },
        sidebar: {
            friends: [
                {ava: "https://p1.zoon.ru/preview/GuEJ78Xw9NOUJjbw_AIIGw/2400x1500x85/1/4/4/original_57d8fec040c08815228cc1fa_6266b446e6f369.86812448.jpg", name: "Alex"},
                {ava: "https://p1.zoon.ru/preview/GuEJ78Xw9NOUJjbw_AIIGw/2400x1500x85/1/4/4/original_57d8fec040c08815228cc1fa_6266b446e6f369.86812448.jpg", name: "John"},
                {ava: "https://p1.zoon.ru/preview/GuEJ78Xw9NOUJjbw_AIIGw/2400x1500x85/1/4/4/original_57d8fec040c08815228cc1fa_6266b446e6f369.86812448.jpg", name: "Rex"},

            ]
        }
    },
    _callSubscriber(){
        console.log("State changed");
    },
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer; // (наблюдатель) паттерн
    },
    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

window.store = store;
export default store;