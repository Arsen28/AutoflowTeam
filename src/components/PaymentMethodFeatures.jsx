import React from 'react';
import Logo5 from '../assets/logo_5.png'
import DollarIcon from '../assets/dollar_icon.png'
import ListIcon from '../assets/list_icon.png'
import CarIcon from '../assets/car_icon.png'
import ChartIcon from '../assets/chart_icon.png'


export const PaymentMethodFeatures = () => {
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