
import { SectionTitle } from './SectionTitle';
import Car from '../assets/car.png'
import Beenhere from '../assets/beenhere.png'
import logo4 from '../assets/logo_4.png'
import Car1 from '../assets/car_1.png'

export const Banner = () => {
  return (
    <div className="px-22 w-full h-full flex justify-center gap-34">
      <div className='w-629 pt-80 pr-62'>
        <SectionTitle text="// welcome to autoflow" />
        <div className='w-full mt-8'>
          <p className='font-medium text-8xl leading-82 -tracking-5'>
            Cruise control for your fleet.
          </p>
        </div>
        <div className='w-full flex gap-10 mt-56'>
          <button
            type="button" 
            className="uppercase text-black-200 bg-green-200 text-xs font-semibold rounded-full leading-8 px-4 py-3 text-center"
          >
            join waitlist
          </button>
          <button
            type="button"
            style={{boxSizing: 'border-box'}}
            className="uppercase box-border text-white border-2 text-xs font-semibold rounded-full leading-8 px-4 py-10 text-center"
          >
            all features
          </button>
        </div>
        <div className='w-full flex gap-24 mt-[134px]'>
          <p className='leading-24'>
            <span className='text-green-200'>//  </span>
            <span className='text-[15px] text-white-60'>Comprehensive fleet management software designed to help rental car fleets stay organized, manage bookings, and optimize operations.</span>
          </p>          
        </div>
        <div className='flex gap-3 mt-7'>
          <div className='w-[81px] h-[10px]'>
            <img src={logo4} className='w-[81px] h-[10px]'/>
          </div>
          <span className='uppercase text-green-200 text-[10px] leading-12'>No demo required. Sign up and get started right away.</span>
        </div>
      </div>
      <div className='relative w-629 h-567'>
        <div className='absolute top-0 right-45 border border-white-20 rounded-12 w-367 h-[366px] '>
          <div className='relative p-8 pt-7 h-full flex flex-col justify-between'>
            <div className='flex justify-between items-center '>
              <div className=''>
                <span className='block text-white text-xl'>Rent Today</span>
                <span className='block text-[#737373] text-xs'>211 mph</span>
              </div>
              <div className=''>
                <span className='block text-white text-xl'>$2,500/Day</span>
                <span className='block text-[#737373] text-xs'>100 miles Included</span>
              </div>
            </div>            
            <div className='absolute top-[90px] right-0 w-[150%]'>
              <img 
                src={Car1}
                className='w-[544px] h-[179px]'
              />
            </div>
            <div className='w-full mt-25'>
              <button
                className='w-full h-8 bg-black rounded-full flex items-center justify-center'
              >
                <p className='capitalize text-green-200 text-xs leading-8'>book now</p>
              </button>
            </div>
          </div>
          <div>
          </div>
        </div>
        <div className='absolute top-[272px] bg-black-300 border border-white-30 rounded-12 w-325 h-351 p-4'>
          <div className='relative'>
            <div>
              <img
                src={Car}
                alt='car'
                className='w-full h-148'
              />
            </div>
            <div className='flex justify-between items-center mt-29 px-2'>
              <p className='text-2xl font-medium leading-17'>Ferrari 488 Pista</p>
              <img
                src={Beenhere}
                alt='Beenhere'
                className='w-6 h-6'
              />
            </div>
            <div className='flex items-center justify-between mt-4 pl-2'>
              <div className='w-1/3 py-6'>
                <p className='text-xs leading-8 text-gray-100 mb-14'>Top Speed</p>
                <p className='text-base leading-11 text-white'>211Km/h</p>
              </div>
              <div className='w-1/3 border-l border-gray-100 pl-14 py-6'>
                <p className='text-xs leading-8 text-gray-100 mb-14'>Power</p>
                <p className='text-base leading-11 text-white'>711HP</p>
              </div>
              <div className='w-1/3 border-l border-gray-100 pl-14 py-6'>
                <p className='text-xs leading-8 text-gray-100 mb-14'>Cylinders</p>
                <p className='text-base leading-11 text-white'>8</p>
              </div>
            </div>
            <div className='w-full mt-25'>
              <button
                className='w-full h-8 bg-green-200 rounded-full flex items-center justify-center'
              >
                <p className='capitalize text-black text-xs leading-8'>book now</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
