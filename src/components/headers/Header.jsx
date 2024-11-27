import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import FollowUs from "./FollowUs"
import Nav from "./Nav"
import { Lightbulb, Search } from "lucide-react"

const Header = () => { 
  return (
    <>
      <FollowUs />
      
      <div className="container grid grid-cols-5 gap-4 my-1">
        <div className="col-span-1 flex items-center justify-center">
          <h2 className="text-lg font-semibold flex">
            <Lightbulb className="bold" /><span className="textsm">Clearance Up to 30% Off</span>
          </h2>
        </div>
        <div className="col-span-3 flex items-center justify-center">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input className="w-full outline-none" placeholder="Search products ..." />
            <Button variant="main" type="submit">
              <Search className="bold" />
            </Button>
          </div>
        </div>
        <div className="col-span-1">
          <h2 className="text-lg font-semibold">
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <Button variant="outline" className="dark:text-white">Cart</Button>
                <Button variant="outline" className="dark:text-white ml-2">Sign Up</Button>
              </div>
            </div>
          </h2>
        </div>
      </div>
      <Nav />
    </>
  )
}

export default Header
