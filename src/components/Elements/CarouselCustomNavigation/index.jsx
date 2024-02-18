import { Carousel } from "@material-tailwind/react";
import React from "react";
 
export function HeroMobileTablets() {
  return (
    <Carousel
      className="sm:mt-8 md:mt-10"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="/img/selfie di server.jpg"
        alt="image 1"
        className="h-[200px] md:h-[300px] w-full object-cover object-center"
      />
      <img
        src="/img/Gambar PKL di GMF AeroAsia.jpg"
        alt="image 2"
        className="h-[200px] md:h-[300px] w-full object-cover object-bottom md:object-center"
      />
      <img
        src="/img/Gambar Project di Yogyakarta.jpg"
        alt="image 3"
        className="h-[200px] md:h-[300px] w-full object-cover object-center"
      />
    </Carousel>
  );
}

export function HeroDesktop() {
  const data = [
    {
      imgelink: "/img/Gambar PKL di GMF AeroAsia.jpg",
      text: "COOMING SOON 1",
    },
    {
      imgelink: "/img/Gambar Project di Yogyakarta.jpg",
      text: "COOMING SOON 2",
    },
    {
      imgelink: "/img/Gambar PKL di GMF AeroAsia.jpg",
      text: "COOMING SOON 3",
    },
    {
      imgelink: "/img/Gambar Project di Yogyakarta.jpg",
      text: "COOMING SOON 4",
    },
    {
      imgelink: "/img/Gambar PKL di GMF AeroAsia.jpg",
      text: "COOMING SOON 5",
    },
  ];
  
  const [active, setActive] = React.useState("/img/Gambar PKL di GMF AeroAsia.jpg");
  const [activeText, setActiveText] = React.useState("COOMING SOON 6");
  
  const handleClick = (imgelink, text) => {
    setActive(imgelink);
    setActiveText(text);
  };
  
  return (
    <div className="flex">
      <div className="flex flex-col justify-center items-center">
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center items-center ml-4">
        {data.map(({ imgelink, text }, index) => (
          <div key={index} className="mb-4">
            <img
              onClick={() => handleClick(imgelink, text)}
              src={imgelink}
              className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <p className="text-center text-xl font-bold">{activeText}</p>
      </div>
    </div>
  );
}
