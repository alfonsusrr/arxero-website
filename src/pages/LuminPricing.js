import { useEffect, useState } from "react";
import HeaderLumin from "../components/HeaderLumin";

import "./LuminPricing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function LuminPricing() {
    useEffect(() => {
        document.title = 'Arxero Lumin | Plans'; // Quick solution
    }, []);

    let [ activePrices, setActivePrices ] = useState([0, 0, 0])

    const priceBoxes = [
        {
            title: "Lumin Lite",
            headerGradient: "from-[#4044EF] to-[#0D107C]",
            priceColor: "text-[#C4ABFF]",
            perMonthText: true,
            checkmarkColor: "bg-[#4044EF]",
            features: {
              convTotal: 500,
              intelligence: "Model with 1270+ intelligence score",
              tps: 140,  
              agent: 2,
              channel: 4,
              autopilot: true,
              smartDataImport: true,
              luminSense: true,
              vision: false,
              dataAnalytics: false
            },
            paymentOptions: [
                {
                    title: "Monthly",
                    price: "Rp 999.900"
                },
                {
                    title: "Semi-Annually",
                    price: "Rp 899.900"
                },
                {
                    title: "Annually",
                    price: "Rp 849.900"
                }
            ]
        },
        {
            title: "Lumin Business",
            headerGradient: "from-[#3578EC] to-[#15D8FF]",
            priceColor: "text-[#ABD9FF]",
            perMonthText: true,
            checkmarkColor: "bg-[#3578EC]",
            features: {
                convTotal: 1200,
                intelligence: "Model with 1180+ intelligence score",
                tps: 165,  
                agent: 5,
                channel: 4,
                autopilot: true,
                smartDataImport: true,
                luminSense: true,
                vision: true,
                dataAnalytics: true
            },
            paymentOptions: [
                {
                    title: "Monthly",
                    price: "Rp 2.499.900"
                },
                {
                    title: "Semi-Annually",
                    price: "Rp 2.399.900"
                },
                {
                    title: "Annually",
                    price: "Rp 2.299.900"
                }
            ]
        },
        {
            title: "Lumin Enterprise",
            headerGradient: "from-[#093C9B] to-[#00032A]",
            priceColor: "text-[#4387E6]",
            checkmarkColor: "bg-[#093C9B]",
            perMonthText: false,
            features: {
                convTotal: "Unlimited",
                intelligence: "Custom Language Model",
                tps: "165+",  
                agent: "Unlimited",
                channel: "4+",
                autopilot: true,
                smartDataImport: true,
                luminSense: true,
                vision: true,
                dataAnalytics: true
            },
            paymentOptions: [
                {
                    title: "Monthly",
                    price: "Custom"
                },
                {
                    title: "Semi-Annually",
                    price: "Custom"
                },
                {
                    title: "Annually",
                    price: "Custom"
                }
            ]
        },
    ]

    const features = [
        {
            "name": "Autopilot",
            "desc": "Provides the ability to toggle Lumin’s automated control on or off for manual management"
        },
        {
            "name": "Lumin Sense",
            "desc": "Detects when the chatbot encounters difficulties and signals for human intervention to ensure smooth customer support"
        },
        {
            "name": "Smart Data Import",
            "desc": "Enables importing data into Lumin for personalized customization tailored to each business"
        },
        {
            "name": "Channel Integrations",
            "desc": "We support multiple channels that our system can integrate with, such as Whatsapp Business, Line Business, Tokopedia, Shopee, and more. "
        },
        {
            "name": "Vision",
            "desc": "Allows the bot to analyze and recommend based on scanned or uploaded pictures"
        },
        {
            "name": "Data Analytics",
            "desc": "Offers detailed analytics and insights at the end of each period (coming soon)"
        },
    ]

    const keyMetrics = [
        {
            "name": "Conversation / Month",
            "desc": "Specifies the number of conversations Lumin can handle per month (e.g., 1,000 conversations approximately cover XXX users)",
            "icon": "/luminpricing_assets/chat_icon.png"
        },
        {
            "name": "Intelligence Score",
            "desc": "Indicates the AI's capability based on LLM benchmarking, with higher points representing superior intelligence and performance.",
            "icon": "/luminpricing_assets/intelligent_icon.png"
        },
        {
            "name": "Response Speed (TPS)",
            "desc": "Measures how quickly the bot generates responses, ensuring timely interactions",
            "icon": "/luminpricing_assets/process_icon.png"
        },
        {
            "name": "Agent Limit",
            "desc": "Determines the number of agents/admins who can access and manage the account",
            "icon": "/luminpricing_assets/agent_icon.png"
        }
    ]
    return (
        <div className="bg-main-bg-lumin h-full select-none">
            <HeaderLumin></HeaderLumin>
            <section id="pricing" className="flex flex-col items-center w-full pt-8">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lumin-grad-start via-lumin-grad-mid to-lumin-grad-end max-w-max">
                    Choose Your Plan
                </div>
                <div className="flex flex-wrap lg:flex-nowrap items-center my-8 w-[400px] lg:min-w-max">
                    {
                        priceBoxes.map((plan, idx) => {
                            return (
                                <div className="price-box">
                                    <div className={`price-box-header ${plan.headerGradient}`}>
                                        <div className="text-xl xl:text-2xl font-bold text-white py-3 px-8 bg-white bg-opacity-5  rounded-full max-w-max">
                                            {plan.title}
                                        </div>
                                        <div className={`price-payment-box ${plan.priceColor}`}>
                                            <div className={`price-payment-btn ${activePrices[idx] === 0 ? "active" : ""}`} onClick={() => {
                                                setActivePrices((prevState) => {
                                                    let newState = [...prevState]
                                                    newState[idx] = 0
                                                    return newState
                                                }
                                            )}}>Monthly</div>
                                            <div className={`price-payment-btn ${activePrices[idx] === 1 ? "active" : ""}`} onClick={() => {
                                                setActivePrices((prevState) => {
                                                    let newState = [...prevState]
                                                    newState[idx] = 1
                                                    return newState
                                                }
                                            )}}>Semi-Annually</div>
                                            <div className={`price-payment-btn ${activePrices[idx] === 2 ? "active" : ""}`} onClick={() => {
                                                setActivePrices((prevState) => {
                                                    let newState = [...prevState]
                                                    newState[idx] = 2
                                                    return newState
                                                }
                                            )}}>Annually</div>
                                        </div>
                                        <div className="price-text">
                                            { plan.paymentOptions[activePrices[idx]].price}
                                            { plan.perMonthText &&
                                                <span className="text-sm font-light"> / month</span>
                                            }
                                        </div>
                                    </div>
                                    <div className="absolute top-[210px] xl:top-[250px] px-5 py-2 flex flex-col">
                                        <div className="price-box__feature-list">
                                            <div className={`price_box__feature-icon ${plan.features.convTotal !== false ? plan.checkmarkColor : "bg-gray-400"}`}>
                                                <FontAwesomeIcon icon={plan.features.convTotal ? faCheck : faXmark}></FontAwesomeIcon>
                                            </div>
                                            <div className="price_box__feature-text">{plan.features.convTotal} conversation / month</div>
                                        </div>
                                        <div className="price-box__feature-list">
                                            <div className={`price_box__feature-icon ${plan.features.intelligence !== false ? plan.checkmarkColor : "bg-gray-400"}`}>
                                                <FontAwesomeIcon icon={plan.features.intelligence ? faCheck : faXmark}></FontAwesomeIcon>
                                            </div>
                                            <div className="price_box__feature-text">{plan.features.intelligence}</div>
                                        </div>
                                        <div className="price-box__feature-list">
                                            <div className={`price_box__feature-icon ${plan.features.tps !== false ? plan.checkmarkColor : "bg-gray-400"}`}>
                                                <FontAwesomeIcon icon={plan.features.tps ? faCheck : faXmark}></FontAwesomeIcon>
                                            </div>
                                            <div className="price_box__feature-text">Response with {plan.features.tps} TPS</div>
                                        </div>
                                        <div className="price-box__feature-list">
                                            <div className={`price_box__feature-icon ${plan.features.agent !== false ? plan.checkmarkColor : "bg-gray-400"}`}>
                                                <FontAwesomeIcon icon={plan.features.agent ? faCheck : faXmark}></FontAwesomeIcon>
                                            </div>
                                            <div className="price_box__feature-text">{plan.features.agent} monitoring agents</div>
                                        </div>
                                        <div className="price-box__feature-list">
                                            <div className={`price_box__feature-icon ${plan.features.channel !== false ? plan.checkmarkColor : "bg-gray-400"}`}>
                                                <FontAwesomeIcon icon={plan.features.channel ? faCheck : faXmark}></FontAwesomeIcon>
                                            </div>
                                            <div className="price_box__feature-text">{plan.features.channel} channel integrations</div>
                                        </div>
                                        <div className="price-box__feature-list">
                                            <div className={`price_box__feature-icon ${plan.features.autopilot !== false ? plan.checkmarkColor : "bg-gray-400"}`}>
                                                <FontAwesomeIcon icon={plan.features.autopilot ? faCheck : faXmark}></FontAwesomeIcon>
                                            </div>
                                            <div className="price_box__feature-text">Autopilot</div>
                                        </div>
                                        <div className="price-box__feature-list">
                                            <div className={`price_box__feature-icon ${plan.features.smartDataImport !== false ? plan.checkmarkColor : "bg-gray-400"}`}>
                                                <FontAwesomeIcon icon={plan.features.smartDataImport ? faCheck : faXmark}></FontAwesomeIcon>
                                            </div>
                                            <div className="price_box__feature-text">Smart data import</div>
                                        </div>
                                        <div className="price-box__feature-list">
                                            <div className={`price_box__feature-icon ${plan.features.luminSense !== false ? plan.checkmarkColor : "bg-gray-400"}`}>
                                                <FontAwesomeIcon icon={plan.features.luminSense ? faCheck : faXmark}></FontAwesomeIcon>
                                            </div>
                                            <div className="price_box__feature-text">Lumin Sense</div>
                                        </div>
                                        <div className="price-box__feature-list">
                                            <div className={`price_box__feature-icon ${plan.features.vision !== false ? plan.checkmarkColor : "bg-gray-400"}`}>
                                                <FontAwesomeIcon icon={plan.features.vision ? faCheck : faXmark}></FontAwesomeIcon>
                                            </div>
                                            <div className="price_box__feature-text">Vision</div>
                                        </div>
                                        <div className="price-box__feature-list">
                                            <div className={`price_box__feature-icon ${plan.features.dataAnalytics !== false ? plan.checkmarkColor : "bg-gray-400"}`}>
                                                <FontAwesomeIcon icon={plan.features.dataAnalytics ? faCheck : faXmark}></FontAwesomeIcon>
                                            </div>
                                            <div className="price_box__feature-text">Data analytics</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <section id="key-features" className="relative bg-main-bg-lumin mt-3 flex flex-col items-center">
                <div className="fixed absolute top-0 right-0 z-0">
                    <img className="h-[600px]" src="/luminpricing_assets/Ellipse 3.png"></img>
                </div>
                <div className="fixed absolute top-44 left-0 z-0">
                    <img className="h-[600px]" src="/luminpricing_assets/Ellipse 4.png"></img>
                </div>
                <div className="text-center font-bold text-4xl">Our Key Features</div>
                <div className="mt-3 flex flex-row flex-wrap lg:w-[1000px] xl:w-[1300px] items-center justify-center">
                    {
                        features.map((feature) => {
                            return (
                                <div className="z-40 rounded-3xl bg-[#F1F7FF] border border-[#8F8F8F] h-[300px] w-[400px] m-3 p-5 hover:shadow-xl">
                                    <div className="w-16 h-16 my-3"></div>
                                    <div className="text-2xl font-semibold text-main-dark-blue py-3">{feature.name}</div>
                                    <div className="text-lg text-arxero-text-gray leading-tight">{feature.desc}</div>
                                </div>
                            )
                        }
                    )
                    }
                </div>
            </section>
            <section id="performance-metrics" className="relative bg-dark-blue-2 min-h-min mt-12 py-8 flex flex-col items-center justify-center">
                <div className="fixed absolute top-80 lg:top-24 left-0">
                    <img className="h-[600px]" src="/luminpricing_assets/Ellipse 1.png"></img>
                </div>
                <div className="fixed absolute top-0 right-0">
                    <img className="h-[600px]" src="/luminpricing_assets/Ellipse 2.png"></img>
                </div>
                <div className="text-center text-transparent bg-clip-text bg-gradient-to-r from-grad-1-start via-grad-1-mid to-grad-1-end text-4xl font-bold p-2 mb-8">Key System Metrics</div>
                <div className="flex flex-row flex-wrap items-center justify-center min-w-min xl:w-[1000px]">
                    {
                        keyMetrics.map((metric) => {
                            return (
                                <div className="rounded-3xl bg-glowing-radial-box from-grad-3-start via-grad-3-end to-grad-3-end bg-opacity-20 border border-[#20214A] h-[220px] w-[90%] lg:w-[450px] m-1 p-8 hover:shadow-xl">
                                    <div className="w-12 h-12"><img src={metric.icon}></img></div>
                                    <div className="text-xl font-bold text-[#313970] py-1">{metric.name}</div>
                                    <div className="text-lg text-[#505579] leading-tight">{metric.desc}</div>
                                </div>
                            )
                        }
                    )
                    }
                </div>
            </section>
            <section className="bg-main-bg-arxero w-screen h-[480px] md:h-[360px] relative inline-block max-w-full flex flex-col justify-center md:justify-start">
                <div className="fixed absolute -top-12 right-0">
                    <img className="h-[500px]" src="/luminpricing_assets/Ellipse 5.png"></img>
                </div>
                <div className="fixed absolute top-0 left-0">
                    <img className="h-[600px]" src="/luminpricing_assets/Ellipse 6.png"></img>
                </div>
                <div className="w-full flex flex-col items-center justify-start pt-14 px-8">
                    <div className="text-main-dark-blue font-bold text-4xl md:text-5xl text-center ">Ready to get started?</div>
                    <div className="text-main-dark-blue text-wrap text-xl font-light w-2/3 lg:w-1/3 text-center pt-8">
                    Choose the plan that best fits your business needs and start your journey with <span className="font-bold">Lumin</span> today. 
                    </div>
                    <div className="flex flex-row mt-8">
                        <div className="mx-2 w-44 h-14 bg-white hover:bg-gray-200 transition-all rounded-xl flex flex-row items-center cursor-pointer">
                            <div><img src="/lumin_icon.png" className="w-8 ml-5"></img></div>
                            <div className="ml-auto pr-4 lumin-grad-text text-xl font-bold">Ask Lumin</div>
                        </div>

                        <div className="mx-2 w-44 h-14 bg-blue-600 hover:bg-blue-800 transition-all rounded-xl flex flex-row items-center cursor-pointer">
                            <div className="ml-4"><FontAwesomeIcon icon={faWhatsapp} color="white" className="text-4xl"></FontAwesomeIcon></div>
                            <div className="ml-auto pr-4 text-white text-xl font-bold">Contact Us</div>
                        </div>
                    </div>
                </div>
            </section> 
            <Footer></Footer>
        </div>
    )
}