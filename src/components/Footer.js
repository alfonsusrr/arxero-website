import { faFacebook, faInstagramSquare, faSquareXTwitter, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Footer.css"
import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <div>
            <div className="w-full xl:h-[400px] 2xl:h-[380px] bg-pastel-blue flex flex-row justify-start items-start p-8">
                <div className="mx-5 lg:mx-0 w-[360px] lg:w-[280px] 2xl:w-1/4 flex flex-col items-start">
                    <div className="w-32">
                        <img src="arxero_light_1.png"></img>
                    </div>
                    <div className="mt-12 lg:mt-48 flex flex-row">
                        <div className="social-btn"><img src="/icon/Facebook.svg"></img></div>
                        <div className="social-btn"><img src="/icon/Instagram.svg"></img></div>
                        <div className="social-btn"><img src="/icon/TwitterX.svg"></img></div>
                        <div className="social-btn"><img src="/icon/TikTok.svg"></img></div>
                    </div>
                </div>

                <div className="lg:block hidden flex flex-col w-72">
                    <div className="footer-section">
                        <div className="footer-heading">Products</div>
                        <div className="footer-text"><Link to="/lumin">Arxero Lumin</Link></div>
                        <div className="footer-text"><Link to="/nitrous">Nitrous Developments</Link></div>
                    </div>
                    <div className="footer-section">
                        <div className="footer-heading">Solutions</div>
                        <div className="footer-text">Automated Customer Service</div>
                        <div className="footer-text">Smart Conversation Analysis</div>
                        <div className="footer-text">Agile Software Development</div>
                        <div className="footer-text">Data-driven Business Solutions</div>
                    </div>
                </div>

                <div className="lg:block hidden flex flex-col w-72">
                    <div className="footer-section">
                        <div className="footer-heading">Resources</div>
                        <div className="footer-text">Our Blog</div>
                        <div className="footer-text">Help Center</div>
                        <div className="footer-text">Terms and Conditions</div>
                        <div className="footer-text">Privacy Policy</div>
                    </div>
                    <div className="footer-section">
                        <div className="footer-heading">Company</div>
                        <div className="footer-text"><Link to="/about">About Us</Link></div>
                        <div className="footer-text"><Link to="/contact">Contact Support</Link></div>
                    </div>
                </div>
                <div className="md:block hidden lg:mt-0 xl:mt-11 ml-0 xl:ml-2 2xl:ml-2 w-full lg:w-auto">
                    <div className="text-2xl xl:text-3xl font-bold">Subscribe to Our Newsletter</div>
                    <div className="flex flex-row mt-4 flex-wrap">
                        <input className="lg:w-full xl:w-[200px] 2xl:w-[250px] h-[50px] lg:h-[60px] border-input-border-light border-2 rounded-lg bg-input-fill-light p-3 outline-none text-main-dark-blue" placeholder="Your Name"></input>
                        <input className="lg:w-full ml-2 lg:ml-0 lg:mt-3 xl:mt-0 xl:ml-3 xl:w-[200px] 2xl:w-[250px] h-[50px] lg:h-[60px] border-input-border-light border-2 rounded-lg bg-input-fill-light p-3 outline-none text-main-dark-blue" placeholder="Your Email"></input>
                    </div>
                    <div className="transition-all cursor-pointer mt-4 bg-sec-dark-blue hover:bg-main-dark-blue rounded-full w-[160px] h-[50px] py-2 text-white text-center font-semibold text-lg">Subscribe</div>

                    <div className="lg:block hidden mt-2 lg:mt-12 text-sm xl:text-lg text-gray-400">
                     © Copyright Arxero Technologies 2024. All Rights Reserved  
                    </div>
                </div>
            </div>
            <div className="pt-10 lg:hidden block flex flex-row flex-wrap px-16 bg-pastel-blue">
                <div className="flex flex-col w-1/2">
                    <div className="footer-section">
                        <div className="footer-heading">Products</div>
                        <div className="footer-text"><Link to="/lumin">Arxero Lumin</Link></div>
                        <div className="footer-text"><Link to="/nitrous">Nitrous Developments</Link></div>
                    </div>
                    <div className="footer-section">
                        <div className="footer-heading">Solutions</div>
                        <div className="footer-text">Automated Customer Service</div>
                        <div className="footer-text">Smart Conversation Analysis</div>
                        <div className="footer-text">Agile Software Development</div>
                        <div className="footer-text">Data-driven Business Solutions</div>
                    </div>
                </div>
                <div className="flex flex-col w-1/2 pl-5">
                    <div className="footer-section">
                        <div className="footer-heading">Resources</div>
                        <div className="footer-text">Our Blog</div>
                        <div className="footer-text">Help Center</div>
                        <div className="footer-text">Terms and Conditions</div>
                        <div className="footer-text">Privacy Policy</div>
                    </div>
                    <div className="footer-section">
                        <div className="footer-heading">Company</div>
                        <div className="footer-text"><Link to="/about">About Us</Link></div>
                        <div className="footer-text"><Link to="/contact">Contact Support</Link></div>
                    </div>
                </div>
            </div>
            <div className="md:hidden block w-full bg-pastel-blue px-16 pt-10">
                <div className="text-2xl xl:text-3xl font-bold">Subscribe to Our Newsletter</div>
                <div className="flex flex-row mt-4 flex-wrap">
                    <input className="w-full h-[50px] border-input-border-light border-2 rounded-lg bg-input-fill-light p-3 outline-none text-main-dark-blue" placeholder="Your Name"></input>
                    <input className="w-full h-[50px] mt-2 border-input-border-light border-2 rounded-lg bg-input-fill-light p-3 outline-none text-main-dark-blue" placeholder="Your Email"></input>
                </div>
                <div className="transition-all cursor-pointer mt-4 bg-sec-dark-blue hover:bg-main-dark-blue rounded-full w-[160px] h-[50px] py-2 text-white text-center font-semibold text-lg">Subscribe</div>
            </div>
            <div className="lg:hidden block text-sm text-gray-400 px-16 py-10 bg-pastel-blue">
                 © Copyright Arxero Technologies 2024. All Rights Reserved  
            </div>
        </div>
    )
}