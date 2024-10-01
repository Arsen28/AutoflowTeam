import { Link } from 'react-router-dom';
import Logo2 from '../assets/logo_2.png'


export const PreFooter = () => {
  return (
    <div className="max-w-[400px] lg:max-w-1248 mx-auto px-[50px] w-full h-full mt-[64px] mb-[36px] lg:mt-96 lg:mb-96 lg:flex justify-between">
      <Link to='/' className="w-full lg:w-229 h-27">
        <img
          src={Logo2}
          alt="header_logo"
          className='w-full h-full'
        />
      </Link>
      <div className='mt-[48px] lg:mt-0 w-full lg:w-315 flex justify-between lg:gap-120 text-center lg:text-start'>
        <div className='w-[40px] lg:w-79'>
          <Link to='/faq'>
            <p className='mb-8 text-withe font-medium text-sm leading-10 -tracking-0.7'>FAQ</p>
          </Link>
          <Link to='/pricing'>
            <p className='mb-8 text-withe font-medium text-sm leading-10 -tracking-0.7'>Pricing</p>
          </Link>
        </div>
        <div className='w-[110px] lg:w-124'>
          <Link to='/privacy-policy'>
            <p className='mb-8 text-withe font-medium text-sm leading-10 -tracking-0.7'>Privacy Policy</p>
          </Link>
          <Link to='/terms-and-conditions'>
            <p className='mb-8 text-withe font-medium text-sm leading-10 -tracking-0.7'>Terms & Conditions</p>
          </Link>
          <Link to='/contact'>
            <p className='text-withe font-medium text-sm leading-10 -tracking-0.7'>Contact Us</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

