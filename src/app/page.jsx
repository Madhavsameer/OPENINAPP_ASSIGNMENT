import SignInImage from "../app/_components/signInImage";
import LoginForm from "../app/_components/LoginForm";
import SignInLogos from "../app/_components/SigninLogos";
import ToggleSwitch from "../app/_components/toggleButton"
import Image from "next/image";


export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-slate-100 dark:bg-dark">
      <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center">
        <div className="my-3 w-full h-full">
          <SignInImage />
        </div>
      </div>

      <div className="lg:hidden bg-purple h-20 flex items-center">
        <div className="ml-[25px]">
          <Image
            src={'/baseLogoWhite.svg'}
            width={28}
            height={28}
          />
        </div>
        <div className="text-white font-bold ml-4 text-2xl">
          Base
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center my-auto dark:bg-dark dark:text-white">
        <div className="absolute top-[25px] right-[25px]">
          <ToggleSwitch />
          {/* <div className="flex items-center justify-center font-semibold">
            Theme
          </div> */}
        </div>
        <div >
          <div className="text-4xl font-bold mb-2 dark:bg-dark dark:text-white">
            Sign In
          </div>
          <div className="text-lg font-semibold mb-6 dark:bg-dark dark:text-white">
            Sign in to your account
          </div>
          <div className="flex mb-6">
            <div className="md:mr-6 sm:mr-2 flex bg-white dark:bg-black rounded-xl p-[6px]">
              <Image
                src="/googlelogin.svg"
                alt="Google login"
                width={15.37}
                height={15.37}
              />
              <div className="ml-2 flex px-1 items-center justify-center text-slate-500 text-sm font-bold">
                Sign in with Google
              </div>
            </div>
            <div className="flex bg-white dark:bg-black rounded-xl p-[6px]">
              <Image
                src="/applelogin.svg"
                alt="Apple login"
                width={15.37}
                height={15.37}
              />
              <div className="ml-2 px-1 flex items-center justify-center text-slate-500 text-sm font-bold">
                Sign in with Apple
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <LoginForm />
          </div>
          <div className="flex mt-24 justify-center">
            <SignInLogos />
          </div>
        </div>
      </div>
    </div>
  );
}
