import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import favicon from '../assets/favicon-32x32.png';
import SideMenu from '../components/SideMenu';
import Panel from '../components/Panel';


import MainSection from '../layouts/MainSection';

import TextArea from '../components/TextArea';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon.src} />
        <title>Frontend Mentor | In-browser markdown editor</title>
      </Head>
      <div className={styles.container}>
        {/* <aside className={styles.aside}>
          <SideMenu/>
        </aside> */}
        <main>
          <Panel />
          <MainSection
              section="EDITOR"
            >
            <TextArea />
          </MainSection>
          {/* <MainSection>
            <span>Preview</span>
          </MainSection> */}
        </main>
      </div>
    </>
  )
}

export default Home
