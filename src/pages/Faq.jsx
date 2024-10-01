import { SectionTitle } from "@/components/SectionTitle";
import { Accordion } from "@/components/Accordion";
import { ReviewsSlider } from "@/components/ReviewsSlider";


const data = [
  {
    id: 1,
    question: 'Can I track vehicle maintenance schedules with Autoflow?',
    answer: `Yes, Autoflow's Fleet Management feature allows you to set and monitor vehicle maintenance schedules, ensuring timely servicing and reducing the risk of breakdowns, which helps maintain your fleet in top condition.`
  },
  {
    id: 2,
    question: `How does Autoflow’s Fleet Management feature help my business?`,
    answer: 'Autoflow’s Fleet Management allows you to track vehicle status, schedule maintenance, and manage availability, all from a single platform. This ensures your fleet operates efficiently and reduces downtime due to maintenance issues.'
  },
  {
    id: 3,
    question: 'How does the Dashboard help me track my business performance?',
    answer: 'The Dashboard provides real-time data and key metrics on bookings, fleet performance, and financials. This allows you to quickly assess the health of your business and make informed, data-driven decisions.'
  },
  {
    id: 4,
    question: 'What payment methods can Autoflow accept?',
    answer: 'Autoflow integrates with various payment gateways, enabling you to securely accept credit cards, debit cards, and other digital payment methods, providing a smooth and secure checkout process for your customers.'
  },
  {
    id: 5,
    question: 'How can Autoflow’s Customer Management feature improve customer service?',
    answer: 'With Customer Management, you can store customer details, communication history, and preferences, helping you deliver personalized service and strengthen customer relationships.'
  },
  {
    id: 6,
    question: 'Can I track vehicle maintenance schedules with Autoflow?',
    answer: `Yes, Autoflow's Fleet Management feature allows you to set and monitor vehicle maintenance schedules, ensuring timely servicing and reducing the risk of breakdowns, which helps maintain your fleet in top condition.`
  }
];


export const Faq = () => {

  return (
    <div className="lg:px-22 mb-[65px]">
      <SectionTitle text="// ask anything" />
      <p className="mt-4 text-8xl font-medium leading-none -tracking-3.84">FAQ’s</p>
      <div className="pt-39 w-full">
        <Accordion data={data}/>
      </div>
      <div className="w-full flex justify-center mt-[92px] mb-[48px]">
        <div className="w-full max-w-[438px]">
          <button
            type="button"
            style={{boxSizing: 'border-box'}}
            className="uppercase box-border w-full text-white border-2 text-xs font-semibold rounded-full leading-8 px-4 py-10 text-center"
          >
            READ MORE
          </button>
        </div>
      </div>
      <div className="">
        <SectionTitle text="// what people say about us" />
        <p className="mt-4 text-6xl font-medium leading-none -tracking-2.4">Customer reviews</p>
      </div>
      <div className="w-full flex items-center justify-center">
        <ReviewsSlider />
      </div>
    </div>
  )
};

