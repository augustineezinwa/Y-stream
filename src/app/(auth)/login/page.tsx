import Footer from "@/app/footer/footer";
import LoginForm from "./login-form";

export default function Login() {
  return (
    <>
      <div>
        <h1 className="mt-11 ml-20 text-6xl text-osblood">Y-Stream</h1>
      </div>

      <div className="md:w-[444px] md:h-[531px] mt-5 mx-auto bg-gray-translucent/60">
        <LoginForm />
      </div>
    </>
  );
}
