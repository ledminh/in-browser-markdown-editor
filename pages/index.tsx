import React, { useState } from 'react';

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import favicon from '../assets/favicon-32x32.png';
import SideMenu from '../components/SideMenu';
import Panel from '../components/Panel';


import MainSection, { SectionType } from '../layouts/MainSection';

import TextArea from '../components/TextArea';
import Preview from '../components/Preview';
import DeleteModal from '../components/Modal/DeleteModal';

export type LightMode = 'LIGHT' | 'DARK';

export const ThemeContext = React.createContext<LightMode>('LIGHT');

const Home: NextPage = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [curSection, setCurSection] = useState<SectionType>('EDITOR');

  const [lightMode, setLightMode] = useState<LightMode>('LIGHT');

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon.src} />
        <title>Frontend Mentor | In-browser markdown editor</title>
      </Head>
      <ThemeContext.Provider value = {lightMode}>
        <div className={styles.container}>
          <aside className={styles.aside}>
            <SideMenu 
              setLightMode={setLightMode}
            />
          </aside>
          <main className={styles.main}>
            <Panel setShowDeleteModal={setShowDeleteModal}/>
            <MainSection
                section="EDITOR"
                curSection={curSection}
                setCurSection={setCurSection}
              >
              <TextArea />
            </MainSection>
            <MainSection
                section="PREVIEW"
                curSection={curSection}
                setCurSection={setCurSection}
              >
              <Preview />
            </MainSection>
            
          </main>
          <DeleteModal
            showModal={showDeleteModal}
            setShowModal={setShowDeleteModal}
          />
          <div className="modal-root"></div>
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default Home
