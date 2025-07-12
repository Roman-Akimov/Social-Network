import React from "react";
import s from "./Users.module.css"
import axios from "axios";
let Users = (props) => {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        props.setUsers(response.data.items)
    })
    if (props.users.length === 0){

    }

    return <div>
        {
            props.users.map(u => <div className={s.body} key={u.id}>
                <span>
                    <div className="s.userAvatar">
                        <img src={u.photos.small !== null? u.photos.small : "https://i.taplink.st/a/0/a/8/c/a68eab.jpg?2"} alt="avatar"/>
                    </div>
                    <div>{
                        u.followed
                            ? (<button className={s.followed} onClick={() => { props.toggle(u.id) }}> Отписаться </button>)
                            : (<button className={s.unfollowed} onClick={() => { props.toggle(u.id) }}> Подписаться </button>)
                    }
                    </div>
                    <span>
                        <div>{u.name}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{/*u.location.countryName*/}</div><div>{/*u.location.cityName*/}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;