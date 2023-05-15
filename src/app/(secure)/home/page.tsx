import Footer from "@/app/footer/footer";
import classnames from "classnames";
import Image from "next/image";
import styles from "./home.module.css";
import Nav from "./nav/nav";

export default function Home() {
  return (
    <>
      <div className="bg-gray-111">
        <Nav />
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

        <div className="bg-gray-111 min-h-screen">
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
        <Footer />
      </div>
    </>
  );
}
