import React from 'react'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import TideCamp from '../components/TideCamp'
import MailingList from '../components/MailingList'

export default function Home(){
  return (
    <>
      <Helmet>
        <title>Imperial Tide — Fan Clone</title>
        <meta name="description" content="A fan-made React clone inspired by imperialtide.com" />
      </Helmet>
      <Hero />
      <TideCamp />
      <MailingList />
    </>
  )
}
