import React, { useRef } from 'react';
import { HomepageLayout } from './HomepageLayout'
import { HomepageRoutes } from '@/routes'

export const Layouts = () => {
  const pricingRef = useRef(null);

  const scrollToSection = (section) => {
    console.log('section', section);
    console.log('pricingRef', pricingRef);
    switch (section) {
      case 'pricing':
        if (pricingRef.current) {
          pricingRef.current.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.error('Pricing section ref is not available');
        }
        break;
      default:
        break;
    }
  };


  return (
    <HomepageLayout scrollToSection={scrollToSection} >
      <HomepageRoutes pricingRef={pricingRef} />
    </HomepageLayout>
  )
}
