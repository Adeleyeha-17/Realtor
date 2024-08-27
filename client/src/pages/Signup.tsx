import {Button} from "@/components/ui/button";
import {ArrowLeft, ArrowRight} from "lucide-react";
import {Link, useNavigate} from "react-router-dom";
import Lottie from "lottie-react"
import { Arrow, House } from "../assets/index"
import { FormEvent, useState } from "react";


export default function Signup() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [ error, setError ] = useState<string | null>(null)
    const [ loading, setLoading ] = useState(false)

    const { username, email, password } = formData 

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {name, value } = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name] : value
            }
        })
    }
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!username || !email || !password) {
            setError("Please fill out all fields.");
            return;
        }
        
        try {
            setLoading(true)
            setError(null)

            const res = await fetch('/api/auth/signup', 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                }
            )

            const data = await res.json()

            if(data.error) {
                setError(data.message)
            }else{
                setError(null)
                navigate("/")
                setFormData({ username: "", email: "", password: "" });
            }
            
        } catch (err) {
            const errorMessage = "username or email already exist... please try again" || (err as Error).message;
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

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


                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                {error && <p className="text-red-600">{error}</p>}
                    <input
                        type="text"
                        placeholder="Username"
                        className="border p-3 rounded-lg outline-none"
                        name="username" value={username} onChange={handleChange}/>
                    <input
                        type="email"
                        placeholder="Email"
                        className="border p-3 rounded-lg outline-none"
                        name="email" value={email} onChange={handleChange}/>
                    <input
                        type="password"
                        placeholder="Password"
                        className="border p-3 rounded-lg outline-none"
                        name="password" value={password} onChange={handleChange}/>

                    <Button disabled={loading}
                        variant={"cta"}
                        className="w-44 h-12 rounded-3xl flex items-center justify-center hover:opacity-95 disabled:opacity-80 transition-all ease-in-out relative mt-4">{loading ? "Loading..." : "Sign up"}
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
