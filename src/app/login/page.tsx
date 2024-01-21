"use client"
import FacebookLoginButton from '@/component/FacebookLogin';
import FacebookLogin from '@greatsumini/react-facebook-login';
import axios from 'axios';
import { useState } from 'react';
import { FacebookShareButton, FacebookIcon } from 'react-share';


const App = () => {
    const [userAccessToken, setUserAccessToken] = useState<any>(''); // State to store user access token
    const [userId, setUserId] = useState<any>();
    // const [message, setMessage] = useState<string>('Hello, this is my post!');

    const handleFacebookLogin = () => {
        window.FB.login(function (response) {
            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ', response.authResponse.accessToken);
                setUserAccessToken(response.authResponse.accessToken)
                // fetch(`https://graph.facebook.com/USER-ID?access_token=${response.authResponse.accessToken}`)
                fetch(`https://login-facebook-sdk.vercel.app/api/login?token=${response.authResponse.accessToken}`)
                    .then((responseUserCre: any) => {
                        console.log("Users Credential should be---+++", responseUserCre)
                    })

                FB.api('/me', function (response: any) {
                    setUserId(response.userId)
                    console.log('Good to see you, ' + response + '.');
                    console.log('Good to see you, ' + response.userId + '.');
                    console.log('Good to see you, ' + response.name + '.');
                });
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        });
    };

    const handlePostToTimeline = async () => {
        const message = 'Hello, this is my post!';

        try {
            // /v18.0/{user-id}/posts
            const response = await axios.post(
                `https://login-facebook-sdk.vercel.app/api/login`, {
                body: JSON.stringify({
                    userAccessToken: userAccessToken,
                    message: message
                })
            }
                // `https://graph.facebook.com/v13.0/me/feed?message=${message}&access_token=${userAccessToken}`
            );

            console.log('Post successful:', response.data);
        } catch (error: any) {
            console.error('Error posting to timeline:', error.response?.data || error.message);
        }
    };

    const handleFacebookPosting = async () => {
        try {
            // /v18.0/{user-id}/posts
            const response = await axios.post(
                `https://login-facebook-sdk.vercel.app/v18.0/${userId}/posts`);

            console.log('Post successful:', response.data);
        } catch (error: any) {
            console.error('Error posting to timeline:', error.response?.data || error.message);
        }
    }
    const title: any = 'Your Share Title';

    return (
        <div>
            <h1>Welcome to Next.js with Facebook Login</h1>
            <button onClick={handleFacebookLogin}>Login with facebook</button>
            <button onClick={handlePostToTimeline}>Post to Timeline</button>
            <button onClick={handleFacebookPosting}></button>
            <h1>Facebook Share Example</h1>
            <FacebookShareButton 
            url={"https://peing.net/ja/"}
            // quote={"フェイスブックはタイトルが付けれるようです"}
            hashtag={"#hashtag"}
            // description={"aiueo"}
            className="Demo__some-network__share-button"
            >
                <FacebookIcon size={32} round />
            </FacebookShareButton>

            {/* <FacebookLoginButton onLogin={handleFacebookLogin} /> */}
            {/* <FacebookLogin
                appId="300766279082840"
                onSuccess={(response) => {
                    console.log('Login Success!', response);
                }}
                onFail={(error) => {
                    console.log('Login Failed!', error);
                }}
                onProfileSuccess={(response) => {
                    console.log('Get Profile Success!', response);
                }}
            /> */}
            {/* < FacebookLogin
                appId="300766279082840"
                style={{
                    backgroundColor: '#4267b2',
                    color: '#fff',
                    fontSize: '16px',
                    padding: '12px 24px',
                    border: 'none',
                    borderRadius: '4px',
                }}
            /> */}
        </div>
    )
}

export default App


//     // default


//     // custom style
//     < FacebookLogin
// appId = "1088597931155576"
// style = {{
//     backgroundColor: '#4267b2',
//         color: '#fff',
//             fontSize: '16px',
//                 padding: '12px 24px',
//                     border: 'none',
//                         borderRadius: '4px',
//   }}
// />

//     // custom render function
//     < FacebookLogin
// appId = "1088597931155576"
// onSuccess = {(response) => {
//     console.log('Login Success!', response);
// }}
// onFail = {(error) => {
//     console.log('Login Failed!', error);
// }}
// onProfileSuccess = {(response) => {
//     console.log('Get Profile Success!', response);
// }}
// render = {({ onClick, logout }) => (
//     <CustomComponent onClick={onClick} onLogoutClick={logout} />
// )}
// />

//     // custom params, options
//     < FacebookLogin
// appId = "1088597931155576"
// useRedirect
// initParams = {{
//     version: 'v10.0',
//         xfbml: true,
//   }}
// dialogParams = {{
//     response_type: 'token',
//   }}
// loginOptions = {{
//     return_scopes: true,
//   }}
// />