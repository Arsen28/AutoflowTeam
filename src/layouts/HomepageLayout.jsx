import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchInitDataAsync } from '@/redux/clientReducer'

import { Header } from '@/components/Header'
import { GetItDone } from '@/components/GetItDone'
import { PreFooter } from '@/components/PreFooter'
import { Footer } from '@/components/Footer'
import { Spinner } from '@/components/Spinner'
import { Masks } from '@/components/Masks'

import Mask1 from '@/assets/masks/Mask_1.png'
import Mask2 from '@/assets/masks/Mask_2.png'
import Mask3 from '@/assets/masks/Mask_3.png'
import Mask4 from '@/assets/masks/Mask_4.png'
import Mask5 from '@/assets/masks/Mask_5.png'
import Mask6 from '@/assets/masks/Mask_6.png'

export const HomepageLayout = ({ children }) => {
  const dispatch = useDispatch()
  const location = useLocation()
  const path = location.pathname
  const [height, setHeight] = useState(5151)
  const ref = useRef(null)

  const { loadingInitData } = useSelector((state) => state.client)

  useEffect(() => {
    dispatch(fetchInitDataAsync())
  }, [dispatch])

  useEffect(() => {
    if (ref?.current) {
      console.log('ref', ref.current?.offsetHeight);
      setHeight(ref.current?.offsetHeight - 1229)
    }
  }, [path])

  if (loadingInitData) {
    return (
      <div className="w-full h-svh">
        <Spinner />
      </div>
    )
  }
  console.log('height', height);
  return (
    <div className="relative w-full h-full font-hoves">
      <Masks height={height} />
      <div ref={ref} id='layout-content' className="absolute w-full h-auto z-1">
        <Header />
        <div className={`max-w-1292 mx-auto pt-[105px] px-4 lg:pt-[120px] relative w-full h-auto `}>
          {children}
          <GetItDone />
          <PreFooter />
        </div>
        <Footer />
      </div>
    </div>
  )
}


HomepageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

Masks.propTypes = {
  height: PropTypes.number.isRequired,
}
