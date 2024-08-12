import { SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const headerRoutes = [
    {
      name: "About",
      href: "/about"
    },
  {
      name: "Sign In",
      href: "/sign-in"
  }
  ]

  return (
    <header className="bg-navbar shadow-md py-5 font-space">
      <div className="flex justify-between items-center px-6 sm:max-xl:px-14 xl:max-w-6xl mx-auto">
         <Link to="/" className='font-bold text-sm sm:text-xl flex gap-2 items-center'>
            <img src="/Icon.svg" alt="Logo" className="w-6 lg:w-7 h-6 lg:h-7"/>
            <h4 className="text-xl lg:text-2xl">Realtor</h4>
         </Link>

        <form className="bg-slate-100 rounded-lg hidden sm:flex items-center"><input type="text" placeholder="Search" className="bg-transparent p-3 border-none outline-none  sm:w-60 lg:w-96"/>
          <SearchIcon className="text-slate-500 mr-4" />
        </form>

        <div>
          <ul className="flex items-center justify-between gap-5">
            {headerRoutes.map((link, i) => (
              <li key={i} className="text-paragraph">
                <Link to={link.href} className="text-lg sm:font-semibold">
                    {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
