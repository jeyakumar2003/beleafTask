import React from 'react'
import { HomeBanner } from './HomeBanner'
import { HomeLogo } from './HomeLogo'
import { HomeFeatures } from './HomeFeatures'
import { HomeBenifit } from './HomeBenifit'
import { TopFeatures } from './TopFeatures'
import { HomeApps } from './HomeApps'
import { HomeIntergation } from './HomeIntergation'
import MobileApps from './MobileApps'
import Testimonial from './Testimonial'
import Faqs from './Faqs'
import Plans from './plans'
import NewsLetter from './NewsLetter'


export const Home = () => {
  return (
    <div >
      <HomeBanner/>
      <HomeLogo/>
      <HomeFeatures/>
      <HomeBenifit/>
      <TopFeatures/>
      <HomeApps/>
      <HomeIntergation/>
      <MobileApps/>
      <Testimonial/>
      <Plans/>
      <Faqs/>
      <NewsLetter/>
    </div>
  )
}
