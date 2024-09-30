import { Link } from 'react-router-dom'
import Logo from '@/assets/AUTOFLOW.svg'
import MobileLogo from '@/assets/mobile-logo.svg'
import HamburgerMenu from '@/assets/humburger-menu.svg'
import AddIcon from '../assets/add-icon.svg'

const Links = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: "faqs",
    path: '/faq'
  },
  {
    name: "contact us",
    path: '/contact'
  },
  {
    name: "terms",
    path: '/terms-and-conditions'
  },
  {
    name: 'pricing',
    path: '/',
  },
  {
    name: "features",
    path: '/choose-autoflow'
  },
  // {
  //   name: 'dashboard',
  //   path: '/user/dashboard',
  // },
  // {
  //   name: 'sign up',
  //   path: '/private/sign-up ',
  // },
]

export const Header = () => {
  return (
    <div className="fixed z-50 w-full top-0 left-0 h-56 px-4 lg:px-9 header-bg">
      <div className='flex h-full lg:hidden items-center justify-between'>
        <div>
          <img
            src={HamburgerMenu}
            alt="HamburgerMenu"
            
          />
        </div>
        <Link to="/">
          <img src={MobileLogo} alt="header_logo" className='w-[103px] '/>
        </Link>
        <div>
          <img
            src={AddIcon}
            alt="AddIcon"
            
          />
        </div>
      </div>
      <div className="hidden lg:flex h-full items-center justify-between">
        <Link to="/">
          <img src={Logo} alt="header_logo" className='w-[81px] '/>
        </Link>
        <div>
          <nav className="flex gap-40">
            {Links.map((link, index) => {
              return (
                <Link
                  key={index.toString()}
                  to={{
                    pathname: link.path,
                    search: link.name === 'pricing' ? '?goto=pricing' : '',
                  }}
                >
                  <span className="text-xs font-semibold leading-8 uppercase">
                    {link.name}
                  </span>
                </Link>
              )
            })}
          </nav>
        </div>
        <div className='flex gap-[9px]'>
          <Link to='/login'>
            <button
              type="button" 
              className="uppercase text-black-200 bg-white text-xs font-semibold rounded-full leading-8 px-4 py-3 text-center"
            >
              login
            </button>
          </Link>
          <Link to='/get-in-touch'>
            <button
              type="button"
              className="uppercase text-black-200 bg-green-200 text-xs font-semibold rounded-full leading-8 px-4 py-3 text-center"
            >
              join waitlist
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
