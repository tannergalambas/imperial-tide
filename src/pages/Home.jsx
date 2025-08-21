import React from 'react'
import { Helmet } from 'react-helmet-async'
import TideCamp from '../components/TideCamp'
import MailingList from '../components/MailingList'
import VideoFeature from '../components/VideoFeature'

export default function Home(){
  return (
    <>
      <Helmet>
        <title>Imperial Tide — Fan Clone</title>
        <meta name="description" content="A fan-made React clone inspired by imperialtide.com" />
      </Helmet>
      <VideoFeature /> {/* ✅ insert it where you want it to appear */}
      <TideCamp />
      <MailingList />
    </>
  )
}
