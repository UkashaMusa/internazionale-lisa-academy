import "./Navber.css";
import logo from '../../assets/internazionale_accademia_of_lisa.png'
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";
import menuicon from '../../assets/menuicon.png'


const Navber = () => {

  const [sticky,setSticky]= useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[])

  const [mobileMenu,setMobileMenu] = useState(false)


  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);

  }
  return (
    <nav className={`container ${sticky ? 'dark-nav' : '' }`}>
        <img src={logo} alt="" className="logo" />
        <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
            <li> <Link to="hero" smooth={true} offset={0} duration={500} onClick={()=>setMobileMenu(false)}>Home</Link> </li>
            <li><Link  to="program" smooth={true} offset={-260} duration={500} onClick={()=>setMobileMenu(false)} >Program</Link></li>
            <li><Link  to="about" smooth={true} offset={-150} duration={500} onClick={()=>setMobileMenu(false)}>About Us</Link></li>
            <li><Link  to="campus" smooth={true} offset={-260} duration={500} onClick={()=>setMobileMenu(false)} >Campus</Link></li>
            <li><Link  to="testimonials" smooth={true} offset={-260} duration={500} onClick={()=>setMobileMenu(false)} >Testimonial</Link></li>
            <li><Link  to="contact" smooth={true} offset={-260} duration={500} className="btn" onClick={()=>setMobileMenu(false)}>Contact Us</Link></li>
        </ul>
        <img src={menuicon} alt="" className="menuicon" onClick={toggleMenu} />
    </nav>
  )
}

export default Navber