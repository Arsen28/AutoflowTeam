import { SectionTitle } from './SectionTitle';
import Calendar from '../assets/calendar.png'

export const TripTracking = () => {
  return (
    <div className="max-w-1248 mx-auto w-full h-full mt-[95px] flex justify-between pt-72 rounded-12 border border-gray-120 ">
      <div className=''>
        <div className='pl-110 pr-132 mt-61'>
          <SectionTitle text="// FLEET MANAGMENT" />
          <p className='mt-32 text-5xl leading-46 -tracking-3'>
            Effortlessly manage your vehicle bookings and fleet.
          </p>
          <p className='mt-48 w-[398px] text-base text-white-60 leading-24 -tracking-0.5'>
            Manage your vehicle bookings, customers & more with our user-friendly platform. Streamline your operations by organizing reservations, tracking vehicle availability, and maintaining detailed customer records, all in one place.
          </p>
        </div>
      </div>
      <div className='flex items-end justify-end'>
        <div className='w-557 h-488 rounded-tl-12 rounded-br-12 border border-gray-120 ' >
          <div className='w-full h-122 pt-9 pl-42'>
            <p className='text-xs leading-8 text-white'>2024</p>
            <p className='mt-14 text-4xl leading-25 text-white'>June</p>
          </div>
          <div className='w-full h-365'>
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
