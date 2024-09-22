
import { SectionTitle } from './SectionTitle';
import BookingWidget from '../assets/booking-widget.png'
import Customers from '../assets/customers.png'
import { TripTracking } from './TripTracking';

export const Features = () => {
  return (
    <div className="max-w-1248 mx-auto w-full h-full pt-166 flex flex-col items-center justify-center">
      <div className='w-678 text-center px-8'>
        <SectionTitle text="// features" />
        <p className='mt-6 text-white text-6xl font-medium leading-50 -tracking-3'>
          Automate and simplify your fleet management
        </p>
      </div>
      <TripTracking />
      <div className='w-full mt-35 flex justify-center gap-27'>
        <div className='w-612 h-560 rounded-12 border border-white-100'>
          <div className='relative flex justify-end mt-34'>
            <img src={BookingWidget} 
              className='w-[347px] h-[294px] absolute -z-20'
            />
          </div>
          <div className='px-60 mt-[230px] bg-'>
            <SectionTitle text="// Direct Booking Widget" />
            <p className='mt-6 text-5xl leading-43 -tracking-3'>
              Accept direct bookings from your website
            </p>
            <p className='mt-37 w-[499px] text-base text-white-60 leading-19 -tracking-0.5'>
              Accept direct bookings from your website seamlessly. Streamline the reservation process and increase your conversions by allowing customers to book directly, reducing friction and enhancing user experience.
            </p>
          </div>
        </div>
        <div className='w-612 h-560 rounded-12 border border-white-100'>
          <div className='relative flex justify-end mt-34'>
            <img src={Customers} 
              className='w-[450px] h-[283px] absolute -z-20'
            />
          </div>
          <div className='px-60 mt-[230px] bg-'>
            <SectionTitle text="// CUSTOMER MANAGMENT" />
            <p className='mt-6 text-5xl leading-43 -tracking-3'>
              Easily manage your past customers 
            </p>
            <p className='mt-37 w-[474px] text-base text-white-60 leading-19 -tracking-0.5'>
              Keep track of customer information, communication history, and preferences, allowing you to offer personalized service and improve client relationships.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
