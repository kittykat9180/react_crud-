import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
    let history = useHistory();
    const {id} = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
    });

    const {name, username, email} = user;
    const onInputChange = e => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put("http://localhost:3001/users/${id}", user);
        history.push('/');
    }

    const loadUser = async () => {
        const result = await axios.get("http://localhost:3001/users/${id}", user);
        setUser(result.data);
    };

    return (
        <div className="container">
            <div className="w-75 mx-auto border border-dark p-5 mt-3">
                <h2 className="text-center mb-4">Edit User</h2>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-med"
                            placeholder="Enter Name"
                            name="name"
                            value={name}
                            onChange={e => onInputChange(e)}
                        />
                        <div>
                            <input
                                type="text"
                                className="form-control form-control-med"
                                placeholder="Enter User Name"
                                name="username"
                                value={username}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                className="form-control form-control-med"
                                placeholder="Enter Email Address"
                                name="email"
                                value={email}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-info border border-dark">Edit User</button>
                </form>
            </div>
        </div>
    );
}
export default EditUser;