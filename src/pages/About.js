import Footer from "../components/Footer";
import HeaderArxero from "../components/HeaderArxero";

import joinUsIcon from "../assets/lottie/join_us.json";
import Lottie from "react-lottie";
import { useEffect } from "react";

export default function About() {
    useEffect(() => {
        document.title = 'Arxero | About'; // Quick solution
    }, []);
    return (
        <div className="bg-main-bg-arxero min-h-max ">
            <HeaderArxero active="About Us"></HeaderArxero>
            <section id="about-arxero" className="h-[calc(100%-7rem)] p-12 md:p-16 lg:p-24 xl:p-32">
                <div className="flex">
                    <div className="w-full md:w-4/5 lg:w-3/4 xl:w-1/2">
                        <div className="text-xl font-semibold">About Arxero</div>
                        <div className="mt-2 text-3xl lg:text-5xl font-bold w-full xl:w-[700px]">
                            Empowering Digital Transformation in Indonesia and Beyond
                        </div>
                        <div className="mt-10 text-lg arxero-text-gray">
                            <div>
                                Arxero Technologies is dedicated to pushing state-of-the-art solutions 
                                for modern business needs. Our company specializes in developing advanced 
                                technological solutions that address the unique challenges faced by contemporary 
                                businesses. We aim to empower businesses to grow and thrive in today’s competitive 
                                landscape through our innovative products and services.
                            </div>
                            <div className="mt-3">
                                From AI-driven customer service platforms to advanced data analytics and automation 
                                tools, we offer a range of products tailored to meet the specific needs of our clients. 
                                We are committed to maintaining the highest standards of data privacy and security, 
                                ensuring that our clients can trust us with their valuable information. 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="meet-our-team" className="relative bg-dark-blue-2 min-h-max w-full px-12 xl:px-20 pt-20 py-24 flex flex-wrap xl:flex-nowrap">
                <div className="fixed absolute -top-10 right-0">
                    <img className="h-[600px]" src="/about_assets/Ellipse 3.png"></img>
                </div>
                <div className="fixed absolute -top-5 left-0">
                    <img className="h-[600px]" src="/about_assets/Ellipse 2.png"></img>
                </div>
                <div className="lg:w-[60%] xl:w-1/3 lg:pr-12">
                    <div className="text-3xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-grad-1-start via-grad-1-mid to-grad-1-end">Meet Our Team</div>
                    <div className="mt-8 lg:mt-16 text-lg lg:text-xl text-arxero-text-light-gray w-full">
                        Founded by three undergraduates from CUHK Shenzhen, our team brings together 
                        a unique blend of passion, innovation, and expertise. We strive to transform 
                        ideas into impactful solutions, driven by our diverse skills and shared vision.
                    </div>
                </div>
                <div className="flex flex-wrap w-full z-40 mt-10 xl:mt-0 justify-center align-center">
                    <div className="mt-6 mr-1 w-[280px] flex flex-col items-center">
                        <div className="bg-white h-[250px] w-[200px] lg:h-[300px] lg:w-[250px] rounded-3xl"></div>
                        <div className="mt-3 text-arxero-text-light-gray text-center text-lg font-semibold">Alfonsus Rodriques Rendy</div>
                        <div className="text-gray-500 text-center"> Co-Founder, Technical & Design</div>
                    </div>
                    <div className="mt-6 mr-1 w-[280px] flex flex-col items-center">
                        <div className="bg-white h-[250px] w-[200px] lg:h-[300px] lg:w-[250px] rounded-3xl"></div>
                        <div className="mt-3 text-arxero-text-light-gray text-center text-lg font-semibold">Stephen Kowinto</div>
                        <div className="text-gray-500 text-center"> Co-Founder, Business & Operations</div>
                    </div>
                    <div className="mt-6 w-[280px] flex flex-col items-center">
                        <div className="bg-white h-[250px] w-[200px] lg:h-[300px] lg:w-[250px] rounded-3xl"></div>
                        <div className="mt-3 text-arxero-text-light-gray text-center text-lg font-semibold">Nicholas Oh</div>
                        <div className="text-gray-500 text-center"> Co-Founder, Technical & Product</div>
                    </div>
                </div>
            </section>
            <section id="join-us" className="relative bg-main-bg-arxero flex flex-wrap lg:flex-nowrap min-h-max px-12 lg:px-32 pt-20 pb-10 items-center justify-center" >
                <div className="fixed absolute -top-10 right-0">
                    <img className="h-[600px]" src="about_assets/Ellipse 1.png"></img>
                </div>
                <div className="w-full lg:w-1/2 xl:w-2/5 h-full">
                    <div className="text-2xl font-semibold">Grow With Arxero</div>
                    <div className="mt-3 text-3xl lg:text-4xl font-bold">Join Us Now and Unlock Your Potential</div>
                    <div className="mt-5 text-lg text-arxero-text-gray">
                    We are always on the lookout for talented individuals who share our passion for innovation and technology. 
                    We offer internships and career opportunities for those eager to contribute to our mission and 
                    help expand our company. Join us on our journey to make a difference through innovation.
                    </div>
                </div>
                <div className="hidden lg:block ml-auto xl:mr-20 h-full mb-28">
                <Lottie options={{
                        loop: true,
                        autoplay: true,
                        animationData: joinUsIcon,
                        rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice"
                        }
                }} 
                width={450}></Lottie>
                </div>
                <div className="lg:hidden h-full mb-28">
                <Lottie options={{
                        loop: true,
                        autoplay: true,
                        animationData: joinUsIcon,
                        rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice"
                        }
                }} 
                width={350}></Lottie>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}