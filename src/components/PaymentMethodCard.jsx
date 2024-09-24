import React, { useState } from 'react';
import Logo5 from '../assets/logo_5.png'
import DollarIcon from '../assets/dollar_icon.png'
import ListIcon from '../assets/list_icon.png'
import CarIcon from '../assets/car_icon.png'
import ChartIcon from '../assets/chart_icon.png'
import SupportChatIcon from '../assets/support-chat-icon.png'
import WebsiteWidgetIcon from '../assets/website-widget-icon.png'


export const PaymentMethodCard = () => {
  const [isOn1, setIsOn1] = useState(true);
  const [isOn2, setIsOn2] = useState(false);

  return (
    <div className='w-full flex items-end justify-end'>
      <div className='w-full h-auto bg-black-400 p-7 rounded-12 border border-gray-120 ' >
        <div className="flex">
          <div className='w-1/2 flex flex-col items-center justify-center px-9'>
            <Features />
          </div>
          <div className='w-1/2 pl-8 pt-5'>
            <p className=''>More Features</p>
            <div className='mt-8 mb-5 flex items-center justify-between'>
              <div className='flex items-center'>
                <div className='w-12 h-12 min-w-12 rounded-full bg-gray-130 flex items-center justify-center'>
                  <img
                    src={SupportChatIcon}
                    alt="Support Chat Icon"
                    className='w-25 h-25'
                  />
                </div>
                <div className='ml-14'>
                  <p className='mb-3 text-white text-lg leading-13'>24/7 Support Chat</p>
                  <p className='text-gray-140 text-xs leading-8'>Need assistance? We're here to help</p>
                </div>
              </div>
              <div>
              <div
                className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer ${
                  isOn1 ? 'bg-green-200' : 'bg-gray-150'
                }`}
                onClick={() => setIsOn1(!isOn1)}
              >
                <div
                  className={`w-4 h-4 rounded-full shadow-md transform transition-transform ${
                    isOn1 ? 'bg-black translate-x-5' : 'bg-white translate-x-0'
                  }`}
                />
              </div>
              </div>
            </div>
            <div className='w-full h-px bg-gray-160'></div>
            <div className='mt-8 mb-5 flex items-center justify-between'>
              <div className='flex items-center'>
                <div className='w-12 h-12 min-w-12 rounded-full bg-gray-130 flex items-center justify-center'>
                  <img
                    src={WebsiteWidgetIcon}
                    alt="Website Widget Icon"
                    className='w-25 h-25'
                  />
                </div>
                <div className='ml-14'>
                  <p className='mb-3 text-white text-lg leading-13'>Website Widget</p>
                  <p className='text-gray-140 text-xs leading-8'>Easily integrate our widget in your website</p>
                </div>
              </div>
              <div>
              <div
                className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer ${
                  isOn2 ? 'bg-green-200' : 'bg-gray-150'
                }`}
                onClick={() => setIsOn2(!isOn2)}
              >
                <div
                  className={`w-4 h-4 rounded-full shadow-md transform transition-transform ${
                    isOn2 ? 'bg-black translate-x-5' : 'bg-white translate-x-0'
                  }`}
                />
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full mt-66'>
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


const Features = () => {
  return (
    <div className='w-full'>
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-[82px] h-[82px] rounded-full bg-[#CDFF05] flex items-center justify-center text-black font-bold text-lg">
          <div className='w-[67px] h-[67px] rounded-full bg-[#CDFF05] flex items-center justify-center border border-black'> 
            <img
              src={Logo5}
              alt='logo_5'
              className='w-[54px]'
            />
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-5 h-5 w-px bg-white-20"></div>
        </div>
        <div className='relative w-full mt-5'>
          <div className='relative border-t border-l border-r border-white-20 h-[30px] mx-[25px]'>
            <div className='flex w-full h-[30px] absolute top-0'>
              <div className='w-1/3 border-r border-white-20'></div>
              <div className='w-1/3 border-r border-white-20'></div>
              <div className='w-1/3'></div>
            </div>
          </div>
          <div className='absolute w-2 h-2 rounded-full bg-[#444] left-1/2 -translate-x-1/2 -top-1'></div>
          <div className='px-[25px] w-full'>
            <div className='relative w-full '>
              <div className='absolute -left-[26px] w-[52px] flex flex-col items-center'>
                <div className='w-[52px] h-[52px] rounded-full border border-white-20 bg-[#111] flex items-center justify-center'>
                  <img
                    src={DollarIcon}
                    alt='dollar_icon'
                    className='w-6 h-6'
                  />
                </div>
              </div>
              <div className='absolute left-1/3 -translate-x-1/2 w-[52px] flex flex-col items-center'>
                <div className='w-[52px] h-[52px] rounded-full border border-white-20 bg-[#111] flex items-center justify-center'>
                  <img
                    src={ListIcon}
                    alt='list_icon'
                    className='w-6 h-6'
                  />
                </div>
              </div>
              <div className='absolute left-2/3 -translate-x-1/2 w-[52px] flex flex-col items-center'>
                <div className='w-[52px] h-[52px] rounded-full border border-white-20 bg-[#111] flex items-center justify-center'>
                  <img
                    src={CarIcon}
                    alt='car_icon'
                    className='w-6 h-6'
                  />
                </div>
              </div>
              <div className='absolute -right-[26px] w-[52px] flex flex-col items-center'>
                <div className='w-[52px] h-[52px] rounded-full border border-white-20 bg-[#111] flex items-center justify-center'>
                  <img
                    src={ChartIcon}
                    alt='chart_icon'
                    className='w-6 h-6'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};