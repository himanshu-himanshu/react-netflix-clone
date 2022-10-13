import Logo from "./Logo";

function Login() {
  return (
    <div className="background auth-outer-div">
      <div className="auth-logo-div">
        <Logo />
      </div>
      <div className="auth-shadow" />

      <div className="full flex-center ">
        <div className="flex flex-col w-[30%] h-[90%] rounded px-16 py-12 relative z-40">
          <div className="auth-shadow" />
          <h1 className="text-4xl text-white font-bold mb-8">Sign In</h1>
          <input
            type="text"
            placeholder="Email or phone number"
            className="login-input mb-6"
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
          />
          <button className="bg-red-600 px-4 py-3 text-white rounded-sm mt-12 font-bold text-lg">
            Sign In
          </button>
          <div className="mt-4 text-md flex flex-row justify-between">
            <div>
              <input
                type="checkbox"
                name="Remember"
                className="bg-darkGrey mr-2"
              />
              <label htmlFor="Remember">Remember me</label>
            </div>
            <h1 className="">Need help?</h1>
          </div>
          <h1 className="text-lg mt-24">
            New to Netflix?
            <a href="/registration" className="text-white ml-2">
              Sign up now.
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Login;
