import React, { useState, useRef, useEffect } from 'react';

import useData from '../useData';
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import favicon from '../assets/favicon-32x32.png';
import SideMenu from '../components/SideMenu';
import Panel from '../components/Panel';

import addShortcuts from '../utils/addShortcuts';

import MainSection, { SectionType } from '../layouts/MainSection';

import TextArea from '../components/TextArea';
import Preview from '../components/Preview';
import DeleteModal from '../components/Modal/DeleteModal';
import SaveModal from '../components/Modal/SaveModal';

import EmptyScreen from '../components/EmptyScreen';

import { DocType } from '../useData';
import ShortcutModal from '../components/Modal/ShortcutModal';

const Home: NextPage<{initDocs: DocType[]}> = ({initDocs}) => {
  const previewRef = useRef<HTMLDivElement>(null);

  // UI states
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showShortcutModal, setShowShortcutModal] = useState(false);

  const [curSection, setCurSection] = useState<SectionType>('EDITOR');

  const [lightMode, setLightMode] = useState<boolean>(true);
  const [showMenu, setShowMenu] = useState<boolean>(false);


  //Data states
  const {
    getCurrentDoc, setDocCurrent, setCurDocContent, createNewDoc, saveToLocalStorage, getDocsList, deleteCurDoc, updateDocInLocalStorage, isEmpty, setNext, setPrev
  } = useData(initDocs);



  useEffect(() => {
    const hideMenu = () => setShowMenu(false);
    const shortCutsHandle = (e:KeyboardEvent) => addShortcuts(e, createNewDoc, deleteCurDoc, setShowSaveModal, isEmpty, setNext, setPrev, showMenu, setShowShortcutModal);

    document.addEventListener('click', hideMenu);


    document.addEventListener('keydown', shortCutsHandle);

    return () => {
      document.removeEventListener('click', hideMenu);
      document.removeEventListener('keydown', shortCutsHandle);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createNewDoc, deleteCurDoc, setShowSaveModal, saveToLocalStorage, isEmpty, showMenu]);



  const docsList = getDocsList();
  const curDoc = getCurrentDoc();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon.src} />
        <title>Frontend Mentor | In-browser markdown editor</title>
      </Head>
      <div className={styles.container} data-light={lightMode}>
        <aside className={styles.aside + (showMenu? ' ' + styles.showMenu: '')}
          onClick={(e) => e.stopPropagation()}
        >
          <SideMenu 
            setLightMode={setLightMode}
            light={lightMode}
            docsList={docsList}
            setDocCurrent={setDocCurrent}
            createNewDoc={createNewDoc}
          />
        </aside>
        <main className={styles.main + (showMenu? ' ' + styles.showMenu: '')}>
          <Panel setShowDeleteModal={setShowDeleteModal}
                  setShowSaveModal={setShowSaveModal}
                  setShowMenu={setShowMenu}
                  showMenu={showMenu}
                  filename={curDoc? curDoc.name : ''}
                  savingSource={curDoc?.savedAt}
                  noDoc={isEmpty()}
            />
            {
              isEmpty()? 
                <EmptyScreen />
                :
                <>
                  <MainSection
                      section="EDITOR"
                      curSection={curSection}
                      setCurSection={setCurSection}
                    >
                    <TextArea docContent={curDoc? curDoc.content: ''}
                              setContent={setCurDocContent}
                              
                          />
                  </MainSection>
                  <MainSection
                      section="PREVIEW"
                      curSection={curSection}
                      setCurSection={setCurSection}
                    >
                    <Preview docContent={curDoc? curDoc.content: ''}
                        previewRef={previewRef}
                      />
                  </MainSection>          
                </>
            }
        </main>
        <DeleteModal
          showModal={showDeleteModal}
          setShowModal={setShowDeleteModal}
          deleteCurDoc={deleteCurDoc}
          filename={curDoc?.name}
        />
        <SaveModal 
          showModal={showSaveModal}
          setShowModal={setShowSaveModal}
          curID={curDoc? curDoc.id: ''}
          saveToLocalStorage={saveToLocalStorage}
          savingSource={curDoc?.savedAt}
          updateDocInLocalStorage={updateDocInLocalStorage}
        />
        <ShortcutModal 
          showModal={showShortcutModal}
          setShowModal={setShowShortcutModal}
        />

        <div className="modal-root"></div>
      </div>
    </>
  )
}

export default Home


export async function getStaticProps() {
  return { props: { initDocs: [
    {
      id: 'md_000000',
      "createdAt": "04-01-2022",
      "name": "welcome.md",
      "content": "# Welcome to Markdown\n\nMarkdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.\n\n## How to use this?\n\n1. Write markdown in the markdown editor window\n2. See the rendered markdown in the preview window\n\n### Features\n\n- Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists\n- Name and save the document to access again later\n- Choose between Light or Dark mode depending on your preference\n\n> This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/).\n\n#### Headings\n\nTo create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You'll see in this guide that we've used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.\n\n##### Lists\n\nYou can see examples of ordered and unordered lists above.\n\n###### Code Blocks\n\nThis markdown editor allows for inline-code snippets, like this: `<p>I'm inline</p>`. It also allows for larger code blocks like this:\n\n```\n<main>\n  <h1>This is a larger code block</h1>\n</main>\n```",
      current: true,
      savedAt: 'NONE' 
    }
  ] } }
}




