import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="flex flex-col bg-cover bg-center bg-sign-up-background min-h-screen">
      <div>
        <h1 className="mt-11 ml-20 text-6xl text-osblood">Y-Stream</h1>
      </div>

      <div className="w-[444px] h-[531px] mx-auto bg-gray-translucent/60">
        <form title="Sign in">
          <div className="h-[1/6] text-white text-4xl mt-4 ml-8">Sign In</div>

          <div className="mt-5 mx-9">
            <input
              type="text"
              className="w-full bg-gray-dark py-4 px-3.5 placeholder:text-gray-8c placeholder:text-2xl placeholder:font-normal" placeholder="Email or password"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
