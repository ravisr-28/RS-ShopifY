import { Outlet } from "react-router-dom"
import FooterComponents from "./common/FooterComponents"
import HeaderComponent from "./common/HeaderComponent"
import { useState } from "react"
function App() {
  const [order,setOrder] = useState(null)
  return (
    <>
    <HeaderComponent />
    <Outlet />
    <FooterComponents />
    </>
  )
}

export default App
