import classnames from "classnames";
import Image from "next/image";
import styles from "./home.module.css";

export default function Nav() {
  return (
    <header className="bg-gray-111 md:flex md:flex-row fixed w-full md:justify-between text-white z-40">
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
        <li className={classnames(styles.headerTitle, "p-2 hidden md:block")}>
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
  );
}
