"use client"
import { FC, useEffect } from 'react';

interface FacebookLoginProps {
  onLogin: (accessToken: string) => void;
}

const FacebookLoginButton: FC<FacebookLoginProps> = ({ onLogin }) => {
  useEffect(() => {
    // Load the Facebook SDK script
    const script = document.createElement('script');
    script.src = '/facebook-sdk.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  const handleFacebookLogin = () => {
    window.FB.login((response: any) => {
      if (response.authResponse) {
        const accessToken = response.authResponse.accessToken;
        onLogin(accessToken);
      }
    }, { scope: 'public_profile,email' });
  };

  return (
    <button onClick={handleFacebookLogin}>Login with Facebook</button>
  );
};

export default FacebookLoginButton;
