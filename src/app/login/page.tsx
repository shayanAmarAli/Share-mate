"use client"
import { useRouter } from "next/navigation";
const App = () => {
    const router = useRouter()
    const handleFacebookLogin = () => {
        window.FB.login(function (response) {
            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ', response.authResponse.accessToken);

                fetch(`https://login-facebook-sdk.vercel.app/api/login?token=${response.authResponse.accessToken}`)
                    .then((responseUserCre: any) => {
                        console.log("Users Credential should be---+++", responseUserCre)
                    })

                FB.api('/me', function (response: any) {
                    router.push("/")
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
        </div>
    )
}

export default App
