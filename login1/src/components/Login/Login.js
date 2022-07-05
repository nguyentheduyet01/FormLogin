import React, { useRef, useState } from 'react';
import './Login.css';
import { BrowserRouter as Router, Route, Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });

    const registerTab = useRef(null);
    const loginTab = useRef(null);

    const switchTabs = (e, tab) => {
        if (tab === 'login') {
         
            registerTab.current.classList.remove('shiftToNeutralForm');
            loginTab.current.classList.remove('shiftToLeft');
        }
        if (tab === 'register') {
           
            registerTab.current.classList.add('shiftToNeutralForm');
            loginTab.current.classList.add('shiftToLeft');
        }
    };

    const registerDataChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: [e.target.value],
        });
    };

    const { name, email, password } = user;

    const registerSubmit = (e) => {
        e.preventDefault();
        const data = localStorage.getItem('user')
            ? JSON.parse(localStorage.getItem('user'))
            : [];

        console.log(findUser(email[0], data));
        if (findUser(email[0], data) >= 0) {
            alert('Email đã tồn tại');
        } else {
            const user = [
                ...data,
                {
                    name: name[0],
                    email: email[0],
                    password: password[0],
                },
            ];
            localStorage.setItem('user', JSON.stringify(user));
            alert('Đăng ký thành công');
        }
    };
    const navigate = useNavigate();
    const loginSubmit = (e) => {
        e.preventDefault();
        console.log(loginEmail);

        const data = localStorage.getItem('user')
            ? JSON.parse(localStorage.getItem('user'))
            : [];

        const userId = findUser(loginEmail, data);

        if (userId >= 0 ) {
            if (data[userId].password === loginPassword) {
               navigate('/home');
                // if(document.getElementById('login').textContent == "Login")
                // {
                //     alert(`Welcome ${data[userId].name}`);
                // document.getElementById('login').textContent = "Logout";

                // }
                // else
                // {
                //     document.getElementById('login').textContent = "Login";
                //     deleteUser(loginEmail,data);
                //     alert("Logout successfully");
                    
                // }
            } else {
                alert('Wrong email or password');
            }
        } else {
            alert('Email không tồn tại');
        }
    };
    const findUser = (email, data) => {
        let index = -1;
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].email === email) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    };

    return (   
            <div className="LoginSignUpContainer">
                <div className="LoginSignUpBox">
                    <div>
                        <div className="login_signUp_toggle">
                            <p onClick={(e) => switchTabs(e, 'login')}>LOGIN</p>
                            <p onClick={(e) => switchTabs(e, 'register')}>
                                REGISTER
                            </p>
                        </div>
                       
                    </div>
                    <form
                    
                        className="loginForm"
                        ref={loginTab}
                        onSubmit={loginSubmit}
                    >
                        <div className="loginEmail">
                            <input
                                type="email"
                                placeholder="Email"
                                required
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                            />
                        </div>
                        <div className="loginPassword">
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                value={loginPassword}
                                onChange={(e) =>
                                    setLoginPassword(e.target.value)
                                }
                            />
                        </div>
                        
                        <Link to='/home'>Forget Password ?</Link>
                        <button
                        id = "login"
                            type="submit"
                            className="loginBtn"
                            shape="round"
                        >Login</button>
                    </form>
                    <form
                        className="signUpForm"
                        ref={registerTab}
                        encType="multipart/form-data"
                        onSubmit={registerSubmit}
                    >
                        <div className="signUpName">
                            <input
                                type="text"
                                placeholder="Name"
                                required
                                name="name"
                                value={name}
                                onChange={registerDataChange}
                            />
                        </div>
                        <div className="signUpEmail">
                            <input
                                type="email"
                                placeholder="Email"
                                required
                                name="email"
                                value={email}
                                onChange={registerDataChange}
                            />
                        </div>
                        <div className="signUpPassword">
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                name="password"
                                value={password}
                                onChange={registerDataChange}
                            />
                        </div>

                        <button
                            type="submit"
                            className="signUpBtn"                   
                        >Register</button>
                    </form>
                </div>
            </div>
       
    );
};

export default Login;
