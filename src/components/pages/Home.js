import React from 'react';
import '../../App.css';
import Footer from './Footer';
import Slider from './Slider/Slider';
import pic from './mainbg.jpg';


export default function Home() {
  
  return (
    <>
   
   <Slider /><br/><br/>
   <img src={pic} alt='Pic'></img><br/><br/>
   <Footer /> 
    </>
  );
}
