import { useMediaQuery } from "react-responsive";
import Navbar from "../components/Layouts/Navbar";
import { HeroDesktop, HeroMobileTablets} from "../components/Elements/CarouselCustomNavigation";

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
                    <HeroDesktop/>
                </div>
            }

            {/* Render hanya jika Desktop or Laptop */}
            {isTablets && 
                <div>
                    <Navbar/>
                    <HeroMobileTablets />
                </div>
            }

            {/* Render hanya jika Desktop or Laptop */}
            {isMobile && 
                <div>
                    <Navbar/>
                    <div>
                        <HeroMobileTablets />
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