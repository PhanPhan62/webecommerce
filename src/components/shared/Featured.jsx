import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

const list = [
  {
    id: 1,
    title: "Trending Now",
    items: [
      {
        id: 1,
        name: "womens",
        nameTabs: "Women's Clothing",
        products: [
          {
            id: 1,
            name: "Denim jacket",
            priceOld: "$19.99",
            priceNew: "$10.99",
            image: "https://via.placeholder.com/150",
            label: "Sale",
            background: "bg-red-500"
          },
          {
            id: 2,
            name: "Denim jacket",
            priceOld: "$19.99",
            priceNew: "$10.99",
            image: "https://via.placeholder.com/150",
            label: "Hot",
            background: "bg-green-500"
          },
          {
            id: 3,
            name: "Denim jacket",
            priceOld: "$19.99",
            priceNew: "$10.99",
            image: "https://via.placeholder.com/150",
            label: "Sale",
            background: "bg-red-500"
          }
        ]
      },
      {
        id: 2,
        name: "mens",
        nameTabs: "Men's Clothing",
        products: [
          {
            id: 1,
            name: "Denim jacket",
            priceOld: "$19.99",
            priceNew: "$9.99",
            image: "https://via.placeholder.com/150",
            label: "Sale",
            background: "bg-red-500"
          },
          {
            id: 2,
            name: "Denim jacket",
            priceOld: "",
            priceNew: "$10.99",
            image: "https://via.placeholder.com/150",
            label: "Hot",
            background: "bg-green-500"
          },
          {
            id: 3,
            name: "Denim jacket",
            priceOld: "",
            priceNew: "$10.99",
            image: "https://via.placeholder.com/150",
            label: "Sale",
            background: "bg-red-500"
          },
          {
            id: 3,
            name: "Denim jacket",
            priceOld: "",
            priceNew: "$10.99",
            image: "https://via.placeholder.com/150",
            label: "Sale",
            background: "bg-red-500"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Best Seller",
    items: [
      {
        id: 1,
        name: "womens",
        nameTabs: "Women's Clothing",
        products: [
          {
            id: 1,
            name: "Denim jacket",
            priceOld: "$19.99",
            priceNew: "$10.99",
            image: "https://via.placeholder.com/150",
            label: "Sale",
            background: "bg-red-500"
          },
          {
            id: 2,  
            name: "Denim jacket",
            priceOld: "$19.99",
            priceNew: "$10.99",
            image: "https://via.placeholder.com/150",
            label: "Hot",
            background: "bg-green-500"  
          },
          {
            id: 3,
            name: "Denim jacket",
            priceOld: "$19.99",
            priceNew: "$10.99",
            image: "https://via.placeholder.com/150",
            label: "Sale",
            background: "bg-red-500"
          }
        ]
      }
    ]
  }
];

const loadData = (products) => {
  if (!products || products.length === 0) {
    // If no data, show skeleton
    return (
      <CarouselItem>
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </CarouselItem>
    );
  } else {
    // Render products if available
    return products.map((product) => (
      <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/4">
        <div className="p-2">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <div className="relative">
                {product.label && (
                  <span
                    className={`absolute top-2 right-2 text-white text-xs px-2 py-1 rounded-full ${product.background}`}
                  >
                    {product.label}
                  </span>
                )}

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-md"
                />
                <div className="mt-4 text-center">
                  <h3 className="font-semibold">{product.name}</h3>
                  {product.priceOld && (
                    <p className="text-gray-400 line-through">{product.priceOld}</p>
                  )}
                  <p className="text-red-600 font-semibold">{product.priceNew}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ));
  }
};

const Featured = () => {
  return (
    <>
      {list?.map((category) => (
        <section key={category.id} className="py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">{category.title}</h2>

            <Tabs defaultValue={category.items[0].name} className="w-full">
              {/* Tabs List */}
              <TabsList className="flex justify-center space-x-4 mb-4">
                {category.items.map((item) => (
                  <TabsTrigger
                    key={item.id}
                    value={item.name}
                    className="text-gray-600 hover:text-black border-b-2 border-transparent hover:border-black capitalize"
                  >
                    {item.nameTabs}
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Tabs Content */}
              {category.items.map((item) => (
                <TabsContent key={item.id} value={item.name}>
                  <Carousel
                    opts={{ align: "start" }}
                    className="w-full max-w-5xl mx-auto"
                  >
                    <CarouselContent>
                      {/* Load data or display skeleton */}
                      {loadData(item.products)}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      ))}
    </>
  );
};

export default Featured;