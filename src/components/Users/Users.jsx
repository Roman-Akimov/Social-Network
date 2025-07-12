import React from "react";
import s from "./Users.module.css"
import axios from "axios";

let Users = (props) => {

    if (props.users.length === 0){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        })
    }
    return <div>
        {
            props.users.map(u => <div className={s.body} key={u.id}>
                <span>
                    <div className="s.userAvatar">
                        <img src={u.photos.small !== null ? u.photos.small  : "https://aidlab.iyte.edu.tr/wp-content/uploads/sites/246/2021/06/no_photo-1024x1024.png"} alt="avatar"/>
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