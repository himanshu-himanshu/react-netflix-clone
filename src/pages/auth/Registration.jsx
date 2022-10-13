import Logo from "./Logo";

function Registration() {
  return (
    <div className="auth-outer-div background">
      <div className="auth-logo-div flex flex-row justify-between">
        <Logo />
        <div className="text-white">
          <button className="px-6 py-2 bg-black border border-gray-100 opacity-80 rounded-sm">
            English
          </button>
          <a
            href="/login"
            className="px-6 py-3 bg-red-600 text-md ml-8 rounded-sm"
          >
            Sign In
          </a>
        </div>
      </div>
      <div className="auth-shadow" />

      <div className="mt-[10%] text-gray-200 max-w-2xl mx-auto flex-center flex-col space-y-6">
        <h1 className="text-7xl font-semibold text-center">
          Unlimited movies, TV shows, and more.
        </h1>
        <h1 className="text-3xl">Watch anywhere. Cancel anytime.</h1>
        <h1 className="text-xl">
          Ready to watch? Enter your email to create or restart your membership
          .
        </h1>
        <div className="w-full rounded-sm">
          <input
            type="email"
            placeholder="Email address"
            className="text-2xl px-8 py-4 w-[70%]"
          />
          <button className="bg-red-600 px-8 py-4 text-2xl w-[30%]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registration;
