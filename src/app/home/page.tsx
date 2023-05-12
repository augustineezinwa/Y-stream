import classnames from "classnames";
import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      <div className="">
        <Image
          src="/movie-ad.jpg"
          fill
          alt="screen"
          className="object-cover max-h-[90vh] -z-10"
        />
        <div
          className={classnames(styles.filmTitle, "mt-[60vh] md:ml-20 p-4 ")}
        >
          <h2 className="text-6xl/[90%] font-extrabold">White Series</h2>
          <p className="text-4xl font-medium italic mt-2">The fallen sun</p>
          <p className="text-2xl font-normal  mt-2">The description</p>
          <div>
            <button className="bg-osblood px-10 py-0 h-[45px] text-white text-sm">
              Play
            </button>{" "}
            <button className="bg-osblood px-10 py-0 h-[45px] text-white text-sm">
              More Info
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
