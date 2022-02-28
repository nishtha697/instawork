import React from "react";
import {Link} from "react-router-dom";

const ListItem = ({user}) => {
    return (
        <div className="list-group-item pt-3 pb-3 borderless border-top" key={user.email}>
            <Link
                classname="user-item"
                to={{
                    pathname: `/edit`,
                    state: { user: user },
                }}
            ><div className="row">
                <div className="col-2 col-sm-2 col-lg-1">
                    <i className="fas fa-user-circle"></i>
                </div>
                <div className="col-10 col-sm-10 col-lg-11">
                    <span className="username">{user.name}  </span>
                    {user.role === "admin" ? <span className="username">(admin)</span> : ""}
                    <div className="text">{user.phone}</div>
                    <div className="text">{user.email}</div>
                </div>
            </div></Link>
        </div>
    )
}

export default ListItem;