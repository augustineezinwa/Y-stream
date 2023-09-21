'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const { user, isLoading } = useUser();
  const router = useRouter();

  if (user && !isLoading) {
    router.push('/home');
  }
  return (
    <form title="Sign in" className="mb-24">
      <div className="h-[1/6] text-white text-4xl mt-4 ml-8">Sign In</div>

      <div className="mt-5 mx-9">
        <input
          type="email"
          className="w-full bg-gray-dark py-4 px-3.5 placeholder:text-gray-8c placeholder:text-2xl placeholder:font-normal text-white text-2xl"
          placeholder="Email or Phone Number"
        />
      </div>
      <div className="mt-6 mx-9">
        <input
          type="password"
          className="w-full bg-gray-dark py-4 px-3.5 placeholder:text-gray-8c placeholder:text-2xl placeholder:font-normal text-white text-2xl"
          placeholder="Password"
        />
      </div>

      <div className="mt-10 mx-9">
        <button className="w-full bg-osblood py-4 px-3.5 text-white text-xl">
          Sign In
        </button>
      </div>

      <div className="flex justify-between text-gray-b3 mt-4 mx-9 text-sm">
        <p>
          <input type="checkbox" className="mr-1" />
          Remember me
        </p>
        <p>Need help?</p>
      </div>

      <div className="flex mt-4 mx-9">
        <p className="text-gray-b3">New to Y-stream?</p>
        <Link
          href="/api/auth/login"
          className="ml-1 text-white text-base hover:text-gray-b3"
        >
          Login using Auth0
        </Link>
      </div>
      <div className="flex mt-4 mx-9">
        <p className="text-gray-b3 text-xs">
          This page is protected by Google RECAPTCHA to ensure you are not a
          bot. <a href="/learn">Learn more</a>
        </p>
      </div>
    </form>
  );
}
