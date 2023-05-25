import classnames from "classnames";
import Image from "next/image";
import styles from "./movie-preview.module.css";

export default function MoviePreview() {
  return (
    <>
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
    </>
  );
}
