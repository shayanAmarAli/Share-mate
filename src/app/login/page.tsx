// "use client"
// import FacebookLoginButton from '@/component/FacebookLogin';
// import FacebookLogin from '@greatsumini/react-facebook-login';

// const App = () => {
//     const handleFacebookLogin = async () => {
//         window.FB.login(async (response: any) => {
//             if (response.authResponse) {
//                 console.log('Welcome!  Fetching your information.... ');
//                 FB.api('/me', function (response: any) {
//                     console.log('Good to see you, ' + response.name + '.');
//                 });
//                 // try {
//                 //     fetch(`https://login-facebook-sdk.vercel.app/api/login?token=${response.authResponse.accessToken}`)

//                 // } catch (error) {
//                 //     console.error(error)
//                 // }
//             } else {
//                 console.log('User cancelled login or did not fully authorize.');
//             }
//         }, {
//             scope: "public_profile"
//         })
//         // You can handle the access token as needed (e.g., send it to your server for authentication).
//     };
//     return (
//         <div>
//             <h1>Welcome to Next.js with Facebook Login</h1>
//             <button onClick={handleFacebookLogin}>Login with facebook</button>
//             {/* <FacebookLoginButton onLogin={handleFacebookLogin} /> */}
//             {/* <FacebookLogin
//                 appId="300766279082840"
//                 onSuccess={(response) => {
//                     console.log('Login Success!', response);
//                 }}
//                 onFail={(error) => {
//                     console.log('Login Failed!', error);
//                 }}
//                 onProfileSuccess={(response) => {
//                     console.log('Get Profile Success!', response);
//                 }}
//             /> */}
//             {/* < FacebookLogin
//                 appId="300766279082840"
//                 style={{
//                     backgroundColor: '#4267b2',
//                     color: '#fff',
//                     fontSize: '16px',
//                     padding: '12px 24px',
//                     border: 'none',
//                     borderRadius: '4px',
//                 }}
//             /> */}
//         </div>
//     )
// }

// export default App


// //     // default


// //     // custom style
// //     < FacebookLogin
// // appId = "1088597931155576"
// // style = {{
// //     backgroundColor: '#4267b2',
// //         color: '#fff',
// //             fontSize: '16px',
// //                 padding: '12px 24px',
// //                     border: 'none',
// //                         borderRadius: '4px',
// //   }}
// // />

// //     // custom render function
// //     < FacebookLogin
// // appId = "1088597931155576"
// // onSuccess = {(response) => {
// //     console.log('Login Success!', response);
// // }}
// // onFail = {(error) => {
// //     console.log('Login Failed!', error);
// // }}
// // onProfileSuccess = {(response) => {
// //     console.log('Get Profile Success!', response);
// // }}
// // render = {({ onClick, logout }) => (
// //     <CustomComponent onClick={onClick} onLogoutClick={logout} />
// // )}
// // />

// //     // custom params, options
// //     < FacebookLogin
// // appId = "1088597931155576"
// // useRedirect
// // initParams = {{
// //     version: 'v10.0',
// //         xfbml: true,
// //   }}
// // dialogParams = {{
// //     response_type: 'token',
// //   }}
// // loginOptions = {{
// //     return_scopes: true,
// //   }}
// // />

"use client"
import { useEffect } from 'react';

const App = () => {
    const handleFacebookLogin = async () => {
        window.FB.login(async (response: any) => {
            if (response.authResponse) {
                console.log('Welcome! Fetching your information.... ');

                // Fetch user information
                window.FB.api('/me', async (userResponse: any) => {
                    console.log('Good to see you, ' + userResponse.name + '.');

                    // Access the access_token
                    const accessToken = response.authResponse.accessToken;
                    console.log("Acces Token You Got Is---+++", accessToken)

                    // Send the access_token to your server for further processing if needed
                    try {
                        const serverResponse = await fetch(`https://login-facebook-sdk.vercel.app/api/login?token=${accessToken}`);
                        const serverData = await serverResponse.json();
                        console.log('Server Response:', serverData);
                    } catch (error) {
                        console.error('Error sending access_token to server:', error);
                    }
                });
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        }, {
            scope: 'public_profile',
        });
    };

    return (
        <div>
            <h1>Welcome to Next.js with Facebook Login</h1>
            <button onClick={handleFacebookLogin}>Login with Facebook</button>
        </div>
    );
};

export default App;
