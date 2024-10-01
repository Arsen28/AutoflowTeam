
import { Link } from 'react-router-dom';
import { SectionTitle } from './SectionTitle';
import EverythingInOnePlace from '../assets/everythingInOnePlace.png'

export const EverythingOnePlace = () => {
  return (
    <div className="max-w-1248 backdrop-blur-[50px] mx-auto w-full h-full mt-[67px] lg:mt-156 mb-[72px] lg:mb-[180px] lg:flex items-center justify-between pt-[32px] lg:pt-98 pb-[64px] lg:pb-88 rounded-12 border border-white-100 ">
      <div className='w-full'>
        <div className='lg:pr-132'>
          <img
            src={EverythingInOnePlace}
            className='w-full lg:w-453 h-auto lg:h-342'
          />
        </div>
      </div>
      <div className='w-full lg:w-1/2 px-4 lg:px-0 mt-6 lg:mt-0 flex items-center'>
        <div className='w-full lg:w-619 lg:mr-45 text-center lg:text-start' >
          <SectionTitle text="// UNLOCK INSIGHTS, DRIVE SUCCESS" classNames='hidden lg:block' />
          <SectionTitle text="// everything in one place" classNames='lg:hidden' />
          <div className='w-full mt-8'>
            <p className='font-medium text-[28px] lg:text-6xl leading-[28px] lg:leading-54 -tracking-[1.12px] lg:-tracking-3'>
              Real-time and predictive analytics to optimize your fleet performance 
            </p>
          </div>
          <div className='w-full flex gap-[6px] lg:gap-10 mt-[48px] lg:mt-16'>
            <Link to='/get-in-touch' className='min-w-[135px] w-1/2'>
              <button
                type="button" 
                className="w-full h-[31px] lg:h-[32px] uppercase text-black-200 bg-green-200 text-[10px] lg:text-xs font-semibold rounded-full lg:leading-8 px-4 text-center"
              >
                <span>JOIN WAITLIST</span>
              </button>
            </Link>
            <Link to='/faq' className='min-w-[155px] w-1/2'>
              <button
                type="button"
                style={{boxSizing: 'border-box'}}
                className="w-full h-[31px] lg:h-[32px] uppercase box-border text-white border-2 text-[10px] lg:text-xs font-semibold rounded-full leading-8 px-4 text-center -tracking-[0.5px]"
              >
                <span>Still got questions?</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
