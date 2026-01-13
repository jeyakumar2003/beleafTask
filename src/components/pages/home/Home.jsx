import React from 'react'
import { HomeBanner } from './HomeBanner'
import { HomeLogo } from './HomeLogo'
import { HomeFeatures } from './HomeFeatures'
import { HomeBenifit } from './HomeBenifit'
import { TopFeatures } from './TopFeatures'
import { HomeApps } from './HomeApps'
import { HomeIntergation } from './HomeIntergation'

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
    </div>
  )
}
