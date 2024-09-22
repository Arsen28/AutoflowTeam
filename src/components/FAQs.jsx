import { SectionTitle } from './SectionTitle';
import { Accordion } from './Accordion';

const data = [
  {
    id: 1,
    question: 'What is Autoflow?',
    answer: 'Autoflow is a comprehensive fleet management software designed to help rental car fleets stay organized, manage bookings, and optimize operations from start to finish.'
  },
  {
    id: 2,
    question: 'What features does Autoflow offer?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Quam mi rhoncus ac odio tempor.'
  },
  {
    id: 3,
    question: 'How can Autoflow help manage my fleet?',
    answer: 'Quam mi rhoncus ac odio tempor. Proin quam vitae tellus sagittis fusce nulla ut. Risus odio at cursus turpis tortor.'
  },
  {
    id: 4,
    question: 'Can Autoflow handle contracts and payments?',
    answer: 'Bibendum ultricies at tristique volutpat aliquet faucibus sodales.'
  },
  {
    id: 5,
    question: 'How does Autoflow provide analytics?',
    answer: 'Proin quam vitae tellus sagittis fusce nulla ut. Risus odio at cursus turpis tortor.'
  }
];

export const FAQs = () => {

  return (
    <div className="max-w-1248 mx-auto w-full h-full mt-180 flex justify-between">
      <div className='w-315 mr-139'>
        <div className=''>
          <SectionTitle text="// FAQS" />
          <p className='mt-32 text-6xl leading-51 -tracking-3'>
            Frequently asked questions
          </p>
        </div>
      </div>
      <div className='w-[794px]'>
        <Accordion data={data}/>
      </div>
    </div>
  )
}
