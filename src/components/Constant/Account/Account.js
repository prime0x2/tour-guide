import React, { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import useAuth from '../../../hooks/useAuth';
import './Account.css'

const Account = () => {

    const [resetPass, setResetPass] = useState(false);
    const [register, setRegister] = useState(false);
    const { googleLogin, registerNewUser, loginEmailPass, resetPassword, error, setError } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();
    const redirect_uri = location.state?.from || '/';

    const name = useRef(null);
    const email = useRef(null);
    const pass = useRef(null);
    const pass2 = useRef(null);



    const handleGoogle = () => {
        setError("");
        googleLogin()
            .then(() => {
                navigate(redirect_uri);
            })
    }

    const handleLogin = () => {
        setError("");
        loginEmailPass(email.current.value, pass.current.value)
            .then((result) => {
                if (result?.user) {
                    navigate(redirect_uri);
                }
            })
    }

    const handleRegister = () => {
        setError("");
        if (pass.current.value.length < 6) {
            setError("Password Must Be 6 Character long");
            return;
        }
        if (pass.current.value !== pass2.current.value) {
            setError("Password did not match...!");
            return;
        }
        setError("");
        registerNewUser(email.current.value, pass.current.value, name.current.value)
            .then(() => {
                setRegister(false);
                alert('Register Successful...!');
            })
    }


    const handleResetPassword = () => {
        resetPassword(email.current.value)
            .then(() => {
                toast.success("Check your email.");
                setResetPass(false);
            })
    }


    return (
        <div className="account">
            <div className="account__container">
                <div className="account__header">
                    <h1 className="account__title">
                        {
                            resetPass ? "Reset Password" : register ? (
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

                <form onSubmit={(e) => { e.preventDefault(); resetPass ? handleResetPassword() : register ? handleRegister() : handleLogin() }} className="account__form">
                    {
                        !resetPass && (
                            register && (
                                <div className="account__input-group">
                                    <i className="fa-solid fa-user"></i>
                                    <input ref={name} type="text" placeholder="Your Name" required />
                                </div>
                            )
                        )
                    }

                    <div className="account__input-group">
                        <i className="fa-solid fa-envelope"></i>
                        <input ref={email} type="email" placeholder="Your Email" required />
                    </div>
                    {
                        !resetPass && (
                            <div className="account__input-group">
                                <i className="fa-solid fa-lock"></i>
                                <input ref={pass} type="password" placeholder="Your Password" autoComplete="true" required />
                            </div>
                        )
                    }

                    {
                        !resetPass && (
                            register && (
                                <div className="account__input-group">
                                    <i className="fa-solid fa-lock"></i>
                                    <input ref={pass2} type="password" placeholder="Confirm Password" autoComplete="true" required />
                                </div>
                            )
                        )
                    }

                    {
                        error && (
                            <div>
                                <p className="account__error">{error}</p>
                            </div>
                        )
                    }

                    <button className="btn-login" type="submit">
                        {
                            resetPass ? (
                                'Reset Password'
                            ) : (
                                register ? 'Sign Up' : 'Login'
                            )
                        }
                    </button>
                </form>

                {
                    !resetPass && (
                        <>
                            <p>Or</p>

                            <button className="btn-google" onClick={handleGoogle}>
                                <img src="/google.png" className="w-7" alt="" />
                                <span>Google</span>
                            </button>
                        </>
                    )
                }

                <div className="create__account">
                    {
                        resetPass ? (
                            <>
                                <p>
                                    <button onClick={() => { setError(""); setResetPass(!resetPass); setRegister(false) }}>Back To Login</button>
                                </p>
                            </>
                        ) : (
                            <>
                                <p>
                                    {register ? 'Already have an account? ' : 'Don\'t have an account? '}
                                    <button onClick={() => { setError(""); setRegister(!register) }}>{register ? 'Log In' : 'Sign Up'}</button>
                                </p>
                                <p>
                                    <button onClick={() => { setError(""); setResetPass(!resetPass) }}>{resetPass ? '' : 'Forgot Password?'}</button>
                                </p>
                            </>
                        )
                    }
                </div>
            </div>
            <ToastContainer />
        </div >
    );
};

export default Account;