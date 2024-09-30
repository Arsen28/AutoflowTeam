
import { SectionTitle } from './SectionTitle';
import BookingWidget from '../assets/booking-widget.png'
import Customers from '../assets/customers.png'
import { TripTracking } from './TripTracking';

export const Features = () => {
  return (
    <div className="max-w-1248 mx-auto w-full h-full pt-[70px] lg:pt-166 flex flex-col items-center justify-center">
      <div className='max-w-full w-678 text-center lg:px-8'>
        <SectionTitle text="// features" />
        <p className='px-4 mt-6 text-white text-[28px] lg:text-6xl font-medium leading-50 lg:leading-[30px] -tracking-[1.12px] lg:-tracking-3 '>
          Automate and simplify your fleet management
        </p>
      </div>
      <TripTracking />
      <div className='w-full mt-35 lg:flex justify-center gap-27'>
        <div className='w-full lg:w-612 h-[420px] lg:h-560 rounded-12 border border-white-100'>
          <div className='relative flex justify-end mt-[20px] lg:mt-34'>
            <img src={BookingWidget} 
              className='w-[calc(100%-30px)] h-auto lg:w-[347px] lg:h-[294px] absolute -z-20'
            />
          </div>
          <div className='px-[30px] lg:px-60 mt-[207px] lg:mt-[230px]'>
            <SectionTitle text="// Direct Booking Widget" />
            <p className='mt-[18px] lg:mt-6 text-2xl lg:text-5xl leading-[26.4px] lg:leading-43 -tracking-[0.96px] lg:-tracking-3'>
              Accept direct bookings from your website
            </p>
            <p className='mt-[30px] lg:mt-37 max-w-full w-[499px] text-xs lg:text-base text-white-60 leading-[12px] lg:leading-19 -tracking-[0.24px] lg:-tracking-0.5'>
              Accept direct bookings from your website seamlessly. Streamline the reservation process and increase your conversions by allowing customers to book directly, reducing friction and enhancing user experience.
            </p>
          </div>
        </div>
        <div className='mt-[24px] lg:mt-0 w-full lg:w-612 h-[420px] lg:h-560 rounded-12 border border-white-100'>
          <div className='relative flex justify-end mt-[20px] lg:mt-34'>
            <img src={Customers} 
              className='w-[calc(100%-30px)] h-auto lg:w-[450px] lg:h-[283px] absolute -z-20'
            />
          </div>
          <div className='px-[30px] lg:px-60 mt-[187px] lg:mt-[230px]'>
            <SectionTitle text="// CUSTOMER MANAGMENT" />
            <p className='mt-[18px] lg:mt-6 text-2xl lg:text-5xl leading-[26.4px] lg:leading-43 -tracking-[0.96px] lg:-tracking-3'>
              Easily manage your past customers 
            </p>
            <p className='mt-[30px] lg:mt-37 max-w-full w-[474px] text-base text-white-60 leading-19 -tracking-0.5'>
              Keep track of customer information, communication history, and preferences, allowing you to offer personalized service and improve client relationships.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
