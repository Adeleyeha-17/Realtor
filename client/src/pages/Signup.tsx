import {Button} from "@/components/ui/button";
import {ArrowLeft, ArrowRight} from "lucide-react";
import {Link} from "react-router-dom";
import Lottie from "lottie-react"
import { Arrow, House } from "../assets/index"


export default function Signup() {

    return (
        <div className="w-full flex max-h-screen">
            <div className="w-full lg:w-1/2 px-6 sm:px-20 py-10 flex flex-col gap-10 relative">
                <div className="flex items-center justify-between">
                    <Link
                        to=".."
                        relative="path"
                        className="w-10 h-10 border rounded-full flex items-center justify-center">
                        <ArrowLeft/>
                    </Link>
                    <h2>
                        Already a member?
                        <Link to="/sign-in" className="text-link ml-1 xl:ml-2">Sign in</Link>
                    </h2>
                </div>
                <Lottie animationData={Arrow} loop={true} className="absolute right-32 top-20 w-28 -rotate-45"/>

                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl font-bold text-primary_head">Sign Up</h1>
                    <h4 className="text-md font-semibold text-secondary_head">Secure Your House with Realtor</h4>
                </div>


                <form className="flex flex-col gap-3">
                    <input
                        type="text"
                        placeholder="Username"
                        className="border p-3 rounded-lg outline-none"
                        id="username"/>
                    <input
                        type="email"
                        placeholder="Email"
                        className="border p-3 rounded-lg outline-none"
                        id="email"/>
                    <input
                        type="password"
                        placeholder="Password"
                        className="border p-3 rounded-lg outline-none"
                        id="password"/>

                    <Button
                        variant={"cta"}
                        className="w-44 h-12 rounded-3xl flex items-center justify-center relative mt-4">Sign Up
                        <span
                            className="w-6 h-6 bg-slate-900/70 rounded-full flex items-center justify-center absolute right-3">
                            <ArrowRight className="w-4 h-4"/>
                        </span>
                    </Button>
                </form>
            </div>

            <div className="w-1/2 hidden lg:flex items-center justify-center relative overflow-hidden">
              <img src={House} alt="" className="w-full z-40"/>
              <div className="bg-[#4A90E2] w-96 h-[34rem] absolute top-20 rotate-45 rounded-[2.5rem]"></div>
              <div className="bg-[#2C3E50]/70 w-72 h-[40rem] absolute z-20 top-20 -rotate-45 rounded-[2.5rem]"></div>
              <div className="bg-primary w-[30rem] h-[34rem] absolute z-10 right-0 rotate-45 rounded-xl"></div>
            </div>
        </div>
    )
}
