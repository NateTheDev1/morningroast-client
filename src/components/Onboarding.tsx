import React, { useState } from "react";
import "./Onboarding.css";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { loginUser, createUser } from "../actions/user";

const Onboarding = ({ onboardingType }: { onboardingType: string }) => {
  const user = useSelector((state: any) => state.globalReducer.user);
  const error = useSelector((state: any) => state.globalReducer.user_error);
  const dispatch = useDispatch();
  const history = useHistory();

  const [formState, setFormState] = useState({ username: "", password: "" });

  if (user !== null) {
    history.push("/menu");
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (onboardingType === "login") {
      dispatch(loginUser(formState));
    } else {
      dispatch(createUser(formState));
    }
  };

  return (
    <form className="onboarding-root">
      <div className="onboarding-left"></div>
      <div className="onboarding-right">
        <h1>
          {onboardingType === "signup" ? "Join The Party!" : "Welcome Back!"}
        </h1>
        {error.length > 0 && user === null && (
          <p style={{ color: "red", fontSize: "1.3rem" }}>{error}</p>
        )}
        <hr className="onboarding-divider" />
        <input
          required
          type="text"
          placeholder="Username"
          onChange={(e) =>
            setFormState({ ...formState, username: e.target.value })
          }
          className="onboarding-input"
          value={formState.username}
        />
        <input
          required
          type="password"
          placeholder="Password"
          className="onboarding-input"
          onChange={(e) =>
            setFormState({ ...formState, password: e.target.value })
          }
          value={formState.password}
        />
        <button
          type="submit"
          className="onboarding-submit"
          onClick={handleSubmit}
        >
          {onboardingType === "signup" ? "Sign Up" : "Login"}
        </button>
        <Link
          to={onboardingType === "login" ? "/signup" : "/login"}
          className="noaccount"
        >
          {onboardingType === "login"
            ? "Don't have an account?"
            : "Already have an account?"}
        </Link>
      </div>
    </form>
  );
};

export default Onboarding;
