import React, { forwardRef, useRef } from 'react';
import { Routes, Route } from 'react-router-dom'

import { AuthProvider } from '@/lib/auth-util'

import { Faq } from '@/pages/Faq'
import { Home } from '@/pages/Home'
import { ContactUs } from '@/pages/ContactUs'
import { TermsAndConditions } from '@/pages/TermsAndConditions'

import UserLayout from '@/layouts/UserLayout'

import DashboardPage from '@/pages/user/DashboardPage'
import FleetPage from '@/pages/user/FleetPage'
import BookingsPage from '@/pages/user/BookingsPage'
import AnalyticsPage from '@/pages/user/AnalyticsPage'
import SupportPage from '@/pages/user/SupportPage'
import SettingsPage from '@/pages/user/SettingsPage'
import { ChooseAutoflowPage } from '@/pages/ChooseAutoflowPage'
import { GetInTouch } from '@/pages/GetInTouch'
import { ThankYouPage } from '@/pages/ThankYouPage'
import { MessageSentPage } from '@/pages/MessageSentPage'
import { SignUpLayout } from '@/layouts/SignUpLayout'
import { SignUpRoutes } from './SignUpRoutes'
import LoginPage from '@/pages/LoginPage'
import { Pricing } from '@/components/Pricing'

export const HomepageRoutes = forwardRef(({}) => {
  const pricingRef = useRef(null);
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/faq" element={<Faq />} />
      <Route exact path="/contact" element={<ContactUs />} />
      <Route exact path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route exact path="/choose-autoflow" element={<ChooseAutoflowPage />} />
      <Route exact path="/get-in-touch" element={<GetInTouch />} />
      <Route exact path="/thank-you" element={<ThankYouPage />} />
      <Route exact path="/message-sent" element={<MessageSentPage />} />
      <Route exact path="/pricing" element={<Pricing ref={pricingRef} />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  )
});

export const UserRoutes = () => {
  return (
    <AuthProvider>
      <UserLayout>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/fleet" element={<FleetPage />} />
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </UserLayout>
    </AuthProvider>
  )
}

export const SignupRoutes = () => {
  return (
    <AuthProvider>
      <SignUpLayout>
        <SignUpRoutes />
      </SignUpLayout>
    </AuthProvider>
  )
}
