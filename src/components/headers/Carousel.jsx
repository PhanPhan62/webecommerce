import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import img1 from "@/imgs/1.jpg";
import img2 from "@/imgs/2.jpg";
import img3 from "@/imgs/3.jpg";
import img4 from "@/imgs/4.jpg";
import img5 from "@/imgs/5.jpg";

import { AspectRatio } from "@/components/ui/aspect-ratio"

const slides = [
  { id: 1, img: img1, description: "Slide 1" },
  { id: 2, img: img2, description: "Slide 2" },
  { id: 3, img: img3, description: "Slide 3" },
  { id: 4, img: img4, description: "Slide 4" },
  { id: 5, img: img5, description: "Slide 5" },
];

const CarouselSlide = () => {
  const [api, setApi] = useState(undefined);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div className="w-[100%] ">
      <div className="relative">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent className="w-full">
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="w-full max-h-96">
                <div className="relative w-full h-full">
                  <AspectRatio ratio={16/9}>
                    <img
                      src={slide.img}
                      alt={slide.description}
                      className="w-full max-h-96 object-cover"
                    />
                  </AspectRatio>
                  <div className=" inset-0 absolute bg-black bg-opacity-50 flex items-center justify-center">
                    <h2 className="text-white text-3xl md:text-5xl font-bold">{slide.description}</h2>
                  </div>
                </div>
              </CarouselItem>
            
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full">
            &#8249;
          </CarouselPrevious>
          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full">
            &#8250;
          </CarouselNext>
        </Carousel>
        <div className="absolute bottom-4 left-0 right-0 text-center text-white">
          Slide {current} of {count}
        </div>
      </div>

    </div>
    
  )
}

export default CarouselSlide
