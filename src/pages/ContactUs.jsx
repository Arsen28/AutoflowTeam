import { SectionTitle } from "@/components/SectionTitle";
import LocationIcon from '@/assets/locationIcon.png'
import DraftsIcon from '@/assets/draftsIcon.png'
import PhoneIcon from '@/assets/phoneIcon.png'
import { Link } from "react-router-dom";
import { Fragment } from "react";

export const ContactUs = () => {

  return (
    <div className="flex justify-between gap-12 mb-[64px] lg:mb-[204px] lg:px-22">
      <div className="w-full">
        <SectionTitle text="// get in touch" />
        <p className="mt-4 mb-4 text-5xl lg:text-8xl font-medium leading-none -tracking-[1.92px] lg:-tracking-3.84">Contact us</p>
        <p className='max-w-[352px] text-[#FFFFFF99] text-[14px] lg:text-base leading-[21px] lg:leading-24 -tracking-[0.28px] lg:-tracking-0.5'>
          If you have any queries or need any assistance, please get in touch with us. We will get back as soon as possible.
        </p>
        <div className="lg:hidden mt-9 w-full">
          <Form />
        </div>
        <div className="flex items-center mt-[62px] lg:mt-[76px]">
          <div className="w-[60px] h-[60px] mr-5 flex items-center justify-center border border-[#fffffa33] rounded-12">
            <img
              className="w-6 h-6"
              src={LocationIcon}
              alt="location"
            />
          </div>
          <div>
            <p className="text-lg leading-25">23, Lorem ipsum, sit dolar</p>
            <p className="text-lg leading-25">Nashville</p>
          </div>
        </div>
        <div className="flex items-center mt-9">
          <div className="w-[60px] h-[60px] mr-5 flex items-center justify-center border border-[#fffffa33] rounded-12">
            <img
              className="w-6 h-6"
              src={DraftsIcon}
              alt="drafts"
            />
          </div>
          <div>
            <p className="text-lg leading-25">contact@autoflowl.com</p>
          </div>
        </div>
        <div className="flex items-center mt-9">
          <div className="w-[60px] h-[60px] mr-5 flex items-center justify-center border border-[#fffffa33] rounded-12">
            <img
              className="w-6 h-6"
              src={PhoneIcon}
              alt="phone"
            />
          </div>
          <div>
            <p className="text-lg leading-25">+44 00 000 000</p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block mt-7 w-full max-w-[532px]">
        <Form />
      </div>
    </div>
  )
};

const Form = () => {
  return (
    <Fragment>
      <input
        className="mb-7 bg-[#2424244D] border border-[#fffffa33] rounded-12 text-[#FFFFFF99] text-lg leading-28 block w-full px-8 py-[14px]" 
        placeholder="Name"
        required
      />
      <input
        type="email"
        className="mb-7 bg-[#2424244D] border border-[#fffffa33] rounded-12 text-[#FFFFFF99] text-lg leading-28 block w-full px-8 py-[14px]" 
        placeholder="Email"
        required
      />
      <textarea
        rows="4"
        className="block px-8 py-[18px] w-full text-lg leading-28 text-[#FFFFFF99] bg-[#2424244D] rounded-12 border border-[#fffffa33]"
        placeholder="Message"
      ></textarea>
      <Link to='/message-sent' >
        <button
          className="mt-9 lg:mt-[136px] h-[45px] lg:h-[51px] bg-green-200 text-xs text-[#090909] font-semibold w-full px-4 flex items-center justify-center rounded-[100px] "
        >
          SEND MESSGAGE
        </button>
      </Link>
    </Fragment>
  )
};

