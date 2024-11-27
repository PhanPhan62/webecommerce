import { Button } from "../ui/button"

const Banner = () => {
  return (
    <>
      <div className="containerd grid grid-rows-1 grid-flow-col gap-4 py-5">
        <div className="h-[516px] row-span-1 sm:row-span-3 bg-banner-1 bg-no-repeat bg-cover relative">
          <div className="absolute bottom-10 left-10 ">
            <h3 className="mb-1 ">
              <a className="text-white text-l uppercase" href="/">
                Clearance
              </a>
            </h3>
            <h3 className="flex flex-col">
              <a className="text-white text-2xl font-bold mb-0" href="/">
                Waterproof
              </a>
              <a className="text-white text-2xl" href="/">
                From $80
              </a>
            </h3>
            <Button className="my-5">Shop Now</Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-banner-2 bg-cover bg-no-repeat h-[250px] relative">
             <div className="absolute bottom-10 left-10 ">
            <h3 className="mb-1 ">
              <a className="text-white text-l uppercase" href="/">
                Clearance
              </a>
            </h3>
            <h3 className="flex flex-col">
              <a className="text-white text-2xl font-bold mb-0" href="/">
                Waterproof
              </a>
              <a className="text-white text-2xl" href="/">
                From $80
              </a>
            </h3>
            <Button className="my-5">Shop Now</Button>
          </div>
            
          </div>
          <div className="bg-banner-3 bg-cover bg-no-repeat h-[250px] relative">
            <div className="absolute bottom-10 left-10 ">
              <h3 className="mb-1 ">
                <a className="text-white text-l uppercase" href="/">
                  Clearance
                </a>
              </h3>
              <h3 className="flex flex-col">
                <a className="text-white text-2xl font-bold mb-0" href="/">
                  Waterproof
                </a>
                <a className="text-white text-2xl" href="/">
                  From $80
                </a>
              </h3>
              <Button className="my-5">Shop Now</Button>
            </div>
  
          </div>
        </div>
        <div className="h-[516px] row-span-3 bg-banner-4 bg-no-repeat bg-cover relative">
          <div className="absolute top-10 left-10 ">
            <h3 className="mb-1 ">
              <a className="text-white text-l uppercase" href="/">
                Clearance
              </a>
            </h3>
            <h3 className="flex flex-col">
              <a className="text-white text-2xl font-bold mb-0" href="/">
                Waterproof
              </a>
              <a className="text-white text-2xl" href="/">
                From $80
              </a>
            </h3>
            <Button className="my-5">Shop Now</Button>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Banner
