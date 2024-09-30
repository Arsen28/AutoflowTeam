import { SectionTitle } from './SectionTitle';
import Calendar from '../assets/calendar.png'

export const TripTracking = () => {
  return (
    <div className="max-w-1248 mx-auto w-full h-full mt-[42px] lg:mt-[95px] lg:flex justify-between pt-[30px] lg:pt-72 rounded-12 border border-gray-120 ">
      <div className=''>
        <div className='pl-[30px] lg:pl-110 pr-[30px] lg:pr-132 lg:mt-61'>
          <SectionTitle text="// FLEET MANAGMENT" />
          <p className='mt-[18px] lg:mt-32 text-2xl lg:text-5xl leading-[26.4px] lg:leading-46 -tracking-[0.96px] lg:-tracking-3'>
            Effortlessly manage your vehicle bookings and fleet.
          </p>
          {/* <p className='mt-48 max-w-full w-[398px] text-base text-white-60 leading-24 -tracking-0.5'>
            Manage your vehicle bookings, customers & more with our user-friendly platform. Streamline your operations by organizing reservations, tracking vehicle availability, and maintaining detailed customer records, all in one place.
          </p> */}
          <p className='mt-[30px] lg:mt-37 max-w-full w-[499px] text-xs lg:text-base text-white-60 leading-[12px] lg:leading-19 -tracking-[0.24px] lg:-tracking-0.5'>
            Manage your vehicle bookings, customers & more with our user-friendly platform. Streamline your operations by organizing reservations, tracking vehicle availability, and maintaining detailed customer records, all in one place.
          </p>
        </div>
      </div>
      <div className='flex items-end justify-end mt-[36px] lg:mt-0'>
        <div className='w-[314px] lg:w-557 h-[279px] lg:h-488 rounded-tl-12 rounded-br-12 border border-gray-120 ' >
          <div className='w-full h-[70px] lg:h-122 pt-[20px] lg:pt-9 pl-[24px] lg:pl-42'>
            <p className='text-[10px] lg:text-xs leading-8 text-white'>2024</p>
            <p className='mt-[10px] lg:mt-14 text-[20px] lg:text-4xl leading-25 text-white'>June</p>
          </div>
          <div className='w-full h-[209px] lg:h-365 '>
            <img
              src={Calendar}
              className='w-full h-full'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
