import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderLumin from "../containers/Headers/HeaderLumin";
import './Lumin.css'
import { faDatabase, faHeadset, faLanguage, faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";
import Lottie from "react-lottie";
import automation from "../assets/automation.json"
import insights from "../assets/insights.json"
import support from "../assets/support.json"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Footer from "../components/Footer";
import { useState } from "react";


import education from "../assets/industries/education.json"
import finance from "../assets/industries/finance.json"
import fnb from "../assets/industries/fnb.json"
import logistics from "../assets/industries/logistics.json"
import online_shop from "../assets/industries/online_shop.json"
import real_estate from "../assets/industries/real_estate.json"
import telco from "../assets/industries/telco.json"
import tourism from "../assets/industries/tourism.json"
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons/faCircleChevronLeft";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons/faCircleChevronRight";

export default function Lumin() {

    const csChallenges = [{
        "title": "Inconsistent Service Quality",
        "desc": "Human customer support typically operates within specific hours, leading to delayed responses outside of these times",
        "icon": faHeadset
    }, {
        "title": "Scalability Issues",
        "desc": "Scaling human support teams is costly and challenging, especially during growth or demand spikes like sales events. ",
        "icon": faUpRightAndDownLeftFromCenter
    }, {
        "title": "Data Management & Analysis",
        "desc": "Manual data collection and analysis is time-consuming and error-prone, often leading to delayed or missed insights due to inefficient processes",
        "icon": faDatabase
    }, {
        "title": "Language Issues",
        "desc": "Providing multilingual support is challenging and costly, requiring hiring agents fluent in multiple languages",
        "icon": faLanguage
    },]

    const inNumbers = [{
        "startText": "we can process",
        "number": "1200+",
        "endText": "messages per minute"
    }, {
        "startText": "we incorporate ",
        "number": "10+",
        "endText": "cutting-edge NLP technologies"
    }, {
        "startText": "we support",
        "number": "10+",
        "endText": "languages"
    }, {
        "startText": "we integrates",
        "number": "8",
        "endText": "business channels"
    },]

    const industries = [
        {
            "name": "Real Estate",
            "challenge": "Managing inquiries and property listings efficiently",
            "cases": [
                "AI chatbots can provide information on property listings, schedule viewings, answer questions about the buying/renting process",
                "It can offer personalized property recommendations based on customer preferences, enhancing customer experience", 
                "Provide insights on customer property preferences and market price"
            ],
            "icon": real_estate
        }, {
            "name": "Education",
            "challenge": "Efficient communication and support for parents and prospective students",
            "cases": [
                "Implement AI chatbots to handle inquiries from parents and prospective students about admissions, curriculum details, financial aid, and campus facilities",
                "Facilitate scheduling appointments for campus or school visits, making it easy for families to arrange tours and meetings, and ensuring a smooth and organized visit experience", 
                "Send automated reminders for important dates such as application deadlines, open house events, and scholarship application periods"
            ],
            "icon": education
        }, {
            "name": "Online Shop",
            "challenge": "Managing customer service and inventory management",
            "cases": [
                "Provide personalized product recommendations and comparisons based on customer preferences and browsing history",
                "Assist with order processing, tracking, and resolving common issues such as returns or exchanges which reduces the workload on human agents", 
                "Notify customers of ongoing promotions, discounts, and special offers to increase customer engagement and drive sales"
            ],
            "icon": online_shop
        }, {
            "name": "Logistics",
            "challenge": "Efficient supply chain management and real-time tracking",
            "cases": [
                "Provide real-time tracking of shipments, allowing customers to monitor their packages and receive timely updates",
                "Analyze customer feedback and identify areas for improvement in logistics services", 
                "Provide rapid responses to customer inquiries and issues to ensure that customers receive immediate support"
            ],
            "icon": logistics
        }, {
            "name": "Hospitality and Tourism",
            "challenge": "Personalized customer experiences and managing bookings",
            "cases": [
                "Assist customers with travel planning, offering personalized suggestions for destinations, itineraries, and activities based on their preferences",
                "Streamline the process of booking accommodations, providing customers with real-time availability, pricing, and recommendations for hotels, vacation rentals, and other lodging options", 
                "Send travel alerts and notifications, such as flight delays, gate changes, and local advisories"
            ],
            "icon": tourism
        }, {
            "name": "Telecommunication",
            "challenge": "Personalized customer experiences and managing bookings",
            "cases": [
                "Assist customers with travel planning, offering personalized suggestions for destinations, itineraries, and activities based on their preferences",
                "Streamline the process of booking accommodations, providing customers with real-time availability, pricing, and recommendations for hotels, vacation rentals, and other lodging options", 
                "Send travel alerts and notifications, such as flight delays, gate changes, and local advisories"
            ],
            "icon": telco
        }, {
            "name": "Food & Beverages",
            "challenge": "Personalized customer experiences and managing bookings",
            "cases": [
                "Assist customers with travel planning, offering personalized suggestions for destinations, itineraries, and activities based on their preferences",
                "Streamline the process of booking accommodations, providing customers with real-time availability, pricing, and recommendations for hotels, vacation rentals, and other lodging options", 
                "Send travel alerts and notifications, such as flight delays, gate changes, and local advisories"
            ],
            "icon": fnb
        }, {
            "name": "Financial Services",
            "challenge": "Personalized customer experiences and managing bookings",
            "cases": [
                "Assist customers with travel planning, offering personalized suggestions for destinations, itineraries, and activities based on their preferences",
                "Streamline the process of booking accommodations, providing customers with real-time availability, pricing, and recommendations for hotels, vacation rentals, and other lodging options", 
                "Send travel alerts and notifications, such as flight delays, gate changes, and local advisories"
            ],
            "icon": finance
        }
    ]

    const [activeBenefit, setActiveBenefit] = useState(0)

    
    return (
        <div className="bg-main-bg-lumin w-screen max-w-full overflow-visible min-h-screen min-w-full">
            <HeaderLumin></HeaderLumin>
            <div className="h-[calc(100vh-theme(height.header))] flex flex-col justify-start items-center">
                <div className="text-gray-500 text-2xl my-3 font-semibold w-32 rounded-full border-2 border-gray-300 text-center h-12 py-1 select-none">Lumin</div>
                <div className="text-5xl font-bold my-2 text-transparent bg-clip-text bg-gradient-to-r from-lumin-grad-start via-lumin-grad-mid to-lumin-grad-end">illuminate</div>
                <div className="text-5xl font-bold my-2 text-center">Your Customer Experience</div>
            </div>

            <div className="
                bg-vision-bg bg-cover bg-no-repeat bg-center z-10
                before:content-[''] before:absolute before:block before:inset-0 before:bg-main-dark-blue before:opacity-80 before:z-[-5]
                w-screen h-[375px] md:h-[300px] relative inline-block max-w-full
            ">
                <div className="w-full flex flex-col items-center justify-start pt-14">
                    <div className="text-white font-bold text-3xl">Our Vision</div>
                    <div className="text-white text-wrap text-2xl font-light w-2/3 text-center pt-10">
                        To revolutionize customer service through intelligent automation, 
                        delivering unparalleled efficiency and satisfaction for businesses worldwide
                    </div>
                </div>
            </div> 

            <div className="w-full flex flex-col items-center justify-start pt-12">
                <div className="sec-heading">Customer Service Challenges</div>
                <div className="flex flex-row mt-8 flex-wrap xl:mx-0 justify-center">
                    { csChallenges.map((el) => {
                        return (
                            <div className="bg-gray-200 my-4 rounded-xl mx-3 w-[350px] h-[400px] flex flex-col items-center p-8">
                                <div className="flex flex-col justify-center h-40 text-6xl text-main-dark-blue">
                                    <FontAwesomeIcon icon={el.icon}/>
                                </div>
                                <div className="h-40 font-bold text-3xl text-center text-main-dark-blue flex flex-col justify-center">
                                    {el.title}
                                </div>
                                <div className="font-normal text-lg text-center">
                                    {el.desc}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>   

            <div className="w-full flex flex-col items-center justify-start pt-40">
                <div className="sec-heading">Dive Deep Into Arxero Lumin</div>
                <div className="mt-6 dive-deep-sec bg-pastel-blue">
                    <div className="md:mb-12">
                        <Lottie options={{
                             loop: true,
                             autoplay: true,
                             animationData: automation,
                             rendererSettings: {
                               preserveAspectRatio: "xMidYMid slice"
                             }
                        }} 
                        width={450}></Lottie>
                    </div>
                    <div className="dive-deep-sec-text-wrapper">
                        <div className="text-4xl font-extrabold">Personalized Automation</div>
                        <div className="mt-4 text-md font-normal">
                            Automates routine customer inquiries and tasks, ensuring quick and efficient responses while reducing the workload on
                            human agents with tailored responses and recommendations based on customer preferences and behavior
                        </div>
                    </div>
                </div>

                <div className="dive-deep-sec">
                    <div className="dive-deep-sec-text-wrapper hidden md:block">
                        <div className="text-4xl font-extrabold">24/7 Proactive Support</div>
                        <div className="mt-4 text-md font-normal">
                            Identifies potential customer issues and provides proactive solutions by anticipating needs and offering timely assistance. 
                            Provides 24/7 support to customers, ensuring they receive assistance whenever they need it
                        </div>
                    </div>
                    <div className="-mb-16 md:mb-2 lg:mb-12">
                        <Lottie options={{
                             loop: true,
                             autoplay: true,
                             animationData: support,
                             rendererSettings: {
                               preserveAspectRatio: "xMidYMid slice"
                             }
                        }}
                        width={450} ></Lottie>
                    </div>
                    <div className="dive-deep-sec-text-wrapper md:hidden block">
                        <div className="text-4xl font-extrabold">24/7 Proactive Support</div>
                        <div className="mt-4 text-md font-normal">
                            Identifies potential customer issues and provides proactive solutions by anticipating needs and offering timely assistance. 
                            Provides 24/7 support to customers, ensuring they receive assistance whenever they need it
                        </div>
                    </div>
                </div>

                <div className="dive-deep-sec bg-pastel-blue">
                    <div className="md:mb-2">
                        <Lottie options={{
                             loop: true,
                             autoplay: true,
                             animationData: insights,
                             rendererSettings: {
                               preserveAspectRatio: "xMidYMid slice"
                             }
                        }} 
                        width={450}></Lottie>
                    </div>
                    <div className="dive-deep-sec-text-wrapper">
                        <div className="text-4xl font-extrabold">Enhanced Business Insights</div>
                        <div className="mt-4 text-md font-normal">
                        Helps businesses make informed decisions based on comprehensive data insights by analyzing customer 
                        interactions to uncover trends and preferences
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-main-dark-blue h-[550px] md:h-[360px] flex flex-col items-center justify-start select-none">
                <div className="text-3xl text-white mt-8 font-semibold text-center">We create platforms that deliver success</div>
                <div className="flex flex-row justify-center md:justify-start items-center text-white mt-8 flex-wrap md:flex-nowrap">
                    {
                        inNumbers.map((el)=>{
                            return (
                                <div className="my-2 md:my-0 flex flex-row items-center mx-2 rounded-xl bg-sec-dark-blue w-[200px] sm:w-[240px] md:w-[180px] lg:w-[200px] xl:w-[300px] 2xl:w-[360px] h-[180px] p-5">
                                    <div className="xl:w-32 2xl:w-56 hidden lg:block"></div>
                                    <div className="ml-auto flex flex-col items-left justify-start w-36">
                                        <div className="text-md font-light">{el.startText}</div>
                                        <div className="text-5xl font-bold">{el.number}</div>
                                        <div className="text-md font-light">{el.endText}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            
           <div className="w-full h-[700px] md:h-[650px] p-6 lg:p-14">
                <div className="my-2 pb-4 sec-heading text-left">Benefits and Use Cases</div>
                <div className="mt-2 flex flex-row items-center">
                    <div className="hidden sm:block bg-white w-[400px] h-[580px] md:h-[520px] lg:h-[480px] rounded-3xl pt-6">
                    {
                        industries.map((el, i) => {
                            return (
                                <div className="flex flex-row">
                                    <div 
                                        className={`pl-10 py-3 ${i == industries.length - 1 ? "" : "border-b-2"} border-gray-100 w-full text-xl ${activeBenefit == i ? "benefits-active" : "benefits-inactive"}`}
                                        onClick={() => {
                                            setActiveBenefit(i)
                                        }}
                                    >{el.name}</div>
                                </div>
                            )
                        })
                    }
                    </div>
                    <div className="block sm:hidden cursor-pointer w-8 text-xl hover:text-2xl hover:text-lumin-grad-start transition-all" onClick={() => {setActiveBenefit((prev) =>  ((prev - 1) < 0 ? industries.length - 1 : prev - 1))}}>
                        <FontAwesomeIcon icon={faCircleChevronLeft}></FontAwesomeIcon>
                    </div>
                    <div className="w-full ml-5 h-[580px] md:h-[520px] lg:h-[480px] rounded-xl bg-white flex flex-row items-center px-10">
                        <div className="flex flex-col h-full w-full lg:w-2/3 xl:w-1/2">
                            <div className="sm:hidden block text-3xl font-extrabold mt-8 lumin-grad-text">{industries[activeBenefit].name}</div>
                            <div className="text-2xl font-extrabold mt-4 sm:mt-8 mb-3">{industries[activeBenefit].challenge}</div>
                            {
                                industries[activeBenefit].cases.map((el, i) => {
                                    return (
                                        <div className="my-1 text-base bg-gray-100 text-gray-600 rounded-2xl p-4">{el}</div>
                                    )
                                })
                            }
                        </div>
                        <div className="xl:block hidden ml-auto mr-2 2xl:mr-24">
                        <Lottie options={{
                             loop: true,
                             autoplay: true,
                             animationData: industries[activeBenefit].icon,
                             rendererSettings: {
                               preserveAspectRatio: "xMidYMid slice"
                             }
                        }} 
                        width={375}></Lottie>
                        </div>
                        <div className="hidden lg:block xl:hidden ml-auto mr-2 2xl:mr-24">
                        <Lottie options={{
                             loop: true,
                             autoplay: true,
                             animationData: industries[activeBenefit].icon,
                             rendererSettings: {
                               preserveAspectRatio: "xMidYMid slice"
                             }
                        }} 
                        width={200}></Lottie>
                        </div>
                    </div>
                    <div className="block sm:hidden ml-5 w-8 cursor-pointer text-xl hover:text-2xl hover:text-lumin-grad-start transition-all" onClick={() => {setActiveBenefit((prev) => ((prev + 1) > industries.length - 1 ? 0 : prev + 1))}}>
                        <FontAwesomeIcon icon={faCircleChevronRight}></FontAwesomeIcon>
                    </div>
                </div>
            </div> 

            <div className="
                bg-action-bg bg-cover bg-no-repeat bg-top z-10
                before:content-[''] before:absolute before:block before:inset-0 before:bg-main-dark-blue before:opacity-60 before:z-[-5]
                w-screen h-[480px] md:h-[360px] relative inline-block max-w-full flex flex-col justify-center md:justify-start
            ">
                <div className="w-full flex flex-col items-center justify-start pt-14 px-8">
                    <div className="text-white font-bold text-4xl md:text-5xl text-center ">Ready to Empower your Business?</div>
                    <div className="text-white text-wrap text-xl font-light w-2/3 lg:w-1/3 text-center pt-8">
                        Level up your business with <span className="font-bold">Lumin</span>. Reach your customer without compromising speed and quality. 
                    </div>
                    <div className="flex flex-row mt-8">
                        <div className="mx-2 w-44 h-14 bg-white hover:bg-gray-200 transition-all rounded-xl flex flex-row items-center cursor-pointer">
                            <div><img src="lumin_icon.png" className="w-8 ml-5"></img></div>
                            <div className="ml-auto pr-4 lumin-grad-text text-xl font-bold">Ask Lumin</div>
                        </div>

                        <div className="mx-2 w-44 h-14 bg-blue-600 hover:bg-blue-800 transition-all rounded-xl flex flex-row items-center cursor-pointer">
                            <div className="ml-4"><FontAwesomeIcon icon={faWhatsapp} color="white" className="text-4xl"></FontAwesomeIcon></div>
                            <div className="ml-auto pr-4 text-white text-xl font-bold">Contact Us</div>
                        </div>
                    </div>
                </div>
            </div> 
            <Footer></Footer>
        </div>
    )
}