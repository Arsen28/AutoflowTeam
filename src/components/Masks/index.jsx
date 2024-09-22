import React from 'react'
import { useLocation } from 'react-router-dom'

import Mask1 from '@/assets/masks/Mask_1.png'
import Mask2 from '@/assets/masks/Mask_2.png'
import Mask3 from '@/assets/masks/Mask_3.png'
import Mask4 from '@/assets/masks/Mask_4.png'
import Mask5 from '@/assets/masks/Mask_5.png'
import Mask6 from '@/assets/masks/Mask_6.png'
import Mask11 from '@/assets/masks/Mask_11.png'
import Mask12 from '@/assets/masks/Mask_12.png'



const FaqMask = ({ height }) => {
  return (
    <>
      <img
        src={Mask4}
        alt="mask_4"
        className="absolute top-0 right-0 w-full h-auto z-0 max-w-full max-h-1860 object-cover object-center"
      />
      <div
        style={{ top: height + 'px' }}
        className={`absolute left-0 w-full h-auto z-0 max-w-full max-h-1860 object-cover object-center overflow-hidden`}
      >
        <img src={Mask3} alt="mask_3" />
      </div>
    </>
  )
};

const ContactMask = () => {
  return (
    <img
      src={Mask5}
      alt="mask_5"
      className="absolute top-0 right-0 w-full h-auto z-0 max-w-full max-h-[1550px] object-cover object-center"
    />
  )
};

const TermsMask = () => {
  return (
    <div
      className={`absolute top-[-100px] left-[-100px] w-full h-auto z-0 max-w-full object-cover object-center overflow-hidden`}
      style={{maxHeight: '2754px'}}
    >
      <img src={Mask6} alt="mask_6" />
    </div>
  )
};

const ChooseAutoflow = () => {
  return (
    <>
      <img
        src={Mask11}
        alt="mask_11"
        className="absolute top-0 right-0 w-full h-auto z-0 max-w-full max-h-[8987px] object-cover object-center"
      />
    </>
  )
};

const GetInTouch = () => {
  return (
    <img
      src={Mask12}
      alt="mask_5"
      className="absolute top-0 right-0 w-full h-auto z-0 max-w-full max-h-[1550px] object-cover object-center"
    />
  )
};

const HomeMask = ({height}) => {
  return (
    <>
      <img
        src={Mask1}
        alt="mask_1"
        className="absolute top-0 left-0 w-full h-auto z-0 max-w-full max-h-1860 object-cover object-center"
      />
      <img
        src={Mask2}
        alt="mask_2"
        className="absolute top-2350 left-0 w-full h-auto z-0 max-w-full max-h-1860 object-cover object-center"
      />
      <div
        style={{ top: height + 'px' }}
        className={`absolute left-0 w-full h-auto z-0 max-w-full max-h-1860 object-cover object-center overflow-hidden`}
      >
        <img src={Mask3} alt="mask_3" />
      </div>
    </>
  ) 
};


export const Masks = ({ height }) => {
  const location = useLocation()
  const path = location.pathname

  switch(path) {
    case '/faq':
      return <FaqMask height={height} />;
    case '/contact':
      return <ContactMask />;
    case '/terms-and-conditions':
      return <TermsMask height={height} />;
    case '/choose-autoflow':
      return <ChooseAutoflow />;
    case '/get-in-touch':
    case '/thank-you':
    case '/message-sent':
      return <GetInTouch />;
    default:
      return <HomeMask height={height} />;
  }   
};
