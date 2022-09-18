import { useState } from 'react';

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import favicon from '../assets/favicon-32x32.png';
import SideMenu from '../components/SideMenu';
import Panel from '../components/Panel';


import MainSection from '../layouts/MainSection';

import TextArea from '../components/TextArea';
import Preview from '../components/Preview';

import Modal from '../components/Modal';

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon.src} />
        <title>Frontend Mentor | In-browser markdown editor</title>
      </Head>
      <div className={styles.container}>
        <aside className={styles.aside}>
          <SideMenu/>
        </aside>
        <main>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          <Panel setShowModal={setShowModal}/>
          {/* <MainSection
              section="EDITOR"
            >
            <TextArea />
          </MainSection> */}
          {/* <MainSection
              section="PREVIEW"
            >
            <Preview />
          </MainSection> */}
          
        </main>
        {/* <Modal onClose={() => setShowModal(false)}
                show={showModal}
                title={"Delete this document?"}
        >
          <>Hello</>
        </Modal>
        <div id="modal-root"></div> */}
      </div>
    </>
  )
}

export default Home
