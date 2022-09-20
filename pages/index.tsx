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
import SaveModal from '../components/Modal/SaveModal';


const Home: NextPage = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);

  const [curSection, setCurSection] = useState<SectionType>('EDITOR');

  const [lightMode, setLightMode] = useState<boolean>(true);
  const [menuOut, setMenuOut] = useState<boolean>(false);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon.src} />
        <title>Frontend Mentor | In-browser markdown editor</title>
      </Head>
      <div className={styles.container} data-light={lightMode}>
        <aside className={styles.aside + (menuOut? ' ' + styles.menuOut: '')}>
          <SideMenu 
            setLightMode={setLightMode}
            light={lightMode}
          />
        </aside>
        <main className={styles.main + (menuOut? ' ' + styles.menuOut: '')}>
          <Panel setShowDeleteModal={setShowDeleteModal}
                  setShowSaveModal={setShowSaveModal}
                  setMenuOut={setMenuOut}
                  menuOut={menuOut}
            />
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
        <SaveModal 
          showModal={showSaveModal}
          setShowModal={setShowSaveModal}
        />
        <div className="modal-root"></div>
      </div>
    </>
  )
}

export default Home
