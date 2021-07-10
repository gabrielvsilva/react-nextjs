import React from 'react'
import Head from 'next/head'

import RocketseatLogo from '../assets/rocketseat.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <RocketseatLogo />
      <h1>Next JS</h1>
      <p>A react JS + NextJS structure made by Rocketseat.</p>

    </Container>
  )
}

export default Home
