import HeaderLumin from "../containers/Headers/HeaderLumin";
import './Lumin.css'

export default function Lumin() {

    const csChallenges = [{
        "title": "Inconsistent Service Quality",
        "desc": "Human customer support typically operates within specific hours, leading to delayed responses outside of these times"
    }, {
        "title": "Scalability Issues",
        "desc": "Scaling human support teams is costly and challenging, especially during growth or demand spikes like sales events. "
    }, {
        "title": "Data Management & Analysis",
        "desc": "Manual data collection and analysis is time-consuming and error-prone, often leading to delayed or missed insights due to inefficient processes"
    }, {
        "title": "Language Issues",
        "desc": "Providing multilingual support is challenging and costly, requiring hiring agents fluent in multiple languages"
    },]
    return (
        <div className="bg-main-bg-lumin w-screen max-w-full">
            <HeaderLumin></HeaderLumin>
            <div className="h-[calc(100vh-theme(height.header))] flex flex-col justify-start items-center">
                <div className="text-gray-500 text-2xl my-3">Lumin</div>
                <div className="text-5xl font-bold my-2 text-transparent bg-clip-text bg-gradient-to-r from-lumin-grad-start via-lumin-grad-mid to-lumin-grad-end">illuminate</div>
                <div className="text-5xl font-bold my-2">Your Customer Experience</div>
            </div>

            <div className="
                bg-vision-bg bg-cover bg-no-repeat bg-center z-10
                before:content-[''] before:absolute before:block before:inset-0 before:bg-main-dark-blue before:opacity-80 before:z-[-5]
                w-screen h-[300px] relative inline-block max-w-full
            ">
                <div className="w-full flex flex-col items-center justify-start pt-14">
                    <div className="text-white font-bold text-3xl">Our Vision</div>
                    <div className="text-white text-wrap text-2xl font-light w-2/3 text-center pt-10">
                        To revolutionize customer service through intelligent automation, 
                        delivering unparalleled efficiency and satisfaction for businesses worldwide
                    </div>
                </div>
            </div> 

            <div className="w-full flex flex-col items-center justify-start pt-10">
                <div className="sec-heading">Customer Service Challenges</div>
                <div className="flex flex-row mt-8">
                    { csChallenges.map((el) => {
                        return (
                            <div className="bg-gray-200 rounded-xl mx-3 w-[350px] h-[400px] flex flex-col items-center p-8">
                                <div className="font-bold text-3xl text-center text-main-dark-blue">
                                    {el.title}
                                </div>
                                <div className="mt-auto font-normal text-lg text-center">
                                    {el.desc}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>   

            <div className="w-full flex flex-col items-center justify-start pt-10">
                <div className="sec-heading">Dive Deep Into Arxero Lumin</div>
            </div>
        </div>
    )
}