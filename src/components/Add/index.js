import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import './index.css';
import {useDispatch} from "react-redux";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const Add = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("");
    const dispatch = useDispatch();

    const addUserHandler = () => {
        const name = firstName + " " + lastName;
        if (name === "" || email === "" || phone=== "") {
            toast.error("Post saved.", {theme: "colored"})
        } else {
            dispatch({type: 'create-user',
                         user: {name: firstName + " " + lastName, email, phone, role}
                     });
        }
    }

    return (
        <div>
            <Link to="/"><i className="fas fa-times icon mt-2"/></Link>
            <h1 className="pt-5">Add a team member</h1>
            <p className="text">Set email, location and role.</p>
            <hr/>
            <h5>Info</h5>
            <input className="form-control" id="first"
                   placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/><br/>
            <input className="form-control" id="last"
                   placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/><br/>
            <input type="email" className="form-control" id="email"
                   placeholder="Email" onChange={(e) => setEmail(e.target.value)}/><br/>
            <input type="phone" className="form-control" id="phone"
                   placeholder="Phone number" onChange={(e) => setPhone(e.target.value)}/><br/>
            <h5>Role</h5>
            <div className="row border-bottom pt-2 pb-2">
                <label className={`form-check-label col-11 ${role !== "admin" ? "select" : ""}`}  htmlFor="regular">
                    Regular - Can't delete members
                </label>
                <div className="col-1">
                    <input className="form-check-input" type="radio" name="role"
                           id="regular" value="regular" defaultChecked
                           onChange={(e) => setRole(e.target.value)}/>
                </div>
            </div>
            <div className=" row border-bottom pt-2 pb-2">
                <label className={`form-check-label col-11 ${role === "admin" ? "select" : ""}`} htmlFor="admin">
                    Admin - Can delete members
                </label>
                <div className="col-1">
                    <input className="form-check-input" type="radio" name="role"
                           id="admin" value="admin" onChange={(e) => setRole(e.target.value)}/>
                </div>
            </div>
            <Link to="/"><button className="btn btn-primary save" onClick={() => addUserHandler()}>Save</button></Link>
        </div>
    )
}

export default Add;