import { useLocation, Link } from 'react-router-dom'

export const GetItDone = () => {
  const location = useLocation()
  const path = location.pathname
  return (
    <div className="max-w-1248 h-[208px] lg:h-303 bg-green-200 mx-auto w-full flex items-center justify-between rounded-12 ">
      <div className='w-full flex flex-col items-center justify-center'>       
        <div className="">
          <span className='uppercase text-xs text-black-200 font-semibold leading-8'>
            // get it done
          </span>
        </div>
        <p className='mt-[18px] lg:mt-29 text-black text-[28px] lg:text-6xl leading-[28px] lg:leading-42 font-medium'>Ready to get started?</p>
        <div className='flex gap-10 mt-[36px] lg:mt-16'>
          {
            !path.includes('get-in-touch') && (
              <Link to='/get-in-touch'>
                <button
                  type="button" 
                  className="uppercase bg-black-200 text-green-200 text-xs font-semibold rounded-full leading-8 px-4 py-3 text-center"
                >
                  join waitlist
                </button>
              </Link>
            )
          }
          {
            !path.includes('contact') && (
              <Link to='/contact'>
                <button
                  type="button"
                  className="uppercase box-border text-black-200 border border-black-200 text-xs font-semibold rounded-full leading-8 px-4 py-10 text-center"
                >
                  Contact us
                </button>
              </Link>
            )
          }
        </div>
      </div>
    </div>
  )
}

