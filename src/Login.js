import React from 'react'
import "./Login.css"
import { Button } from '@mui/material';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    //useState hook is used to pull info from data layer
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        //sign in
        auth.signInWithPopup(provider)
        .then(result => {

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            }); 
        })
        .catch(error => alert(error.message ));
    };

  return (
    <div className="login">
        <div className="login__logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/900px-Facebook_f_logo_%282019%29.svg.png?20200820101156" 
            alt=""/>

            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png"
            alt=""/>
        </div>
        <Button type="submit" onClick={signIn}>
            Sign In
        </Button>



    </div>
  )
}

export default Login