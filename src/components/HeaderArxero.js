import { Link } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";

export default function HeaderArxero(props) {
    const { active } = props
    const links = [
        {
            title: "Homepage",
            link: "/"
        },
        {
            title: "Services",
            link: "#services"
        },
        {
            title: "About Us",
            link: "/about"
        },
        {
            title: "Blog",
            link: "/blog"
        },
    ]
    const logoSource = "arxero_light_1.png"
    const isSignIn = true

    const [menuOpened, setMenuOpened] = useState(false)
    const [addShadow, setAddShadow] = useState(false)

    return (
        <div className={`header sticky top-0 w-full z-50 bg-main-bg-arxero ${addShadow ? "active" : ""}`}>
            <div className="hidden lg:flex flex-row items-center h-28 pt-8 p-5">
                <div className="w-1/5">
                    <img className="h-12 xl:h-16 ml-16" src={logoSource}></img>
                </div>
                <div className="flex cursor-pointer text-main-dark-blue text-lg font-semibold items-center justify-center w-3/5">
                    {
                        links.map((el) =>{
                            return (
                                <div className={`mx-10 hover:text-arxero-text-hover ${active === el.title ? "text-arxero-text-active hover:text-arxero-text-active cursor-default" : ""}`}>
                                    <Link to={el.link} reloadDocument>{el.title}</Link> 
                                </div>
                            )
                        })
                    }
                </div>
                { isSignIn && (
                    <div className="ml-auto ml-2 xl:ml-8 transition-all border-main-dark-blue border-[2px] font-medium hover:bg-main-dark-blue hover:text-white rounded-2xl text-lg h-10 w-30 xl:text-xl xl:h-14 xl:w-32 px-4 xl:px-7 pt-[2px] xl:pt-[9px]">
                        Login 
                    </div>
                )}
            </div>
            <div className="flex lg:hidden flex-row i items-center h-28 pt-8 p-5">
                <img className="h-12 xl:h-16 ml-4 md:ml-16" src={logoSource}></img>
                <div className="flex ml-auto cursor-pointer text-main-dark-blue text-lg items-center">
                { isSignIn && (
                        <div className="mx-8 xl:ml-8 transition-all border-main-dark-blue border-[2px] font-medium hover:bg-main-dark-blue hover:text-white rounded-2xl text-lg h-10 w-30 xl:text-xl xl:h-14 xl:w-32 px-4 xl:px-7 pt-[2px] xl:pt-[9px]">
                            Sign In
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
                                <div className="text-xl text-gray-700 font-normal my-4 hover:text-gray-900">{el.title}</div>
                            )
                        })
                    }
                </div>
                </div>
            </div>
        </div>
    )
}