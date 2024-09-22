import { SectionTitle } from "@/components/SectionTitle";
import LocationIcon from '@/assets/locationIcon.png'
import DraftsIcon from '@/assets/draftsIcon.png'
import PhoneIcon from '@/assets/phoneIcon.png'


export const ThankYouPage = () => {

  return (
    <div className="px-22 mb-[172px] flex justify-between gap-12">
      <div className="">
        <SectionTitle text="// THANK YOU" />
        <p className="mt-4 mb-9 text-8xl font-medium leading-none -tracking-3.84">You’ve Joined</p>
        <p className='max-w-[486px] text-[#FFFFFF99] leading-24 -tracking-0.5'>
          Thank you for joining the Autoflow waitlist! You’ll receive email updates as we make progress, and we’ll notify you once we’re nearing completion of the software.
        </p>
        <div className="flex items-center mt-[111px]">
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
    </div>
  )
};


