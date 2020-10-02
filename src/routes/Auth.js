import AuthForm from "components/AuthForm";
import { authService, firebaseInstance } from "fBase";
import React, { useState } from "react";

const Auth = () => {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    console.log(data);
  };
  return (
    <div>
      <AuthForm />
      <div>
        <button name="google" onClick={onSocialClick}>
          Contiunue with Google
        </button>
        <button name="github" onClick={onSocialClick}>
          Contiunue with Github
        </button>
      </div>
    </div>
  );
};

export default Auth;
