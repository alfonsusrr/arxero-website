import { useEffect } from "react";
import Footer from "../components/Footer";
import HeaderArxero from "../components/HeaderArxero";
import "./Home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


export default function Home() {
    useEffect(() => {
        document.title = 'Arxero Technologies';
    }, []);
    return (
        <div className="bg-main-bg-arxero min-h-max w-screen">
            <HeaderArxero active="Homepage"></HeaderArxero>
            <div className="w-full h-[calc(100vh-7rem)] select-none">
                {/* Welcome Section */}
                <div className="fixed absolute top-24">
                    <img className="h-[600px]" src="/homepage_assets/Ellipse 2.png"></img>
                </div>
                <div className="fixed absolute top-28 right-0">
                    <img className="h-[600px]" src="/homepage_assets/Ellipse 3.png"></img>
                </div>
                <div className="flex flex-row relative h-full">
                    <div className="my-auto pl-8 lg:pl-16 xl:pl-24 font-bold  text-2xl sm:text-4xl xl:text-4xl w-[90%] md:w-[70%] lg:w-[55%] xl:w-[55%] mt-16md:mt-32">
                        <div className="py-6 xl:py-7">
                            <div className="relative inline-block text-[#0063FE] my-1">
                                <span className="relative z-10 animate-fade">From Insight to Impact</span>
                                <span className="absolute top-5 md:top-6 left-[-0.25em] w-[110%] h-[0.6em] bg-[#BAD5FF] animate-fade-right animate-duration-[1s] animate-delay-[80ms] animate-ease-in-out"></span>
                            </div>
                            <div className="animate-fade">We Are Empowering</div>
                            <div className="animate-fade">your Digital Transformation</div>
                        </div>
                        <div className="lg:mt-8 xl:mt-28 border-b border-[#8F8F8F] mr-8"></div>
                        <div className="flex flex-row flex-wrap xl:flex-nowrap py-14 mr-8 w-[70%]">
                            <div className="w-full xl:w-1/2 p-3">
                                <div className="text-2xl">VISION</div>
                                <div className="text-base mt-4 font-normal">
                                    To be a leading technology company that transforms business operations 
                                    through innovative and scalable solutions, driving efficiency and growth 
                                    for our clients worldwide.
                                </div>
                            </div>
                            <div className="w-full xl:w-1/2 p-3">
                                <div className="text-2xl">MISSION</div>
                                <div className="text-base mt-4 font-normal">
                                    To push state-of-the-art solutions for modern business needs, 
                                    empowering companies to thrive in an ever-evolving technological landscape.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-auto absolute bottom-0 right-0 lg:block hidden">
                        <img className="h-[200px] lg:h-[310px] xl:h-[350px] object-cover rounded-tl-5xl" src="/homepage_assets/Placeholder 1.png"></img>
                        <div className="absolute bottom-0 right-0 w-[400px] h-[200px] bg-[#0C2566] bg-opacity-50 rounded-tl-3xl p-8 backdrop-blur-sm">
                            <div className="text-white font-semibold text-2xl opacity-100">
                                Ready for Transform Your Business With Us?
                            </div>
                            <div className="group mt-8 rounded-full w-40 h-12 p-2 text-center text-lg text-white font-semibold bg-gradient-to-r from-lumin-grad-start via-lumin-grad-mid to-lumin-grad-end hover:via-lumin-grad-end hover:to-lumin-grad-mid cursor-pointer">
                                Get Started <FontAwesomeIcon icon={faArrowRight} className="ml-1 group-hover:translate-x-1"></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Tagline Section */}
            <section className="bg-dark-blue-2 relative min-h-max py-24 px-16 lg:px-36">
                <div className="fixed absolute top-3 left-0">
                    <img className="h-[600px]" src="/homepage_assets/Ellipse 4.png"></img>
                </div>
                <div className="fixed absolute top-2 right-0">
                    <img className="h-[600px]" src="/homepage_assets/Ellipse 5.png"></img>
                </div>
                <div className="flex">
                    <div className="w-4/5 lg:w-2/5">
                        <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-grad-1-start via-grad-1-mid to-grad-1-end">
                            Your Technology Partner for Business Success
                        </div>
                        <div className="text-lg lg:text-xl text-white pt-16">
                            At Arxero Technologies, we are driven by a passion for innovation and a commitment 
                            to excellence. We specialize in developing cutting-edge solutions tailored to meet 
                            the evolving demands of today's businesses.
                        </div>
                    </div>
                </div>
            </section>
            {/* Key Features Section */}
            <section className="min-h-min pt-12 bg-main-bg-arxero flex flex-col justify-center items-center">
                <div className="font-semibold text-3xl text-center px-10 lg:w-1/3 mx-auto">
                    Accelerate Your Business Growth with Modern Technology
                </div>
                <div className="mt-4 text-lg text-center px-10 lg:w-1/2 mx-auto text-arxero-text-gray">
                    Our AI-driven customer service platforms, advanced data analytics, 
                    and automation tools enhance efficiency and customer engagement. 
                    Partner with us to stay ahead in a competitive landscape and accelerate your business growth.
                </div>

                <div className="z-40 mt-6 flex flex-row flex-wrap xl:flex-nowrap items-center justify-center text-center w-4/5 lg:w-[700px] xl:w-[90%] z-30">
                    <div className="feature-box">
                        <div className="font-semibold text-2xl">
                            24/7 Expert Support
                        </div>
                        <div className="text-arxero-text-gray mt-3">
                            Our team is ready around the clock to assist you with any inquiries or issues
                        </div>
                    </div>
                    <div className="feature-box">
                        <div className="font-semibold text-2xl">
                            Step-by-Step Guidance
                        </div>
                        <div className="text-arxero-text-gray mt-3">
                            Follow detailed video walkthroughs and guides to seamlessly integrate our technology
                        </div>
                    </div>
                    <div className="feature-box">
                        <div className="font-semibold text-2xl">
                        Business Analysis
                        </div>
                        <div className="text-arxero-text-gray mt-3">
                        In-depth analysis to understand your business challenges and tailor our solutions to drive growth and efficiency.
                        </div>
                    </div>
                    <div className="feature-box z-40">
                        <div className="font-semibold text-2xl">
                        State-of-the-Art Solutions
                        </div>
                        <div className="text-arxero-text-gray mt-3">
                        Benefit from cutting-edge advancements designed to optimize your business operations
                        </div>
                    </div>
                </div>
                
                <div className="mt-8 md:mt-24 lg:mt-32 xl:mt-40 flex relative pb-24">
                    <div className="fixed absolute -top-[300px] left-0 z-0">
                        <img className="h-[1000px]" src="/homepage_assets/Ellipse 6.png"></img>
                    </div>
                    <div className="fixed absolute -top-[400px] right-0 z-0">
                        <img className="h-[1000px]" src="/homepage_assets/Ellipse 7.png"></img>
                    </div>
                    <div className="hidden md:block md:w-[50%] lg:w-[65%]"></div>
                    <div className="z-40 p-8">
                        <div className="text-4xl md:text-5xl font-bold w-full md:w-[70%] leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-grad-2-start to-grad-2-end">Driving Growth </span>
                            with Data Analytics and Automation
                        </div>
                        <div className="w-full lg:w-[75%] mt-8 text-lg">
                            <div>
                                <span className="font-bold">Arxero Technologies</span> specializes in 
                                developing advanced technological solutions that 
                                address the unique challenges faced by modern businesses. 
                            </div>
                            <div className="mt-4">
                                From AI-driven customer service platforms to data analytics and automation tools, 
                                we offer a range of products designed to enhance operational efficiency, improve 
                                customer engagement, and drive business growth.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Product Catalogues */}
            <section className="relative bg-dark-blue-2 w-full min-h-max p-16 lg:p-24 z-50" id="services">
                <div className="fixed absolute top-64 -left-7 z-10">
                    <img className="h-[500px]" src="/homepage_assets/Ellipse 8.png"></img>
                </div>
                <div className="fixed absolute top-10 right-0">
                    <img className="h-[500px]" src="/homepage_assets/Ellipse 9.png"></img>
                </div>
                <Link to="/lumin" reloadDocument className="z-20 flex flex-wrap items-center bg-white rounded-3xl border border-dark-blue-2-stroke min-h-max py-12 px-12 lg:px-16  bg-glowing-radial-box hover:bg-glowing-radial-box-raised from-grad-3-start via-grad-3-end to-grad-3-end bg-opacity-20 cursor-pointer transition-all">
                    <div className="text-[#05BCE6] text-3xl lg:text-4xl lg:text-6xl font-bold w-[38%] my-3">
                        <img className="w-12 inline-block mr-3 mb-4" src="lumin_icon.png"></img>
                        Lumin
                    </div>
                    <div className="mt-4 lg:mt-0 text-white text-lg lg:text-xl md:ml-auto w-[300px] md:text-right">
                        Automated intelligent customer service built with state-of-the-art technology
                    </div>
                </Link>
                <div className="z-20 select-none mt-4 flex flex-wrap items-center bg-white rounded-3xl border border-dark-blue-2-stroke min-h-max py-12 px-12 lg:px-16 bg-glowing-radial-box hover:bg-glowing-radial-box-raised from-grad-3-start via-grad-3-end to-grad-3-end bg-opacity-20 transition-all">
                    <div className="text-center w-full text-transparent bg-clip-text bg-gradient-to-r from-grad-4-start via-grad-4-mid to-grad-4-end z-30">
                        <div className="text-lg md:text-3xl font-light">
                            New Products are
                        </div>
                        <div className="text-2xl md:text-4xl lg:text-6xl font-bold h-20">
                            Coming Soon (｡•̀ᴗ-)✧
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="min-h-max h-[400px] md:h-[300px] bg-dark-blue-2 w-full flex flex-col justify-center items-center">
                <div className="text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-grad-1-start via-grad-1-mid to-grad-1-end font-semibold">
                    Arxero
                </div>
                <div className="mt-2 text-white text-3xl lg:text-4xl font-bold text-center mx-12">
                    One-Stop Digital Solution for All Your Business Needs
                </div>
                <div className="group mt-6 w-[170px] md:w-[250px] border-2 hover:bg-[#434591] hover:bg-opacity-30 border-[#434591] text-[#434591] h-[60px] md:h-[65px] rounded-full text-center py-3 text-xl md:text-2xl font-semibold cursor-pointer">
                    Get Started <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-all"></FontAwesomeIcon>
                </div>
            </section>
            <Footer/>
        </div>
    )
}