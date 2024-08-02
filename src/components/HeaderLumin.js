import { useState } from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Header(props) {
    const links = [
        {
            title: "Features", 
            link: "/lumin/#dive-deep"
        },
        {
            title: "Why Us?", 
            link: "/lumin/#why-us"
        },
        {
            title: "Case Study", 
            link: "/lumin/#case-study"
        }, 
        {
            title: "Plans",
            link: "/lumin/pricing/"
        }
    ]
    const isSignIn = true
    const logoSource = "/arxero_lumin_light.png"
    const [menuOpened, setMenuOpened] = useState(false)
    const [addShadow, setAddShadow] = useState(false)

    // const observer = new IntersectionObserver(([entry]) => {
    //     setAddShadow(!entry.isIntersecting)
    // });
      
    // observer.observe(intercept);
    return (
        <div className={`header sticky top-0 w-full z-50 h-auto bg-main-bg-lumin ${addShadow ? "active" : ""}`} data-observer-intercept>
            <div className="hidden lg:flex flex-row items-center h-28 pt-8 p-5">
                <Link to="/lumin" reloadDocument><img className="h-12 xl:h-16 ml-16 cursor-pointer" src={logoSource}></img></Link>
                <div className="flex ml-auto cursor-pointer text-main-dark-blue text-lg items-center font-semibold">
                    {
                        links.map((el) =>{
                            return (
                                <Link to={el.link} reloadDocument className="group relative mx-10">
                                    <div className="absolute w-[110%] -left-1 bottom-[0.1rem] h-[0.5rem] bg-lumin-grad-end z-40 group-hover:opacity-50 opacity-0 transition-all"></div>
                                    <div className="z-50 relative">{el.title}</div>
                                </Link>
                            )
                        })
                    }
                    { isSignIn && (
                        <div className="cursor-pointer flex flex-row ml-auto ml-2 xl:ml-8 transition-all border-main-dark-blue border-[2px] font-medium hover:bg-main-dark-blue hover:text-white rounded-3xl text-lg h-10 w-30 xl:text-xl xl:h-12 xl:w-36 px-2 xl:px-6 pt-[2px] xl:pt-[6px]">
                            <div><FontAwesomeIcon className="mr-2" icon={faUser}></FontAwesomeIcon></div>
                            <div>Sign In</div>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex lg:hidden flex-row i items-center h-28 pt-8 p-5">
                <img className="h-12 xl:h-16 ml-4 md:ml-16" src={logoSource}></img>
                <div className="flex ml-auto cursor-pointer text-main-dark-blue text-lg items-center">
                { isSignIn && (
                        <div className="flex mx-3 xl:ml-8 transition-all border-main-dark-blue border-[2px] font-medium hover:bg-main-dark-blue hover:text-white rounded-2xl text-lg h-10 w-32 xl:text-xl xl:h-14 xl:w-32 px-4 xl:px-7 pt-[2px] xl:pt-[9px]">
                            <div><FontAwesomeIcon className="mr-2" icon={faUser}></FontAwesomeIcon></div>
                            <div>Sign In</div>
                        </div>
                    )
                }
                <div className={`menu-btn ${menuOpened ? "close" : ""}`} onClick={() => {setMenuOpened((prevState) => !prevState)}}>
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                </div>
                <div className={`menu ${menuOpened ? "open" : "close"}`}>
                    {
                        links.map((el) =>{
                            return (
                                <Link to={el.link} className="text-xl text-gray-700 font-normal my-4 hover:text-gray-900">{el.title}</Link>
                            )
                        })
                    }
                </div>
                </div>
            </div>
        </div>
    )
}