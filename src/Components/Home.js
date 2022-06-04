import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get('http://localhost:3001/users');
        setUsers(result.data);
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3001/users/${id}`);
        loadUser();
    }

    return(
        <table className="table container">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
               {users.map((user, index) => (
                   <tr>
                       <th scope="row">{index +1} </th>
                       <td>{user.name}</td>
                       <td>{user.username}</td>
                       <td>{user.email}</td>
                       <td>
                           <Link className="btn btn-outline-info btn- btn-sm m-1" to={`/edituser/${user.id}`}>Edit</Link>
                           <Link className="btn btn-outline-danger btn-sm m-1" onClick={() => (deleteUser)}>Delete</Link>
                       </td>
                   </tr>
               ))}
            </tbody>
        </table>
    );
}

export default Home;