import { Carousel } from "@material-tailwind/react";
 
export function CarouselCustomNavigation() {
  return (
    <Carousel
      className="rounded-xl mt-8"
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
        alt="image 3"
        className="h-[200px] w-full object-cover object-center"
      />
      <img
        src="/img/Gambar PKL di GMF AeroAsia.jpg"
        alt="image 1"
        className="h-[200px] w-full object-cover object-bottom"
      />
      <img
        src="/img/Gambar Project di Yogyakarta.jpg"
        alt="image 2"
        className="h-[200px] w-full object-cover object-center"
      />
      <img
        src="/img/Mikrotik Routeros.jpg"
        alt="image 2"
        className="h-[200px] w-full object-cover object-center"
      />
    </Carousel>
  );
}