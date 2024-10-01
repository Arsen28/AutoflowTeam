import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { SectionTitle } from './SectionTitle';
import Payment from '../assets/payment.png'
import SupportChatIcon from '../assets/support-chat-icon.png'
import WebsiteWidgetIcon from '../assets/website-widget-icon.png'
import { PaymentMethodFeatures } from './PaymentMethodFeatures';

export const ChooseAutoflow = () => {

  return (
    <div className="max-w-1248 mx-auto w-full h-full mt-35 flex justify-between lg:pt-72">
      <div className='lg:max-w-438'>
        <div className='mt-61'>
          <div className='w-full lg:w-367'>
            <SectionTitle text="// why choose autoflow" />
            <p className='mt-32 text-6xl leading-51 -tracking-3'>
              Everything in one place
            </p>
          </div>
          <div className='lg:hidden flex items-end justify-end lg:pr-52 mt-[32px] w-full'>
            <Card />
          </div>
          <div className='mt-77'>
            <div className='mb-42'>
              <div className='flex items-center'>
                <div className='mr-6 bg-green-200 rounded-full w-40 h-30 flex items-center justify-center'>
                  <span className='text-black text-sm leading-10'>01</span>
                </div>
                <p className='text-2xl leading-17 text-white'>
                  Fleet Management
                </p>
              </div>
              <div className='mt-6'>
                <p className='text-gray-110 leading-19 -tracking-0.5'>
                  With real-time updates and an easy-to-navigate interface, the Dashboard provides critical insights into your bookings, fleet performance, and financials, enabling you to make data-driven decisions quickly.
                </p>
              </div>
            </div>
            <div className='w-full h-px bg-gradient-to-r from-white to-white-0 '></div>
            <div className='my-42'>
              <div className='flex items-center'>
                <div className='mr-6 bg-green-200 rounded-full w-40 h-30 flex items-center justify-center'>
                  <span className='text-black text-sm leading-10'>02</span>
                </div>
                <p className='text-2xl leading-17 text-white -tracking-1.5'>
                  Built-In Agreements
                </p>
              </div>
            </div>
            <div className='w-full h-px bg-gradient-to-r from-white to-white-0 '></div>
            <div className='my-42 pb-[14px]'>
              <div className='flex items-center'>
                <div className='mr-6 bg-green-200 rounded-full w-40 h-30 flex items-center justify-center'>
                  <span className='text-black text-sm leading-10'>03</span>
                </div>
                <p className='text-2xl leading-17 text-white'>
                  Integrated Payment Processing
                </p>
              </div>
            </div>
            <Link to='/choose-autoflow'>
              <button
                type="button"
                style={{boxSizing: 'border-box'}}
                className="uppercase w-full box-border text-white border-2 text-xs font-semibold rounded-full leading-8 px-4 py-10 text-center"
              >
                view all features
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='hidden lg:flex items-end justify-end pr-52'>
       <Card />
      </div>
    </div>
  )
}


const Card = () => {

  const [isOn1, setIsOn1] = useState(true);
  const [isOn2, setIsOn2] = useState(false);

  return (
    <div className='w-full h-auto bg-custom-gradient backdrop-blur-50 rounded-12 border border-gray-120 ' >
      <div className='w-full px-60 py-69'>
        <PaymentMethodFeatures />
      </div>
      <div className='px-8'>
        <p className=''>Extras</p>
        <div className='mt-8 mb-5 flex items-center justify-between'>
          <div className='flex items-center'>
            <div className='w-12 h-12 rounded-full bg-gray-130 flex items-center justify-center'>
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
            <div className='w-12 h-12 rounded-full bg-gray-130 flex items-center justify-center'>
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
      <div className='w-full mt-66 px-5 pb-5'>
        <Link to='/get-in-touch'>
          <button className='w-full h-[34px] lg:h-51 bg-green-200 rounded-full flex items-center justify-center'>
            <p className='capitalize text-black text-xs leading-8'>GET STARTED</p>
          </button>
        </Link>
      </div>
    </div>
  )
}
