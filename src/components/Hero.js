import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import "react-multi-carousel/lib/styles.css";

const Carousel = dynamic(() => import("react-multi-carousel"), {
  ssr: false,
});

const Hero = () => {
  const slides = [
    {
      image: "/assets/hero-slider-1.jpg",
      title: "Flavors Inspired by the Seasons",
      subtitle: "Delightful Experience",
    },
    {
      image: "/assets/hero-slider-2.jpg",
      title: "Culinary Excellence",
      subtitle: "Taste the Difference",
    },
    {
      image: "/assets/hero-slider-3.jpg",
      title: "Farm to Table",
      subtitle: "Fresh Ingredients, Exceptional Taste",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="relative h-screen">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-screen relative">
            <Image
              src={slide.image}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white px-4 ">
                <div className="text-center mb-12">
                  <span className="text-yellow-500 text-sm  font-semibold tracking-wider uppercase">
                    DELIGHTFUL EXPERIENCE
                  </span>
                  <div className="flex justify-center">
                    <Image
                      src="/assets/separator.svg"
                      alt="separator"
                      width={112}
                      height={40}
                      className="pt-6"
                    />
                  </div>
                </div>
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif mb-2 sm:mb-4 font-medium">
                  {slide.title}
                </h1>
                <p className="text-lg font-serif font-medium sm:text-xl md:text-2xl mb-4 sm:mb-8">
                  {slide.subtitle}
                </p>
                <a href="/page/reservation">
                  <button className="border border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-black text-base font-semibold py-2 px-4 rounded transition duration-300">
                    Book a Table
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
