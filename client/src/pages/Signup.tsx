import {Button} from "@/components/ui/button";
import {ArrowLeft, ArrowRight} from "lucide-react";
import {Link} from "react-router-dom";

export default function Signup() {
    return (
        <div className="w-full max-h-screen">
            <div className="w-1/2 px-20 py-10 flex flex-col gap-10">
                <div className="flex items-center justify-between">
                    <Link
                        to=""
                        className="w-10 h-10 border rounded-full flex items-center justify-center">
                        <ArrowLeft/>
                    </Link>
                    <h2>
                        Already a member?
                        <Link to="/sign-in" className="text-link ml-1">Sign in</Link>
                    </h2>
                </div>

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
                        className="w-44 h-12 rounded-3xl flex items-center justify-center relative">Sign Up
                        <span
                            className="w-6 h-6 bg-slate-900/70 rounded-full flex items-center justify-center absolute right-3">
                            <ArrowRight className="w-4 h-4"/>
                        </span>
                    </Button>
                </form>
            </div>

            <div className="w-1/2"></div>
        </div>
    )
}
