import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { handleFbSignIn, handleGoogleSignIn, handleSignOut, initializeLoginFramework, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './loginManager';

function Login() {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } }

    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photoURL: '',
        error: '',
        success: false
    })

    initializeLoginFramework();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                setUser(res);
                setLoggedInUser(res);
                history.replace(from);
            })
    }

    const signOut = () => {
        handleSignOut()
            .then(res => {
                setUser(res);
                setLoggedInUser(res);
            })
    }

    const fbSignIn = () => {
        handleFbSignIn()
            .then(res => {
                setUser(res);
                setLoggedInUser(res);
                history.replace(from);

            })
    }
    const handleBlur = (e) => {
        let isFieldValid = true;
        console.log(e.target.name);
        console.log(e.target.value);

        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    setUser(res);
                    setLoggedInUser(res);
                    history.replace(from);
                })
        }

        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    setUser(res);
                    setLoggedInUser(res);
                    history.replace(from);
                })

        }
        e.preventDefault();

    }


    return (
        <div style={{ textAlign: 'center' }}>
            {
                user.isSignedIn === true ?
                    <button onClick={signOut}>Sign Out</button> :
                    <button onClick={googleSignIn}>Sign in</button>

            }
            <br />
            <button onClick={fbSignIn}>Sign in Using Facebook</button>
            {
                user.isSignedIn &&
                <div>
                    <p>Welcome, {user.name}</p>
                    <p>Your email: {user.email}</p>
                    <img src={user.photo} alt="" />
                </div>
            }

            <h1>Our own Authentication</h1>
            <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
            <label htmlFor="newUser">New User Sign Up</label>

            <form onSubmit={handleSubmit}>
                {
                    newUser && <input type="text" name="name" onBlur={handleBlur} id="" placeholder="Your name" required />
                }
                <br />
                <input type="text" name="email" onBlur={handleBlur} placeholder="Your email address" required />
                <br />
                <input type="password" name="password" onBlur={handleBlur} placeholder="Password" required />
                <br />
                <input type="submit" value={newUser ? "Sign Up" : "Sign In"} />
            </form>
            <p style={{ color: 'red' }}>{user.error}</p>
            {
                user.success &&
                <p style={{ color: 'green' }}>User  {newUser ? 'craeted' : 'Logged in'} successfully</p>
            }
        </div>
    );
}

export default Login;
