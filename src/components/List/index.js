import React from "react";
import './index.css';
import {Link} from "react-router-dom";
import ListItem from "./ListItem";
import {useSelector} from "react-redux";

const List = () => {
    const userData = (state) => state.user;
    const users = useSelector(userData);
    debugger;
    return (
        <div>
            <Link to="/add"><i className="fas fa-plus icon mt-2"/></Link>
            <h1 className="pt-5">Team members</h1>
            <p className="text">You have {Object.keys(users).length} team members.</p>
            <div className="list-group mt-5 mb-5 border-bottom">
                {
                    users.map(user => {
                        return <ListItem user={user}/>
                    })
                }

            </div>
        </div>
    )
}

export default List;