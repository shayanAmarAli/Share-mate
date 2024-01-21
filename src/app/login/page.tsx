"use client"
import FacebookLogin from '@greatsumini/react-facebook-login';

const App = () => {
    return (
        <div>
            <FacebookLogin
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
            />
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