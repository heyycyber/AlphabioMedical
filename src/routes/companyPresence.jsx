import React from 'react'
import NavBar from '../Components/navbar.jsx'
import CompanyPresenceParallex from "../pallarex/compantPresenceParallex.tsx"
import { ParallaxProvider } from "react-scroll-parallax";
import FooTer from '../Components/footer.jsx'


const CompanyPresence = () => {
  return (
    <>
      <NavBar/>
      <ParallaxProvider>
      <CompanyPresenceParallex />
      <div className="centerParallex  fullParallex ">

      </div>
    </ParallaxProvider>
      <FooTer/>
    </>
  )
}

export default CompanyPresence
