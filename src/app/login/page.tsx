"use client"
import FacebookLoginButton from '@/component/FacebookLogin';
import FacebookLogin from '@greatsumini/react-facebook-login';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FacebookShareButton, FacebookIcon } from 'react-share';


const App = () => {
    const router = useRouter();

    const handleFacebookLogin = () => {

        window.FB.login(function (response) {
            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ', response.authResponse.accessToken);

                fetch(`https://login-facebook-sdk.vercel.app/api/login?token=${response.authResponse.accessToken}`)
                    .then((responseUserCre: any) => {
                        console.log("Users Credential should be---+++", responseUserCre)
                    })

                FB.api('/me', function (response: any) {
                    console.log('User Id is ' + response.id + '.');
                    console.log('Good to see you, ' + response.name + '.');
                    router.push("/")
                });
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        });
    };

    return (
        <div>
            <h1>Welcome to Next.js with Facebook Login</h1>
            <button onClick={handleFacebookLogin}>Login with facebook</button>
        </div>
    )
}

export default App
