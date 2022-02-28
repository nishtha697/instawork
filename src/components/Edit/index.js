import React, {useState} from "react";
import {Link, useHistory, useLocation} from "react-router-dom";
import '../Add/index.css';
import {useDispatch} from "react-redux";

const Edit = () => {
    const location = useLocation();
    let user;
    if (location.state !== undefined) {
        user = location.state.user;
    }
    const [firstName, setFirstName] = useState(user.name.split(" ")[0]);
    const [lastName, setLastName] = useState(user.name.split(" ")[1]);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const [role, setRole] = useState(user.role);
    const dispatch = useDispatch();

    const editUserHandler = () => {
        debugger;
        dispatch({type: 'edit-user',
                     user: {...user, name: firstName + " " + lastName, email, phone, role}
                 });
    }

    const deleteUserHandler = () => {
        dispatch({type: 'delete-user', user});
    }


    return (
        <div>
            <Link to="/"><i className="fas fa-times icon mt-2"/></Link>
            <h1 className="pt-5">Edit a team member</h1>
            <p className="text">Edit contact info, location and role.</p>
            <hr/>
            <h5>Info</h5>
            <input className="form-control" id="first"
                   placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/><br/>
            <input className="form-control" id="last"
                   placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/><br/>
            <input type="email" className="form-control" id="email"
                   placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
            <input type="phone" className="form-control" id="phone"
                   placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)}/><br/>
            <h5>Role</h5>
            <div className="row border-bottom pt-2 pb-2">
                <label className="form-check-label col-11" htmlFor="regular">
                    Regular - Can't delete members
                </label>
                <div className="col-1">
                    <input className="form-check-input" type="radio" name="role"
                           id="regular" value="regular" checked={role !== "admin"}
                           onChange={(e) => setRole(e.target.value)}/>
                </div>
            </div>
            <div className="row border-bottom pt-2 pb-2">
                <label className="form-check-label col-11" htmlFor="admin">
                    Admin - Can delete members
                </label>
                <div className="col-1">
                    <input className="form-check-input" type="radio" name="role"
                           id="admin" value="admin" checked={role === "admin"} onChange={(e) => setRole(e.target.value)}/>
                </div>
            </div>
            <Link to="/"><button className="btn btn-primary delete" onClick={() => deleteUserHandler()}>Delete</button></Link>
            <Link to="/"><button className="btn btn-primary save" onClick={() => editUserHandler()}>Save</button></Link>
        </div>
    )
}

export default Edit;