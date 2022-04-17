import React, { useState } from 'react';
import useFirebase from '../../../hooks/useFirebase';
import './Account.css'

const Account = () => {

    const [register, setRegister] = useState(false);

    const { user, googleLogin, logOut, registerNewUser, loginEmailPass, error } = useFirebase();


    const handleGoogle = () => {
        googleLogin()
    }

    const handleLogout = (params) => {
        logOut()
    }


    return (
        <div className="account">
            <div className="account__container">
                <div className="account__header">
                    <h1 className="account__title">
                        {
                            register ? (
                                <>
                                    Create <span>New</span> Account
                                </>
                            ) : (
                                <>
                                    Welcome, <span>Login</span> Here
                                </>
                            )
                        }
                    </h1>
                </div>

                <form className="account__form">
                    {
                        register && (
                            <div className="account__input-group">
                                <i class="fa-solid fa-user"></i>
                                <input type="text" placeholder="Your Name" />
                            </div>
                        )
                    }

                    <div className="account__input-group">
                        <i class="fa-solid fa-envelope"></i>
                        <input type="text" placeholder="Your Email" />
                    </div>
                    <div className="account__input-group">
                        <i class="fa-solid fa-lock"></i>
                        <input type="password" placeholder="Your Password" />
                    </div>

                    <button className="btn-login" type="submit">Login</button>
                </form>

                <p>Or</p>

                <button className="btn-google" onClick={handleGoogle}>
                    <img src="/google.png" className="w-7" alt="" />
                    <span>Google</span>
                </button>

                {
                    user && (
                        <button className="btn-google !mt-4" onClick={handleLogout}>
                            <span>Log Out</span>
                        </button>
                    )
                }

                <div className="create__account">
                    <p>{register ? 'Already have an account? ' : 'Don\'t have an account? '}
                        <button onClick={() => setRegister(!register)}>{register ? 'Log In' : 'Sign Up'}</button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Account;