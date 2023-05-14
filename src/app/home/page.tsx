import classnames from "classnames";
import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      <div className="bg-black">
        <header className="bg-black md:flex md:flex-row fixed w-full md:justify-between text-white z-40">
          <h1
            className={classnames(
              styles.headerTitleY,
              "p-2 text-base absolute -top-3 md:hidden"
            )}
          >
            Y-Stream
          </h1>
          <label
            htmlFor="menu"
            className="fixed block right-0 top-0 border-2 p-2 rounded h-[40px] md:hidden"
          >
            <span className={styles.dashOne}></span>
            <span className={styles.dashTwo}></span>
            <span className={styles.dashThree}></span>
          </label>
          <input type="checkbox" id="menu" className="peer hidden" />
          <ul className="md:flex place-items-center hidden peer-checked:block md:peer-checked:flex mt-10 md:mt-0">
            <li
              className={classnames(styles.headerTitle, "p-2 hidden md:block")}
            >
              Y-Stream
            </li>
            <li className="p-2">Home</li>
            <li className="p-2">TV-Shows</li>
            <li className="p-2">Movies</li>
            <li className="p-2">News & Popular</li>
            <li className="p-2">My List</li>
            <li className="p-2">Browse by Language</li>
          </ul>
          <ul className="md:flex place-items-center hidden peer-checked:block md:peer-checked:flex">
            <li className="p-2">
              <Image src="/search.svg" alt="search" height={20} width={20} />
            </li>
            <li className="p-2">
              <Image
                src="/bell.svg"
                alt="notification"
                height={20}
                width={20}
                className=""
              />
            </li>
            <li className="p-2 bg-ocean-blue text-white w-[40px] h-[40px] text-center">
              A
            </li>
          </ul>
        </header>
        <Image
          src="/movie-ad.jpg"
          alt="movie"
          width={900}
          height={900}
          className="object-cover  min-w-[100vw] max-w-[100vw] h-[90vh]"
        />
        <div
          className={classnames(
            styles.filmTitle,
            "md:ml-20 p-4 absolute top-[40%] z-10"
          )}
        >
          <h2 className="text-6xl/[90%] font-extrabold">White Series</h2>
          <p className="text-4xl font-medium italic mt-2">The fallen sun</p>
          <p className="text-2xl font-normal  mt-2">The description</p>
          <div className="mt-2">
            <button className="bg-white rounded px-10 py-0 h-[45px] text-black text-sm mr-4 hover:bg-gray-100">
              Play
            </button>
            <button className={styles.infoButton}>More Info</button>
          </div>
        </div>

        <div className="bg-black min-h-screen">
          <div className="flex flex-col">
            <h3 className="text-white m-4 pt-5 text-2xl font-semibold">
              Released in the Past year
            </h3>
            <div className="flex m-4 gap-10 overflow-x-auto">
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-white m-4 pt-5 text-2xl font-semibold">
              Trending Now
            </h3>
            <div className="flex m-4 gap-10 overflow-x-auto">
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-white m-4 pt-5 text-2xl font-semibold">
              Released in the Past year
            </h3>
            <div className="flex m-4 gap-10 overflow-x-auto">
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-white m-4 pt-5 text-2xl font-semibold">
              Popular on Y-stream
            </h3>
            <div className="flex m-4 gap-10 overflow-x-auto">
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-white m-4 pt-5 text-2xl font-semibold">
              Top 10 movies in Y-stream
            </h3>
            <div className="flex m-4 gap-10 overflow-x-auto">
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
              <Image
                src="/movie-ad_2.jpg"
                alt="movie"
                width={900}
                height={900}
                className="object-cover  min-w-[310px] max-w-[310px] h-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
