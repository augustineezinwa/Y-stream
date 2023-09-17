"use client";

import Footer from "@/app/footer/footer";
import Image from "next/image";
import Nav from "./nav/nav";
import MoviePreview from "./movie-preview/movie-preview";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  if (!user) router.push("/login");
  return (
    <>
      <div className="bg-gray-111">
        <Nav />
        <MoviePreview />

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
