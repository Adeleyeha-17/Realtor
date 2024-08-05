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
    <header className="bg-slate-400 shadow-md py-5">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
         <Link to="/" className='font-bold text-sm sm:text-xl'>
            Logo
         </Link>

        <form className="bg-slate-100 rounded-lg flex items-center">
          <input type="text" placeholder="Search" className="bg-transparent p-3 border-none outline-none w-96"/>
          <SearchIcon className="text-slate-500 mr-4" />
        </form>

        <div>
          <ul className="flex items-center justify-between gap-5">
            {headerRoutes.map((link, i) => (
              <li key={i} className="text-slate-700">
                <Link to={link.href}>
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
