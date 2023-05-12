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

            <div className="flex flex-row flex-wrap md:mt-32 mt-10 gap-12">
              <div
                className={classnames(
                  "px-4 py-4  h-[230px] w-[283px] text-white",
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

              <div
                className={classnames(
                  "px-4 py-4  h-[230px] w-[283px] text-white",
                  styles.ad
                )}
              >
                <Image
                  src="/popcorn.svg"
                  alt="cinema ad"
                  width={60}
                  height={60}
                />
                <p className="text-xl font-bold mt-1">Watch Everywhere</p>
                <p className="mt-2">
                  Stream unlimited movies and TV shows on your phone, tablet,
                  laptop, and TV.
                </p>
              </div>

              <div
                className={classnames(
                  "px-4 py-4  h-[230px] w-[283px] text-white",
                  styles.ad
                )}
              >
                <Image
                  src="/crystallball.svg"
                  alt="kids ad"
                  width={60}
                  height={60}
                />
                <p className="text-xl font-bold mt-1">
                  Create Profiles for kids
                </p>
                <p className="mt-2">
                  Send kids on adventures with their favorite characters in a
                  space made just for them—free with your membership.
                </p>
              </div>

              <div
                className={classnames(
                  "px-4 py-4  h-[230px] w-[283px] text-white",
                  styles.ad
                )}
              >
                <Image
                  src="/download.svg"
                  alt="download ad"
                  width={60}
                  height={60}
                />
                <p className="text-xl font-bold mt-1">
                  Download your shows to watch online
                </p>
                <p className="mt-2">
                  Save your favorites easily and always have something to watch.
                </p>
              </div>
            </div>

            <div className="text-white mt-12 mr-1">
              <p className="font-bold text-3xl">Frequently Asked Questions</p>

              <div className="font-medium md:text-2xl sm:text-xl sm:w-[80%] md:w-[55%] bg-ocean-dark-blue py-2 px-6 mt-2">
                <div className="flex justify-between flex-wrap">
                  <div>What is Y-stream?</div>
                  <label htmlFor="check-6" className="p-1">
                    +
                  </label>
                  <input id="check-6" type="checkbox" className="peer hidden" />
                  <p className="mt-1 max-h-[0] overflow-hidden peer-checked:max-h-[500px] duration-1000 ease-in-out font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente iste consequuntur quae deserunt dolore perferendis
                    corporis vitae culpa, exercitationem, hic odio tempore
                    dignissimos aperiam, ratione ad! Quo dolor voluptatem quia!
                  </p>
                </div>
              </div>

              <div className="font-medium md:text-2xl sm:text-xl sm:w-[80%] md:w-[55%] bg-ocean-dark-blue py-2 px-6 mt-2">
                <div className="flex justify-between flex-wrap">
                  <div>How much does Y-stream cost?</div>
                  <label htmlFor="check-7" className="p-1">
                    +
                  </label>
                  <input id="check-7" type="checkbox" className="peer hidden" />
                  <p className="mt-1 max-h-[0] overflow-hidden peer-checked:max-h-[500px] duration-1000 ease-in-out font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente iste consequuntur quae deserunt dolore perferendis
                    corporis vitae culpa, exercitationem, hic odio tempore
                    dignissimos aperiam, ratione ad! Quo dolor voluptatem quia!
                  </p>
                </div>
              </div>

              <div className="font-medium md:text-2xl sm:text-xl sm:w-[80%] md:w-[55%] bg-ocean-dark-blue py-2 px-6 mt-2">
                <div className="flex justify-between flex-wrap">
                  <div>Where can I watch?</div>
                  <label htmlFor="check-5" className="p-1">
                    +
                  </label>
                  <input id="check-5" type="checkbox" className="peer hidden" />
                  <p className="mt-1 max-h-[0] overflow-hidden peer-checked:max-h-[500px] duration-1000 ease-in-out font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente iste consequuntur quae deserunt dolore perferendis
                    corporis vitae culpa, exercitationem, hic odio tempore
                    dignissimos aperiam, ratione ad! Quo dolor voluptatem quia!
                  </p>
                </div>
              </div>

              <div className="font-medium md:text-2xl sm:text-xl sm:w-[80%] md:w-[55%] bg-ocean-dark-blue py-2 px-6 mt-2">
                <div className="flex justify-between flex-wrap">
                  <div>How do I cancel?</div>
                  <label htmlFor="check-0" className="p-1">
                    +
                  </label>
                  <input id="check-0" type="checkbox" className="peer hidden" />
                  <p className="mt-1 max-h-[0] overflow-hidden peer-checked:max-h-[500px] duration-1000 ease-in-out font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente iste consequuntur quae deserunt dolore perferendis
                    corporis vitae culpa, exercitationem, hic odio tempore
                    dignissimos aperiam, ratione ad! Quo dolor voluptatem quia!
                  </p>
                </div>
              </div>

              <div className="font-medium md:text-2xl sm:text-xl sm:w-[80%] md:w-[55%] bg-ocean-dark-blue py-2 px-6 mt-2">
                <div className="flex justify-between flex-wrap">
                  <div>Where can I watch on Y-stream?</div>
                  <label htmlFor="check-10" className="p-1">
                    +
                  </label>
                  <input
                    id="check-10"
                    type="checkbox"
                    className="peer hidden"
                  />
                  <p className="mt-1 max-h-[0] overflow-hidden peer-checked:max-h-[500px] duration-1000 ease-in-out font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente iste consequuntur quae deserunt dolore perferendis
                    corporis vitae culpa, exercitationem, hic odio tempore
                    dignissimos aperiam, ratione ad! Quo dolor voluptatem quia!
                  </p>
                </div>
              </div>

              <div className="font-medium md:text-2xl sm:text-xl sm:w-[80%] md:w-[55%] bg-ocean-dark-blue py-2 px-6 mt-2">
                <div className="flex justify-between flex-wrap">
                  <div>Is Y-stream good for kids?</div>
                  <label htmlFor="check-4" className="p-1">
                    +
                  </label>
                  <input id="check-4" type="checkbox" className="peer hidden" />
                  <p className="mt-1 max-h-[0] overflow-hidden peer-checked:max-h-[500px] duration-1000 ease-out font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente iste consequuntur quae deserunt dolore perferendis
                    corporis vitae culpa, exercitationem, hic odio tempore
                    dignissimos aperiam, ratione ad! Quo dolor voluptatem quia!
                  </p>
                </div>
              </div>
            </div>

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
      </div>
    </>
  );
}
