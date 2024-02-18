import { useMediaQuery } from "react-responsive";
import Navbar from "../components/Layouts/Navbar";
import { CarouselCustomNavigation } from "../components/Elements/CarouselCustomNavigation";

const AboutPage = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1225px)'
    });
    
    const isTablets = useMediaQuery({
        query: '(min-width: 769px) and (max-width: 1224px)'
    });
    
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    });

    return (
        <>
            {/* Render hanya jika Desktop or Laptop */}
            {isDesktopOrLaptop && 
                <div>
                    <Navbar/>
                </div>
            }

            {/* Render hanya jika Desktop or Laptop */}
            {isTablets && 
                <div>
                    <Navbar/>
                </div>
            }

            {/* Render hanya jika Desktop or Laptop */}
            {isMobile && 
                <div>
                    <Navbar/>
                    <div>
                        <CarouselCustomNavigation />
                        <div className="flex justify-center">
                            <p>About</p>
                        </div>
                    </div>
                </div>
            }
            
        </>
    )
}

export default AboutPage;