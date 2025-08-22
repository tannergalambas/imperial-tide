import React from 'react'
import { Helmet } from 'react-helmet-async'
import VideoFeature from '../components/VideoFeature'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <>
      <Helmet>
        <title>Imperial Tide — Fan Clone</title>
        <meta name="description" content="A fan-made React clone inspired by imperialtide.com" />
      </Helmet>
      <VideoFeature /> {/* ✅ insert it where you want it to appear */}
    </>
  )
}
