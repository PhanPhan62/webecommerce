import { Header } from "@/components/headers";

import { Outlet } from "react-router-dom"

const PublicLayout = () => {
  console.log("PublicLayout is rendered");
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default PublicLayout
