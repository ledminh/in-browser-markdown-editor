import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import favicon from '../assets/favicon-32x32.png';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon.src} />
        <title>Frontend Mentor | In-browser markdown editor</title>
      </Head>
    </div>
  )
}

export default Home
