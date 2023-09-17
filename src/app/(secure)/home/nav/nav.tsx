"use client";
import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";
import styles from "./nav.module.css";
import NavTitle from "./nav-title";
import { useUser } from "@auth0/nextjs-auth0/client";

const LINKS = [
  { name: "Home", route: "/home" },
  { name: "TV-Shows", route: "/home" },
  { name: "Movies", route: "/home" },
  { name: "News & Popular", route: "/home" },
  { name: "My List", route: "/home" },
  { name: "Browse by Language", route: "/home" },
];

export default function Nav() {
  const { user } = useUser();
  return (
    <header className="bg-gray-111 md:flex md:flex-row fixed w-full md:justify-between text-white z-40">
      <NavTitle />
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
          <Link href="/home">Y-Stream</Link>
        </li>
        <>
          {LINKS.map((link, id) => (
            <li className="p-2" key={id}>
              <Link href={link.route}>{link.name}</Link>
            </li>
          ))}
        </>
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
        <li className="ml-2 p-2 bg-ocean-blue text-white w-[40px] h-[40px] text-center">
          <Link href="/profile">{user?.name![0]}</Link>
        </li>
        <li className="p-2">
          <Link href="/api/auth/logout">Logout</Link>
        </li>
      </ul>
    </header>
  );
}
