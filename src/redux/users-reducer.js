
const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    users: [
            {id: 1, userAvatar:"https://www.clipartmax.com/png/full/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png",
                followed: false, fullName: "David", status: "Im a programmer", location:{cityName: "Samara", countryName: "Russia"}},
            {id: 2, userAvatar:"https://www.clipartmax.com/png/full/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png",
                followed: true, fullName: "John", status: "saller of people", location:{cityName: "New York", countryName: "USA"}},
            {id: 3, userAvatar:"https://www.clipartmax.com/png/full/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png",
                followed: false, fullName: "Kira", status: "Junior Dota player", location:{cityName: "Minsk", countryName: "Belarus"}},
    ]
};


const usersReducer = (state = initialState, action = {}) => {
    switch (action.type){
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(u =>
                    u.id === action.userId
                        ? {...u, followed: !u.followed}
                        : u
                )
            }
        case SET_USERS: {
            return {
                ...state,
                users: [/*...state.users*/, ...action.users]
            }
        }

        default:
            return state
    }
}

export const toggleFollowAC = (userId) => ({type: TOGGLE_FOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;