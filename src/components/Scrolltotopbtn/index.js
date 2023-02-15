import React,{useState} from 'react'

import Uparrow from "../../assets/images/up-arrow.png"

const Scrolltotopbtn = () => {

const [visible, setVisible] = useState(false)  

const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);

  return (
    <div className='scrolltotop-btn' style={{display: visible ? 'inline' : 'none'}} onClick={scrollToTop}>
        <img src={Uparrow} alt="uparrow" />
    </div>
  )
}

export default Scrolltotopbtn