import { Link } from 'react-router-dom'
import Logo from '@/assets/logo.png'

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
    path: '/pricing',
  },
  {
    name: "features",
    path: '/choose-autoflow'
  },
  {
    name: 'dashboard',
    path: '/user/dashboard',
  },
  {
    name: 'sign up',
    path: '/private/sign-up ',
  },
]

export const Header = () => {
  return (
    <div className="fixed z-50 w-full top-0 left-0 h-56 px-9 header-bg">
      <div className="h-full flex items-center justify-between">
        <Link to="/">
          <img src={Logo} alt="header_logo" />
        </Link>
        <div>
          <nav className="flex gap-40">
            {Links.map((link, index) => {
              return (
                <Link key={index.toString()} to={link.path} className="">
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
