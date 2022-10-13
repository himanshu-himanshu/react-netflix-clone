import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const [mail, setMail] = useState("");

  const navigate = useNavigate();
  const handleSignUp = () => {
    if (mail === "") {
      return alert("Email required!");
    }
    navigate("/registration", { state: { email: mail } });
  };

  return (
    <div className="auth-outer-div background">
      <div className="auth-logo-div flex flex-row justify-between items-center">
        <Logo />
        <div className="text-white">
          <button className="text-sm lg:text-lg px-2 lg:px-6 py-2 bg-black/80 border border-gray-100 rounded-sm">
            English
          </button>
          <a
            href="/login"
            className="text-sm lg:text-lg px-2 lg:px-6 py-3 bg-red-600 text-md ml-2 lg:ml-8 rounded-sm"
          >
            Sign In
          </a>
        </div>
      </div>
      <div className="auth-shadow" />

      <div className="mt-[10%] text-gray-200 max-w-2xl mx-auto flex-center flex-col space-y-6">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold text-center">
          Unlimited movies, TV shows, and more.
        </h1>
        <h1 className="text-xl md:text-2xl lg:text-3xl">
          Watch anywhere. Cancel anytime.
        </h1>
        <h1 className="text-lg lg:text-xl text-center">
          Ready to watch? Enter your email to create or restart your membership
          .
        </h1>
        <div className="w-full rounded-sm flex-center lg:items-end flex-col lg:flex-row space-y-8 lg:spcae-y-0 px-6 lg:px-0">
          <input
            type="email"
            placeholder="Email address"
            className="text-2xl px-8 py-4 w-full lg:w-[70%] active:outline-none focus:outline-none text-darkGrey"
            required
            onChange={(e) => setMail(e.target.value)}
          />
          <button
            className="bg-red-600 px-8 py-4 text-2xl w-[50%] lg:w-[30%]"
            onClick={() => handleSignUp()}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
