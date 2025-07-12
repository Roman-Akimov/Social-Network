import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {setUsersAC, toggleFollowAC} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        toggle: (userId) => {
            dispatch(toggleFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)