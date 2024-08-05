import {CameraIcon, ChartBarIcon, HomeIcon, PersonStanding, Settings} from "lucide-react"
import {useState} from "react"

export default function Navigation() {

    const Menus = [
        {
            name: "Home",
            icon: HomeIcon,
            dis: "translate-x-0"
        }, {
            name: "Profile",
            icon: PersonStanding,
            dis: "translate-x-16"
        }, {
            name: "Message",
            icon: ChartBarIcon,
            dis: "translate-x-32"
        }, {
            name: "Photos",
            icon: CameraIcon,
            dis: "translate-x-48"
        }, {
            name: "Settings",
            icon: Settings,
            dis: "translate-x-64"
        }
    ]

    const [active, setActive] = useState(0)

    return (
        <div className="fixed bottom-0 bg-white max-h-[4.5rem] px-9 rounded-t-xl">
            <ul className="flex relative">
                <span
                    className={`bg-rose-600 duration-500 ${Menus[active].dis} border-4 border-gray-900 h-16 w-16 absolute -top-5 rounded-full`}>
                    <span
                        className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] rounded-tr-[11px] shadow-myShadow1"></span>
                    <span
                        className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] rounded-tl-[11px] shadow-myShadow2"></span>
                </span>
                {
                    Menus.map((menu, i) => (
                        <li key={i} className="w-16">
                            <a
                                href="#"
                                className="flex flex-col items-center text-center pt-6"
                                onClick={() => setActive(i)}>
                                <span
                                    className={`text-xl cursor-pointer duration-500 ${active === i && "-mt-6 text-white z-10"}`}>
                                    <menu.icon/>
                                </span>
                                <span
                                    className={`${active === i
                                        ? 'translate-y-4 duration-700 opacity-100'
                                        : 'opacity-0 translate-y-10'}`}>{menu.name}</span>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
