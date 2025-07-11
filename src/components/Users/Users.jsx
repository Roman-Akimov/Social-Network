import React from "react";
import s from "./Users.module.css"
let Users = (props) => {

    if (props.users.length === 0){
        props.setUsers([
            {id: 1, userAvatar:"https://www.clipartmax.com/png/full/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png",
                follow: false, fullName: "David", status: "Im a programmer", location:{cityName: "Samara", countryName: "Russia"}},
            {id: 2, userAvatar:"https://www.clipartmax.com/png/full/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png",
                follow: true, fullName: "John", status: "saller of people", location:{cityName: "New York", countryName: "USA"}},
            {id: 3, userAvatar:"https://www.clipartmax.com/png/full/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png",
                follow: false, fullName: "Kira", status: "Junior Dota player", location:{cityName: "Minsk", countryName: "Belarus"}},])
    }

    return <div>
        {
            props.users.map(u => <div className={s.body} key={u.id}>
                <span>
                    <div className="s.userAvatar">
                        <img src={u.userAvatar} alt="avatar"/>
                    </div>
                    <div>{
                        u.follow
                            ? (<button className={s.follow} onClick={() => { props.toggle(u.id) }}> Отписаться </button>)
                            : (<button className={s.unfollow} onClick={() => { props.toggle(u.id) }}> Подписаться </button>)
                    }
                    </div>
                    <span>
                        <div>{u.fullName}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.countryName}</div><div>{u.location.cityName}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;