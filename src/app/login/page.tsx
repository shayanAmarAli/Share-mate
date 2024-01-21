"use client"
import FacebookLoginButton from '@/component/FacebookLogin';
import FacebookLogin from '@greatsumini/react-facebook-login';
import axios from 'axios';
import { useState } from 'react';
import { FacebookShareButton, FacebookIcon } from 'react-share';


const App = () => {
    const [userAccessToken, setUserAccessToken] = useState<any>(''); // State to store user access token
    const [userId, setUserId] = useState<any>();

    const handleFacebookLogin = () => {
        window.FB.login(function (response) {
            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ', response.authResponse.accessToken);
                setUserAccessToken(response.authResponse.accessToken)

                fetch(`https://login-facebook-sdk.vercel.app/api/login?token=${response.authResponse.accessToken}`)
                    .then((responseUserCre: any) => {
                        console.log("Users Credential should be---+++", responseUserCre)
                    })

                FB.api('/me', function (response: any) {
                    setUserId(response.id)
                    console.log('User Id is ' + response.id + '.');
                    console.log('Good to see you, ' + response.name + '.');
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
            <h1>Facebook Share Example</h1>
            <FacebookShareButton 
            url={"https://www.facebook.com/syedahsanshah.sherazi.9/posts/pfbid0rf47n5WNh2t5AXVidr4kKV13tjoru5AM3UAC1eyyAG8gVa3Yxub8mqaMaFDdoi16l?comment_id=349529657939772&notif_id=1705853557311130&notif_t=comment_mention&ref=notif"}
            // quote={"フェイスブックはタイトルが付けれるようです"}
            hashtag={"#hashtag"}
            // description={"aiueo"}
            className="Demo__some-network__share-button"
            >
                <FacebookIcon size={32} round />
            </FacebookShareButton>
        </div>
    )
}

export default App
