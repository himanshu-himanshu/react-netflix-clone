import React from "react";

function Login() {
  return (
    <div className="background min-h-screen banner relative z-20 text-[#4f4e4e]">
      <div className="w-full h-[10%] px-12 py-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
          className="h-6 lg:h-14"
        />
      </div>
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-70 -z-20" />

      <div className="h-full w-full flex items-center justify-center ">
        <div className="flex flex-col w-[30%] h-[90%] rounded px-16 py-12 relative z-40">
          <div className="absolute w-full h-full top-0 left-0 bg-black opacity-70 -z-10" />
          <h1 className="text-4xl text-white font-bold mb-8">Sign In</h1>
          <input
            type="text"
            placeholder="Email or phone number"
            className="bg-[#2c2c2c] p-4 rounded-sm mb-6"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-[#2c2c2c] p-4 rounded-sm"
          />
          <button className="bg-red-600 px-4 py-3 text-white rounded-sm mt-12 font-bold text-lg">
            Sign In
          </button>
          <div className="mt-4 text-md flex flex-row justify-between">
            <div>
              <input
                type="checkbox"
                name="Remember"
                className=" bg-[#4f4e4e] mr-2"
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
