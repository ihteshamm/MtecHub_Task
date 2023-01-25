import React, { useState } from 'react';
import axios from "axios";

import './App.css';
import { Button, Divider, Input } from 'antd';



function SignUP() {
    // State variables
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function save() {
        window.alert("INSave");
        const userData = {
            username: this.username,
            email: this.email,
            password: this.password

        }
        axios
            .post("http://localhost:8080/api/users", userData)
            .then(res => window.alert("save!"))
            .catch(err => window.alert("Error!")
            );

    }

    return (
        <div>
            <div className="header">
            </div>
            <div className="container">
                <h2 className="heading">{'Sign UP!'}</h2>
                <Divider />
                <div className="form_wrapper">
                    <Input
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        placeholder="Username!"
                        size="large"
                        className="form_input"
                    />
                    <Input
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Email"
                        size="large"
                        className="form_input"
                    />
                    <Input
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Password"
                        size="large"
                        className="form_input"
                    />
                </div>
                <div className="form_buttons">
                    <button onclick="save()">Click me</button>
                    <Button
                        onClick={save()}
                        type="primary"
                        className="form_button"
                        color={'#208AEC'}
                        size="large"
                    >
                        SignUp
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default SignUP;
