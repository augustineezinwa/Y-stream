export default function Home() {
  return (
    <div className="flex flex-col bg-cover bg-center bg-sign-up-background min-h-screen">
      <div>
        <h1 className="mt-11 ml-20 text-6xl text-osblood">Y-Stream</h1>
      </div>

      <div className="md:w-[444px] md:h-[531px] mt-5 mx-auto bg-gray-translucent/60">
        <form title="Sign in">
          <div className="h-[1/6] text-white text-4xl mt-4 ml-8">Sign In</div>

          <div className="mt-5 mx-9">
            <input
              type="email"
              className="w-full bg-gray-dark py-4 px-3.5 placeholder:text-gray-8c placeholder:text-2xl placeholder:font-normal text-white text-2xl"
              placeholder="Email or Phone Number"
            />
          </div>
          <div className="mt-6 mx-9">
            <input
              type="password"
              className="w-full bg-gray-dark py-4 px-3.5 placeholder:text-gray-8c placeholder:text-2xl placeholder:font-normal text-white text-2xl"
              placeholder="Password"
            />
          </div>

          <div className="mt-10 mx-9">
            <button className="w-full bg-osblood py-4 px-3.5 text-white text-xl">
              Sign In
            </button>
          </div>

          <div className="flex justify-between text-gray-b3 mt-4 mx-9 text-sm">
            <p>
              <input type="checkbox" className="mr-1" />
              Remember me
            </p>
            <p>Need help?</p>
          </div>

          <div className="flex mt-4 mx-9">
            <p className="text-gray-b3">New to Y-stream?</p>
            <a
              href="/signup"
              className="ml-1 text-white text-base hover:text-gray-b3"
            >
              Signup now
            </a>
          </div>
          <div className="flex mt-4 mx-9">
            <p className="text-gray-b3 text-xs">
              This page is protected by Google RECAPTCHA to ensure you are not a
              bot. <a href="/learn">Learn more</a>
            </p>
          </div>
        </form>
      </div>

      <div className="w-full bg-gray-translucent/60 text-white mt-20">
        <div className="flex flex-col w-[60%] mx-auto mt-10">
          <p>
            Questions? <a>Contact Us</a>
          </p>
        </div>

        <div className="w-[60%] mx-auto text-gray-b3  my-5">
          <ul className="grid md:grid-cols-4  gap-4 ">
            <li>FAQ</li>
            <li>Help Center</li>
            <li>Terminal</li>
            <li>Privacy</li>
            <li>Cookie Preference</li>
            <li>Corporate Information</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
