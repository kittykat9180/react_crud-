import axios from "axios";
import { useHistory } from "react-router-dom";
import React, {useState} from "react";

const AddUser = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        name:"",
        username:"",
        email:""
    });
    const {name, username, email} = user;
    const onInputChange = e => {
        setUser({...user,[e.target.name]:e.target.value});
    };

    const onSubmit = async e => {
        console.log('the user', user);
        e.preventDefault();
        await axios.post("http://localhost:3001/users", user);
        history.push('/');
    }

    return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add User</h2>
                <form onSubmit={ onSubmit}>
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
                    <button type='submit' className="btn btn-info btn-block">Add User</button>
                </form>
            </div>
        </div>   
    )
};
export default AddUser;