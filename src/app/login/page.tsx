import classnames from "classnames";
import Image from "next/image";
import styles from "./login.module.css";

export default function Login() {
  return (
    <>
      <div className="flex flex-col bg-cover bg-center bg-sign-up-background min-h-screen">
        <div className="flex flex-col bg-cover bg-center min-h-screen bg-gray-413/40">
          <div className="flex justify-between items-center md:mt-11 mt-2 mr-2 ml-5 md:ml-20 md:mr-20">
            <h1 className="md:text-6xl text-3xl text-osblood">Y-Stream</h1>
            <button className="bg-osblood px-10 py-0 h-[45px] text-white text-sm">
              Sign in
            </button>
          </div>

          <div className="text-white md:mr-20 md:ml-20 ml-5 mt-20">
            <p className="text-5xl mt-6 font-bold">
              Unlimited movies, TV shows, and more
            </p>
            <p className="text-2xl mt-6 font-bold">
              Watch anywhere. Cancel Anytime.
            </p>
            <p className="text-xl mt-6 font-medium">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="mt-6 flex flex-wrap gap-1">
              <input
                type="email"
                className="bg-gray-111/80 py-3.5 px-4 md:min-w-[381px] min-w-[80%] border border-gray-373 rounded shadow-2xl mr-1"
                placeholder="Email address"
              />
              <button className="py-3.5 px-4 text-xl bg-osblood rounded">
                Get Started {">"}
              </button>
            </div>

            <div className="flex flex-row md:mt-32 mt-10">
              <div
                className={classnames(
                  "px-4 py-4  h-[211px] w-[283px] text-white",
                  styles.ad
                )}
              >
                <Image src="/tv.svg" alt="tv ad" width={60} height={60} />
                <p className="text-xl font-bold mt-1">Enjoy on your TV</p>
                <p className="mt-2">
                  Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                  Blu-ray players, and more.
                </p>
              </div>
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
