import React, { useState } from "react";
import Logo from "./Logo";
import { useLocation } from "react-router-dom";

function Registration() {
  const [userMail, setUserMail] = useState("");
  const { state } = useLocation();
  const { email } = state || {};
  return (
    <div className="bg-gray-200 h-screen w-full">
      <div className="auth-logo-div flex flex-row justify-between items-center">
        <Logo />
        <a href="/login" className="text-xl font-semibold">
          Sign In
        </a>
      </div>
      <div className="flex flex-col max-w-xl mx-auto h-[90%] space-y-8 rounded px-16 py-12">
        <h1 className="text-4xl font-semibold">
          Create a password to start your membership
        </h1>
        <h1 className="text-xl text-gray-500">
          Just one more step and you're done!
        </h1>
        <input
          type="text"
          placeholder="Email"
          className="py-5 px-2 bg-transparent border border-gray-400"
          onChange={(e) => setUserMail(e.target.value)}
          value={email || userMail}
        />
        <input
          type="password"
          placeholder="Add a password"
          className="py-5 px-2 bg-transparent border border-gray-400"
        />
        <button className="bg-red-600 px-4 py-5 text-white rounded-sm mt-12 font-bold text-lg">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Registration;
