import React, { useState } from 'react';
import './App.css';
import { Button, Divider, Input } from 'antd';

function PasswordReset() {
    // State variables
    const [email, setEmail] = useState('');
    return (
        <div>
            <div className="header">
            </div>
            <div className="container">
                <h2 className="heading">{'Reset Password!'}</h2>
                <Divider />
                <div className="form_wrapper">
                    <Input
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Please Enter Email"
                        size="large"
                        className="form_input"
                    />
                </div>
                <div className="form_buttons">
                    <Button
                        onClick={() => window.alert("Pressed")}
                        type="primary"
                        className="form_button"
                        color={'#208AEC'}
                        size="large"
                    >
                        Reset!
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default PasswordReset;
