import { useState } from "react";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Contact from "./Components/ContactUs/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navber from "./Components/Navber/Navber";
import Programs from "./Components/Programs/Programs";
import Testimonial from "./Components/Testimonial/Testimonial";
import Title from "./Components/Title/Title";
import VideoPlayer from "./Components/Video/VideoPlayer";

const App = () => {
  const [videoplay,setVideoPlay] = useState(false)

  return (
    <div>
      <Navber />
      <Hero />
      <div className="container">
        <Title para1="Our PROGRAM" Header2="What We Offer" />
        <Programs />
      </div>
      <div className="container">
        <About setVideoPlay={setVideoPlay} />
      </div>
      <div className="container">
        <Title para1="Gallery" Header2="Campus Photos" />
        <Campus />
      </div>
      <div className="container">
        <Title para1="TESTIMONIALS" Header2="What Student Says"/>
        <Testimonial />
      </div>
      <div className="container">
        <Title para1="Contact Us" Header2="Get in Touch"/>
        <Contact />
      </div>
      <div className="container">
        <Footer />
      </div>
      <VideoPlayer videoplay={videoplay} setVideoPlay={setVideoPlay} />
    </div>
  )
}

export default App