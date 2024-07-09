import { useEffect } from "react";
import Footer from "../components/Footer";
import HeaderArxero from "../containers/Headers/HeaderArxero";

export default function Home() {
    useEffect(() => {
        document.title = 'Arxero | Home'; // Quick solution
    }, []);
    return (
        <div className="bg-main-bg-grey h-screen w-screen">
            <HeaderArxero></HeaderArxero>
            <div className="flex w-screen h-72 xl:h-[500px] select-none">
                <div className="my-auto pl-20 xl:pl-36 font-bold sm:text-3xl md:text-4xl xl:text-5xl w-1/2">
                    <div className="text-blue-400 my-2">From Insight to Impact</div>
                    <div className="my-2">We Are Empowering</div>
                    <div className="my-2">your Digital Transformation</div>
                </div>
            </div>

            <div className="bg-main-dark-blue w-screen">
                
            </div>
            <Footer/>
        </div>
    )
}