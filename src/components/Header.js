import "./Header.css"

export default function Header(props) {
    const { links, isSignIn, logoSource } = props

    return (
        <div className="sticky top-0 left-0 w-full h-28 pt-8 flex p-5">
            <img className="ml-16" src={logoSource}></img>
            <div className="flex ml-auto cursor-pointer text-main-dark-blue text-lg items-center">
                {
                    links.map((el) =>{
                        return (
                            <div className="mx-10">{el}</div>
                        )
                    })
                }
                { isSignIn && (
                    <div className="ml-8 transition-all border-main-dark-blue border-[2px] font-medium hover:bg-main-dark-blue hover:text-white rounded-full text-xl h-14 w-36 px-9 pt-[9px]">
                        Sign In
                    </div>
                )}
            </div>
        </div>
    )
}