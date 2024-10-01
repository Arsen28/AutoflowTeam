import React, { useState } from 'react';
import SupportChatIcon from '../assets/support-chat-icon.png'
import WebsiteWidgetIcon from '../assets/website-widget-icon.png'
import { PaymentMethodFeatures } from './PaymentMethodFeatures';


export const PaymentMethodCard = () => {

  return (
    <div className='w-full flex items-end justify-end'>
      <div className='w-full h-auto bg-custom-gradient backdrop-blur-50 p-4 lg:p-7 rounded-12 border border-gray-120 ' >
        <div className="lg:flex">
          <div className='lg:w-1/2 flex flex-col items-center justify-center px-9 pb-[60px] lg:pb-[28px]'>
            <PaymentMethodFeatures />
          </div>
          <div className='lg:w-1/2 pl-2 lg:pl-8 pr-2 pt-5'>
            <p className=''>More Features</p>
            <div className='mt-8 mb-3 lg:mb-5 flex items-center justify-between'>
              <div className='flex items-center'>
                <div className='w-[33px] lg:w-12 h-[33px] lg:h-12 min-w-[33px] lg:min-w-12 rounded-full bg-gray-130 flex items-center justify-center'>
                  <img
                    src={SupportChatIcon}
                    alt="Support Chat Icon"
                    className='w-4 lg:w-25 h-4 lg:h-25'
                  />
                </div>
                <div className='ml-[9px] lg:ml-14'>
                  <p className='mb-2 lg:mb-3 text-white text-[14px] lg:text-lg leading-13'>24/7 Support Chat</p>
                  <p className='text-gray-140 text-[10px] lg:text-xs leading-8'>Need assistance? We're here to help</p>
                </div>
              </div>
              <div>
                <Switch />
              </div>
            </div>
            <div className='w-full h-px bg-gray-160'></div>
            <div className='mt-3 lg:mt-8 mb-5 flex items-center justify-between'>
              <div className='flex items-center'>
                <div className='w-[33px] lg:w-12 h-[33px] lg:h-12 min-w-[33px] lg:min-w-12  rounded-full bg-gray-130 flex items-center justify-center'>
                  <img
                    src={WebsiteWidgetIcon}
                    alt="Website Widget Icon"
                    className='w-4 lg:w-25 h-4 lg:h-25'
                  />
                </div>
                <div className='ml-[9px] lg:ml-14'>
                  <p className='mb-3 text-white text-[14px] lg:text-lg leading-13'>Website Widget</p>
                  <p className='text-gray-140 text-[10px] lg:text-xs leading-8'>Easily integrate our widget in your website</p>
                </div>
              </div>
              <div>
                <Switch />
              </div>
            </div>
          </div>
        </div>
        <div className='w-full mt-[45px] lg:mt-66'>
          <button
            className='w-full h-8 bg-green-200 rounded-full flex items-center justify-center'
          >
            <p className='capitalize text-black text-xs leading-8'>GET STARTED</p>
          </button>
        </div>
      </div>
    </div>
  )
};


const Switch = () => {
  const [isOn1, setIsOn1] = useState(true);
  const [isOn2, setIsOn2] = useState(false);

  return (
    <div
      className={`w-[30px] lg:w-11 h-4 lg:h-6 flex items-center rounded-full p-1 cursor-pointer ${
        isOn1 ? 'bg-green-200' : 'bg-gray-150'
      }`}
      onClick={() => setIsOn1(!isOn1)}
    >
      <div
        className={`w-[10px] lg:w-4 h-[10px] lg:h-4 rounded-full shadow-md transform transition-transform ${
          isOn1 ? 'bg-black translate-x-3' : 'bg-white translate-x-0'
        }`}
      />
    </div>
  )
}

