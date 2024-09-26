import React, { Fragment } from 'react';
import { SectionTitle } from "@/components/SectionTitle";
import { PaymentMethodCard } from '@/components/PaymentMethodCard';

const data = [
  {
    id: '01',
    title: "Fleet Management",
    description: "Gain comprehensive control over your fleet with our advanced Fleet Management feature. Track vehicle status, monitor maintenance schedules, and manage availability from a single platform."
  },
  {
    id: '02',
    title: "Dashboard",
    description: "Access a centralized Dashboard that offers a snapshot of your business’s key metrics. With real-time updates and an easy-to-navigate interface, the Dashboard provides critical insights into your bookings, fleet performance, and financials, enabling you to make data-driven decisions quickly."
  },
  {
    id: '03',
    title: "Booking Calendar",
    description: "Effortlessly manage all your reservations with our intuitive Booking Calendar. View and organize bookings in real-time, avoid double bookings, and ensure smooth scheduling for both you and your customers."
  },
  {
    id: '04',
    title: "Accept Payments",
    description: "Simplify payment processing with our integrated payment system. Accept a variety of payment methods securely and efficiently, directly through your booking platform. Streamline transactions and ensure a smooth payment experience for your customers."
  },
  {
    id: '05',
    title: "Streamlined Bookings",
    description: "Enhance the booking experience with a user-friendly interface that allows customers to make reservations effortlessly. Our system provides real-time updates and confirmation, reducing manual tasks and improving overall customer satisfaction."
  },
  {
    id: '06',
    title: "In-Depth Analytics",
    description: "Unlock valuable insights with our detailed Analytics feature. Generate comprehensive reports on booking trends, fleet utilization, and customer behavior. Use these insights to make strategic decisions, optimize your operations, and drive business growth."
  },
  {
    id: '07',
    title: "Customer Management",
    description: "Manage customer profiles and interactions seamlessly. Our Customer Management feature helps you keep track of customer information, communication history, and preferences, allowing you to offer personalized service and improve client relationships."
  },
  {
    id: '08',
    title: "24/7 Support",
    description: "Access dedicated support anytime with our 24/7 assistance team. Whether you have questions or encounter issues, our knowledgeable support staff is ready to provide solutions and ensure your operations run smoothly."
  },
  {
    id: '09',
    title: "Website Widget",
    description: "Integrate our user-friendly booking widget directly into your website. The widget allows customers to book vehicles effortlessly, enhancing their experience and increasing your conversion rates. Customize the widget to fit seamlessly with your site’s design."
  },
  {
    id: '10',
    title: "Contract Upload and E-Signature",
    description: "Streamline your contract management with our Upload and E-Signature feature. Easily upload contracts, have them signed electronically, and manage all documentation digitally. This reduces paperwork, speeds up the process, and ensures secure and efficient contract handling."
  },
];

export const ChooseAutoflowPage = () => {

  return (
    <div className="px-22 w-full h-full flex flex-col items-center">
      <div className='w-[614px] pb-20 flex flex-col items-center'>
        <SectionTitle text="// why choose autoflow" />
        <p className='mt-7 text-[96px] text-center leading-[96px] -tracking-3'>
          Everything in one place
        </p>
      </div>
      <PaymentMethodCard />
      <div className='w-full'>
        <div className=' mt-61'>
          <div className='mt-77 mb-[90px]'>
            {
              data.map((item, index) => {
                const isLast = data.length == index + 1;
                return (
                  <Fragment
                    key={item.id}
                  >
                    <div className='flex'>
                      <div className='w-1/2 flex items-center'>
                        <div className='mr-6 bg-green-200 rounded-full w-40 h-30 flex items-center justify-center'>
                          <span className='text-black text-sm leading-10'>{item.id}</span>
                        </div>
                        <p className='text-2xl leading-17 text-white'>{item.title}</p>
                      </div>
                      <div className='w-1/2 mt-6'>
                        <p className='text-gray-110 leading-19 -tracking-0.5'>{item.description}</p>
                      </div>
                    </div>
                    { !isLast && <div className='w-full h-px bg-gradient-to-r from-white to-white-0 my-[60px]'></div> }
                    <div
                      className="opacity-40"
                      style={{
                        background: 'linear-gradient(270deg, #FFF 12.06%, rgba(255, 255, 255, 0) 102.08%)',
                      }}
                    >
                    </div>
                  </Fragment>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
};
