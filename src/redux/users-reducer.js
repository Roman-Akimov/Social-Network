const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialState = {
    users: [
        {id: 1, follower: false, fullName: "David", status: "Im a programmer", local:{city: "Samara", country: "Russia"}},
        {id: 1, follower: true, fullName: "John", status: "saller of people", local:{city: "New York", country: "USA"}},
        {id: 1, follower: false, fullName: "Kira", status: "Junior Dota player", local:{city: "Minsk", country: "Belarus"}},
    ]
};


const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case FOLLOW:
            let stateCopy = {
                ...state,
                //: [...state.users],
                users: state.users.map(u => u){
                    return  u
        }
            }
        case UNFOLLOW:
        default:
            return state
    }
}

export const followActionCreator = () => ({type: FOLLOW, UserId});
export const unfollowActionCreator = () => ({type: UNFOLLOW});
// export const updateNewPostActionCreator = (text) =>
//     ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default usersReducer();