import  axios  from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const AddUser = () => {

    let navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    const {name,username,email,phone,website} = user;

    const onInputChange = event =>{
        // console.log(event.target.value);
        setUser({...user,[event.target.name]:event.target.value})
        // console.log(user)
    };

    const onSubmit = async event =>{
        event.preventDefault();
        await axios.post("http://localhost:3001/users", user);
        navigate('/');
    };

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add A User</h2>
                <form  onSubmit={event =>onSubmit(event)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Name"
                            name="name"
                            value={name}
                            onChange={event => onInputChange(event)}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Username"
                            name="username"
                            value={username}
                            onChange={event => onInputChange(event)}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter Your E-mail Address"
                            name="email"
                            value={email}
                            onChange={event => onInputChange(event)}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Phone Number"
                            name="phone"
                            value={phone}
                            onChange={event => onInputChange(event)}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Website Name"
                            name="website" 
                            value={website}
                            onChange={event => onInputChange(event)}
                            />
                    </div>
                    <br />
                    <button className="btn btn-primary btn-block" style={{ width: "880px" }}>Add User</button>
                </form>
            </div>
        </div>
    )
};

export default AddUser;