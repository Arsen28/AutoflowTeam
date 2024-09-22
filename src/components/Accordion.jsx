import { Fragment, useState } from "react";
import MinusIcon from '../assets/minusIcon.png'
import AddIcon from '../assets/addIcon.png'

export const Accordion = ({ data }) => {
  const [activeId, setActiveId] = useState(1);

  const handleChange = (id) => {
    if(id === activeId) {
      return setActiveId(0);
    }
    setActiveId(id);
  }

  return (
    <div className='mt-45'>
      {
        data?.map((item, index) => {
          const active = item.id === activeId;
          return (
            <Fragment key={item.id.toString()}>
              <div className='flex justify-between w-full mb-35'>
                <div className=' mr-143'>
                  <p className='text-2xl text-white leading-17'>
                    {item.question}
                  </p>
                  {
                    active && (
                      <p className='mt-8 text-base text-gray-110 leading-19 -tracking-0.3'>
                        {item.answer}
                      </p>
                    )
                  }
                </div>
                <button 
                  className={`${active ? 'bg-green-200' : 'border border-white'} rounded-full min-w-58 w-58 h-36 flex items-center justify-center`}
                  onClick={() => handleChange(item.id)}
                >
                  <img
                    src={ active ? MinusIcon : AddIcon }
                    className='w-6 h-6 min-w-6'
                  />
                </button>
              </div>
              { index != data.length -1 && <div className='mb-45 w-full h-px bg-gradient-to-r from-white to-white-0 '></div> }
            </Fragment>
          )
        })
      }
    </div>
  )
}