import { useEffect } from "react";
import Footer from "../components/Footer";
import HeaderArxero from "../components/HeaderArxero";
import "./Home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


export default function Home() {
    useEffect(() => {
        document.title = 'Arxero | Home'; // Quick solution
    }, []);
    return (
        <div className="bg-main-bg-arxero h-screen max-w-full min-w-full">
            <HeaderArxero active="Homepage"></HeaderArxero>
            <div className="w-full h-[calc(100%-7rem)] select-none">
                {/* Welcome Section */}
                <div className="fixed absolute top-24">
                    <img className="h-[600px]" src="homepage_assets/Ellipse 2.png"></img>
                </div>
                <div className="fixed absolute top-28 right-0">
                    <img className="h-[600px]" src="homepage_assets/Ellipse 3.png"></img>
                </div>
                <div className="flex flex-row relative items-end h-full">
                    <div className="my-auto pl-18 xl:pl-24 font-bold sm:text-3xl md:text-4xl xl:text-5xl w-[55%] mt-32">
                        <div className="py-7">
                            <div className="relative inline-block text-[#0063FE] my-3">
                                <span className="relative z-10 animate-fade">From Insight to Impact</span>
                                <span className="absolute top-8 left-[-0.25em] w-[110%] h-[0.6em] bg-[#BAD5FF] animate-fade-right animate-duration-[1s] animate-delay-[80ms] animate-ease-in-out"></span>
                            </div>
                            <div className="my-2 animate-fade">We Are Empowering</div>
                            <div className="my-2 animate-fade">your Digital Transformation</div>
                        </div>
                        <div className="mt-28 border-b border-[#8F8F8F] mr-8"></div>
                        <div className="flex flex-row pt-14 mr-8">
                            <div className="w-1/2 px-3">
                                <div className="text-2xl">VISION</div>
                                <div className="text-base mt-6 font-normal">
                                    To be a leading technology company that transforms business operations 
                                    through innovative and scalable solutions, driving efficiency and growth 
                                    for our clients worldwide.
                                </div>
                            </div>
                            <div className="w-1/2 px-3">
                                <div className="text-2xl">MISSION</div>
                                <div className="text-base mt-6 font-normal">
                                    To push state-of-the-art solutions for modern business needs, 
                                    empowering companies to thrive in an ever-evolving technological landscape.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-auto right-0">
                        <img className="" src="homepage_assets/Placeholder 1.png"></img>
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
            <section className="bg-dark-blue-2 relative h-[450px] py-24 px-36">
                <div className="fixed absolute top-3 left-0">
                    <img className="h-[600px]" src="homepage_assets/Ellipse 4.png"></img>
                </div>
                <div className="fixed absolute top-2 right-0">
                    <img className="h-[600px]" src="homepage_assets/Ellipse 5.png"></img>
                </div>
                <div className="flex">
                    <div className="w-2/5">
                        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-grad-1-start via-grad-1-mid to-grad-1-end">
                            Your Technology Partner for Business Success
                        </div>
                        <div className="text-xl text-white pt-16">
                            At Arxero Technologies, we are driven by a passion for innovation and a commitment 
                            to excellence. We specialize in developing cutting-edge solutions tailored to meet 
                            the evolving demands of today's businesses.
                        </div>
                    </div>
                </div>
            </section>
            {/* Key Features Section */}
            <section className="h-[1300px] pt-12 bg-main-bg-arxero">
                <div className="font-semibold text-3xl text-center w-1/3 mx-auto">
                    Accelerate Your Business Growth with Modern Technology
                </div>
                <div className="mt-4 text-lg text-center w-1/2 mx-auto text-arxero-text-gray">
                    Our AI-driven customer service platforms, advanced data analytics, 
                    and automation tools enhance efficiency and customer engagement. 
                    Partner with us to stay ahead in a competitive landscape and accelerate your business growth.
                </div>

                <div className="mt-6 flex flex-row items-center justify-center text-center mx-auto w-4/5 z-30">
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
                    <div className="feature-box">
                        <div className="font-semibold text-2xl">
                        State-of-the-Art Solutions
                        </div>
                        <div className="text-arxero-text-gray mt-3">
                        Benefit from cutting-edge advancements designed to optimize your business operations
                        </div>
                    </div>
                </div>
                
                <div className="mt-40 flex relative">
                    <div className="fixed absolute -top-[300px] left-0 z-10">
                        <img className="h-[1000px]" src="homepage_assets/Ellipse 6.png"></img>
                    </div>
                    <div className="fixed absolute -top-[400px] right-0 z-10">
                        <img className="h-[1000px]" src="homepage_assets/Ellipse 7.png"></img>
                    </div>
                    <div className="w-[65%]"></div>
                    <div>
                        <div className="text-5xl font-bold w-[70%] leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-grad-2-start to-grad-2-end">Driving Growth </span>
                            with Data Analytics and Automation
                        </div>
                        <div className="w-[75%] mt-8 text-lg">
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
            <section className="relative bg-dark-blue-2 w-full h-[640px] p-24" id="services">
                <div className="fixed absolute top-64 -left-7 z-10">
                    <img className="h-[500px]" src="homepage_assets/Ellipse 8.png"></img>
                </div>
                <div className="fixed absolute top-10 right-0">
                    <img className="h-[500px]" src="homepage_assets/Ellipse 9.png"></img>
                </div>
                <Link to="/lumin" reloadDocument className="z-20 flex items-center bg-white rounded-3xl border border-dark-blue-2-stroke h-[250px] bg-glowing-radial-box hover:bg-glowing-radial-box-raised from-grad-3-start via-grad-3-end to-grad-3-end bg-opacity-20 cursor-pointer transition-all">
                    <div className="ml-20 text-[#05BCE6] text-6xl font-bold">
                        <img className="w-12 inline-block mr-3 mb-4" src="lumin_icon.png"></img>
                        Lumin
                    </div>
                    <div className="text-white text-xl ml-auto w-[300px] text-right mr-10">
                        Automated intelligent customer service built with state-of-the-art technology
                    </div>
                </Link>
                <div className="z-20 select-none mt-4 flex items-center bg-white rounded-3xl border border-dark-blue-2-stroke h-[250px] bg-glowing-radial-box hover:bg-glowing-radial-box-raised from-grad-3-start via-grad-3-end to-grad-3-end bg-opacity-20 transition-all">
                    <div className="text-center w-full text-transparent bg-clip-text bg-gradient-to-r from-grad-4-start via-grad-4-mid to-grad-4-end z-30">
                        <div className="text-3xl font-light">
                            New Products are
                        </div>
                        <div className="text-6xl font-bold h-20">
                            Coming Soon (｡•̀ᴗ-)✧
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="xl:h-[300px] bg-dark-blue-2 w-full flex flex-col justify-center items-center">
                <div className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-grad-1-start via-grad-1-mid to-grad-1-end font-semibold">
                    Arxero
                </div>
                <div className="mt-2 text-white text-4xl font-bold">
                    One-Stop Digital Solution for All Your Business Needs
                </div>
                <div className="group mt-6 w-[250px] border-2 hover:bg-[#434591] hover:bg-opacity-30 border-[#434591] text-[#434591] h-[65px] rounded-full text-center py-3 text-2xl font-semibold cursor-pointer">
                    Get Started <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-all"></FontAwesomeIcon>
                </div>
            </section>
            <Footer/>
        </div>
    )
}