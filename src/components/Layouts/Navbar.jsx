import { useMediaQuery } from 'react-responsive'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

MyLinkMobile.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
function MyLinkMobile(props) {
  const { to, title, src } = props;
  const isActive = window.location.pathname === to;

  const linkStyle = {
    fontFamily: isActive ? 'Protest Riot, sans-serif' : "sans-serif"
  };

  return (
    <Link to={to} style={linkStyle}>
      <img src={src} alt={title} className="max-w-9 mx-4" />
      <p className='text-[10px] font-bold'>{title}</p>
    </Link>
  );
}

MyLinkDesktop.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
function MyLinkDesktop(props) {
  const { to, title } = props;
  const isActive = window.location.pathname === to;

  const linkStyle = {
    color: isActive ? 'blue' : 'black',
    borderBottom: isActive ? '3px solid blue' : 'black',
  };

  return (
    <Link to={to} style={linkStyle}>
      <p className='font-bold'>{title}</p>
    </Link>
  );
}

MyLinkMedsos.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
function MyLinkMedsos(props) {
  const {to, title, src} = props
  return (
    <Link to={to}><img src={src} alt={title} className="w-8 mb-2 rounded shadow-[0_5px_15px_0_rgba(0,0,0,0.6)]"/></Link>
  )
}

const Navbar = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1225px)'
    })
    const isTabletOrMobile = useMediaQuery({ 
        query: '(max-width: 1224px)' 
    })
    

    return (
        <>
            {isDesktopOrLaptop && 
              <div className="flex flex-wrap items-center justify-between p-6">
                <style>
                  {`@import url('https://fonts.googleapis.com/css2?family=Protest+Riot&display=swap');`}
                </style>
                <div className="text-3xl text-red cursor-pointer" style={{ fontFamily: 'Protest Riot, sans-serif' }}>
                  <Link to="/">Rahmat</Link>
                </div>
                <div className="flex gap-4 justify-center">
                  <MyLinkDesktop to="/" title="Home" />
                  <MyLinkDesktop to="/about" title="About Me" />
                  <MyLinkDesktop to="/mywork" title="My Work" />
                  <MyLinkDesktop to="/myskill" title="My Skills" />
                  <MyLinkDesktop to="/contact" title="Contact" />
                </div>
                <div className="flex gap-4">
                  <Link to="https://github.com/mrahmatfadila">
                    <img src="/github.png" alt="GitHub" className="w-8" />
                  </Link>
                  <Link to="https://www.instagram.com/mrahmatfdl_/">
                    <img src="/instagram.png" alt="Instagram" className="w-8" />
                  </Link>
                  <Link to="https://www.linkedin.com/in/muhamad-rahmat-fadila-25ba411b2/">
                    <img src="/linkedin.png" alt="LinkedIn" className="w-8" />
                  </Link>
                </div>
              </div>
            }
            {isTabletOrMobile && (
                <div className="left-0 right-0 top-0 shadow-lg text-center py-2 z-10 fixed bg-white">
                    <style>{`@import url('https://fonts.googleapis.com/css2?family=Protest+Riot&display=swap');`}</style>
                    <div className="text-sm" style={{ fontFamily: 'Protest Riot, sans-serif' }}>
                    Muhamad Rahmat Fadila
                    </div>
                </div>
            )}

            {isTabletOrMobile && (
                <div className="bottom-0 left-0 right-0 text-center py-2 bg-white opacity-90 fixed">
                    <div className="flex justify-center">
                        <MyLinkMobile to="/" title="Home" src="/home.png" />
                        <MyLinkMobile to="/about" title="About Me" src="/id-card.png" />
                        <MyLinkMobile to="/mywork" title="My Work" src="/portfolio.png" />
                        <MyLinkMobile to="/myskill" title="Skills" src="/self-development.png" />
                        <MyLinkMobile to="/contact" title="Contact Me" src="/contact.png" />
                    </div>
                </div>
            )}
            {isTabletOrMobile && 
                <div className="right-0 top-48 mr-2 fixed z-10">
                    <MyLinkMedsos to={"https://github.com/mrahmatfadila"} title="GitHub" src="/github.png"/>
                    <MyLinkMedsos to={"https://www.instagram.com/mrahmatfdl_/"} title="Instagram" src="/instagram.png"/>
                    <MyLinkMedsos to={"https://www.linkedin.com/in/muhamad-rahmat-fadila-25ba411b2/"} title="LinkedIn" src="/linkedin.png"/>
                </div>
            }
        </> 
    )
}

export default Navbar;