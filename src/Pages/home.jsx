import { useMediaQuery } from "react-responsive";
import Navbar from "../components/Layouts/Navbar";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import React from 'react';

MyLink.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
};
// Fungsi komponen MyLinkMobile
function MyLink({ to, title, src }) {
    return (
        <Link to={to} className="mb-2">
            <img className="rounded-lg shadow-md" src={src} alt={title} />
        </Link>
    );
}



const HomePage = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1225px)'
    });
    
    const isTablets = useMediaQuery({
        query: '(min-width: 769px) and (max-width: 1224px)'
    });
    
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    });

    const [copied, setCopied] = React.useState(false);
    const copyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500); 
    }
    

    return (
        <>
            {/* Render hanya jika Desktop or Laptop */}
            {isDesktopOrLaptop && 
                <div>
                    <Navbar></Navbar>
                    <div className="flex mx-5">
                        <img src="/hero.png" alt="" className="w-[600px]"/>
                        <div className="mt-32">
                            <h3 className="font-bold text-2xl mb-1">Hey There,</h3>
                            <h1 className="font-bold text-5xl mb-1">I am <span className="font-bold">Rahmat</span></h1>
                            <h3 className="font-medium text-3xl mb-1">Front End Web Developer and UI/UX Design</h3>
                            <h4 className="font-medium text-2xl mb-1">But i also like to code some time</h4>
                            <div className="mt-4 flex">
                                <Link to="/contact" className="inline-block px-6 py-3 text-white bg-teal-600 rounded-md shadow-md hover:bg-teal-700 transition-colors duration-300">Schedule a Call</Link>
                                <div className="inline-block cursor-pointer px-6 py-3 mx-4 text-white bg-teal-600 rounded-md shadow-md hover:bg-teal-700 transition-colors duration-300" onClick={copyToClipboard}>
                                    {copied ? 'Copied!' : 'Share My Portfolio'}
                                </div>
                            </div>

                            <div className="mt-10">
                                <div className="flex justify-between my-5">
                                    <h3 className="font-medium">Latest Work</h3>
                                    <Link to={"/mywork"} className="text-blue-600 font-bold">View All</Link>
                                </div>
                                <div className="grid grid-cols-4 gap-5">
                                    <MyLink to={"https://www.figma.com/file/QNssRyC774p6Hm7zAv9gCO/Untitled?type=design&node-id=0%3A1&mode=dev&t=1CxNULQzGT9xOMIB-1"} src={"/work1.png"} title={"Gambar Work 1"}/>
                                    <MyLink to={"https://www.figma.com/file/AcYQPk70a71gfBFeZ9M7DA/Untitled?type=design&mode=dev&t=Mh9WZbGHmoRa9RRr-1"} src={"/work2.png"} title={"Gambar Work 2"}/>
                                    <MyLink to={"https://www.figma.com/file/H2ypv960djsEcViWxX7gJn/E-commerce-MatStore?type=design&mode=dev&t=Mh9WZbGHmoRa9RRr-1"} src={"/work3.png"} title={"Gambar Work 3"}/>
                                    <MyLink to={"https://www.figma.com/file/C57h1jE1YFkqjuPws7sbbn/Untitled?type=design&node-id=0%3A1&mode=dev&t=Mh9WZbGHmoRa9RRr-1"} src={"/work4.png"} title={"Gambar Work 4"}/>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            }

            {/* Render hanya jika Tablets */}
            {isTablets && 
                <div>
                    <Navbar />
                    <div className="flex mx-5 mt-20 h-[400px] bg-white rounded-lg shadow-lg">
                        <img src="/hero.png" alt="" className="w-[350px] mx-auto"/>
                        <div className="mt-36 mx-auto">
                            <h3 className="font-medium text-xl">Hey There,</h3>
                            <h1 className="font-bold text-3xl">I am <span className="font-bold">Rahmat</span></h1>
                            <h3 className="font-medium bg-yellow-300 rounded-sm pl-1">Front End Web Developer and UI/UX Design</h3>
                            <h4 className="font-medium">But I also like to code sometimes</h4>
                            <div className="mt-4">
                                <Link to="/contact" className="inline-block px-6 py-3 text-white bg-teal-600 rounded-md shadow-md hover:bg-teal-700 transition-colors duration-300">Schedule a Call</Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between px-5 mt-10">
                        <h3 className="font-medium mb-10">Latest Work</h3>
                        <Link to={"/mywork"} className="text-blue-600 font-bold mb-10">View All</Link>
                    </div>
                    <div className="grid grid-cols-3 gap-10 mx-5 mb-[60px]">
                        <MyLink to={"https://www.figma.com/file/QNssRyC774p6Hm7zAv9gCO/Untitled?type=design&node-id=0%3A1&mode=dev&t=1CxNULQzGT9xOMIB-1"} src={"/work1.png"} title={"Gambar Work 1"}/>
                        <MyLink to={"https://www.figma.com/file/AcYQPk70a71gfBFeZ9M7DA/Untitled?type=design&mode=dev&t=Mh9WZbGHmoRa9RRr-1"} src={"/work2.png"} title={"Gambar Work 2"}/>
                        <MyLink to={"https://www.figma.com/file/H2ypv960djsEcViWxX7gJn/E-commerce-MatStore?type=design&mode=dev&t=Mh9WZbGHmoRa9RRr-1"} src={"/work3.png"} title={"Gambar Work 3"}/>
                        <MyLink to={"https://www.figma.com/file/C57h1jE1YFkqjuPws7sbbn/Untitled?type=design&node-id=0%3A1&mode=dev&t=Mh9WZbGHmoRa9RRr-1"} src={"/work4.png"} title={"Gambar Work 4"}/>
                        <MyLink to={"https://www.figma.com/file/AcYQPk70a71gfBFeZ9M7DA/Untitled?type=design&mode=dev&t=Mh9WZbGHmoRa9RRr-1"} src={"/work2.png"} title={"Gambar Work 5"}/>
                        <MyLink to={"https://www.figma.com/file/C57h1jE1YFkqjuPws7sbbn/Untitled?type=design&node-id=0%3A1&mode=dev&t=Mh9WZbGHmoRa9RRr-1"} src={"/work4.png"} title={"Gambar Work 6"}/>
                        
                    </div>
                </div>
            }

            {/* Render hanya jika mobile */}
            {isMobile && 
                <div>
                    <Navbar />
                    <div className="mx-5 mt-10 mb-5">
                        <div className="bg-white rounded-lg shadow-lg">
                            <div className="p-6 text-center">
                                <style>{`@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');`}</style>
                                <img src="/hero.png" alt="hero" className="max-w-[280px] mx-auto mb-4"/>
                                <h3 className="font-medium text-xl mt-2">Hey There,</h3>
                                <h1 className="font-bold text-2xl text-teal-600" style={{ fontFamily: 'Oswald, sans-serif' }}>I am <span className="text-3xl">Rahmat</span></h1>
                                <h3 className="font-medium bg-yellow-300 rounded-sm px-2 py-1 mt-4">Front End Web Developer and UI/UX Design</h3>
                                <h4 className="font-medium mt-2">But I also like to code sometimes</h4>
                                <div className="mt-4">
                                    <Link to="/contact" className="inline-block px-6 py-3 text-white bg-teal-600 rounded-md shadow-md hover:bg-teal-700 transition-colors duration-300">Schedule a Call</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="flex justify-between px-5">
                        <h3 className="font-medium">Latest Work</h3>
                        <Link to={"/mywork"} className="text-blue-600 font-bold">View All</Link>
                    </div>
                    <div className="grid grid-cols-2 gap-5 mx-5 mb-[60px]">
                        <MyLink to={"https://www.figma.com/file/QNssRyC774p6Hm7zAv9gCO/Untitled?type=design&node-id=0%3A1&mode=dev&t=1CxNULQzGT9xOMIB-1"} src={"/work1.png"} title={"Gambar Work 1"}/>
                        <MyLink to={"https://www.figma.com/file/AcYQPk70a71gfBFeZ9M7DA/Untitled?type=design&mode=dev&t=Mh9WZbGHmoRa9RRr-1"} src={"/work2.png"} title={"Gambar Work 2"}/>
                        <MyLink to={"https://www.figma.com/file/H2ypv960djsEcViWxX7gJn/E-commerce-MatStore?type=design&mode=dev&t=Mh9WZbGHmoRa9RRr-1"} src={"/work3.png"} title={"Gambar Work 3"}/>
                        <MyLink to={"https://www.figma.com/file/C57h1jE1YFkqjuPws7sbbn/Untitled?type=design&node-id=0%3A1&mode=dev&t=Mh9WZbGHmoRa9RRr-1"} src={"/work4.png"} title={"Gambar Work 4"}/>
                        
                    </div>
            </div> 
            }
        </>
    )
}

export default HomePage;

