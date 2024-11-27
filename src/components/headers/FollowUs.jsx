import { Facebook, Instagram, PhoneCall, Twitter, UserRound } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "../ui/button"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const FollowUs = () => {
  return (
    <> 
      <div className="grid grid-cols-2 my-2 mx-20">
        <div className="flex">
          <div className="mx-1 flex justify-center items-center">
            <PhoneCall className="hover:text-mainColor stroke-thin mx-3 cursor-pointer" /> 
            <a href="tel:0123456789" aria-label="" className="hover:text-mainColor cursor-pointer font-thin " size={"20px"}>Call: +0123 456 789</a>
          </div>
        </div>
        <div className="flex justify-end">
          <ul className="flex">
            <li className="mx-1 flex justify-center items-center">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Facebook className="stroke-thin hover:text-mainColor cursor-pointer text-sm" aria-label="Facebook"/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
            <li className="mx-1 flex justify-center items-center">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Instagram className="justify-center text-center stroke-thin hover:text-mainColor cursor-pointer"/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
            <li className="mx-1 flex justify-center items-center">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Twitter className="stroke-thin hover:text-mainColor cursor-pointer"/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
            <li > 
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost">
                      <UserRound className="stroke-thin hover:text-mainColor dark:hover:text-white hover:stroke-solid cursor-pointer mr-1" />Login
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Login</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
            <li className="mx-1 flex justify-center items-center"> 
              <Select className="">
                <SelectTrigger className="w-full">
                  <SelectValue  placeholder="USD" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Usd">Usd</SelectItem>
                  <SelectItem value="Vnd">Vnd</SelectItem>
                </SelectContent>
              </Select>
            </li>
            <li className="mx-1 flex justify-center items-center"> 
              <Select className="outline-none">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="VN">VN</SelectItem>
                  <SelectItem value="EN">EN</SelectItem>
                </SelectContent>
              </Select>
            </li>
          </ul>
        </div>
      </div>
    </>
  )

}
export default FollowUs
