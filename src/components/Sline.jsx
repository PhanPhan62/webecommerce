import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel"

import brands_1 from "@/imgs/brands/1.png"
import brands_2 from "@/imgs/brands/2.png"
import brands_3 from "@/imgs/brands/3.png"
import brands_4 from "@/imgs/brands/4.png"
import brands_5 from "@/imgs/brands/5.png"
import brands_6 from "@/imgs/brands/6.png"
import brands_7 from "@/imgs/brands/7.png"
import brands_8 from "@/imgs/brands/8.png"
import brands_9 from "@/imgs/brands/9.png"

const brands = [
  {
    id: 1,
    title: "Brand 1",
    name: brands_1,
    url:"/"
  },
  {
    id: 2,
    title: "Brand 2",
    name: brands_2,
    url:"/"
  },
  {
    id: 3,
    title: "Brand 3",
    name: brands_3,
    url:"/"
  },
  {
    id: 4,
    title: "Brand 4",
    name: brands_4,
    url:"/"
  },
  {
    id: 5,
    title: "Brand 5",
    name: brands_5,
    url:"/"
  },
  {
    id: 6,
    title: "Brand 6",
    name: brands_6,
    url:"/"
  },  
  {
    id: 7,
    title: "Brand 7",
    name: brands_7,
    url:"/"
  },
  {
    id: 8,
    title: "Brand 8",
    name: brands_8,
    url:"/"
  },
  {
    id: 9,
    title: "Brand 9",
    name: brands_9,
    url:"/"
  },
]

const Sline = () => {
  return (
    <Carousel className="mx-auto w-full max-w-7xl">
        <CarouselContent className="">
          {brands.map((item, index) => (
            <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/5 col-span-1 h-full">
              <div className="p-1">
                <div className="h-full">
                  <div className="flex justify-center max-h-16 min-h-16 space-x-4 items-center p-2 border">
                    {item.icon}
                    <div className="space-y-1">
                      <a href={item.url}>
                        <img src={item.name} alt={item.title} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious className="dark:text-white"/>
        <CarouselNext className="dark:text-white"/> */}
      </Carousel>
  )
}

export default Sline
