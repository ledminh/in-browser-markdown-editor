import { FunctionComponent, useEffect } from "react"

import styles from './SideMenu.module.scss';
import FileTab, {FileTabsWrapper} from "./FileTab";
import ThemeSwitch from "./ThemeSwitch";

import Title from "../Title";
import { DocsListType } from "../../useData";

const SideMenu:FunctionComponent<{light: boolean, setLightMode: (light:boolean) => void, docsList: DocsListType, setDocCurrent: (id: string) => void, createNewDoc: () => void}> = ({light, setLightMode, docsList, setDocCurrent, createNewDoc}) => {
    

    return (
        <>
            <Title />
            <h3 className={styles.myDocument}>
                MY DOCUMENTS
            </h3>
            <button className={styles.newDocumentButton}
                onClick={createNewDoc}
            >
                <h2>+ New Document</h2>
            </button>
            <FileTabsWrapper>
                {
                    docsList.map(({createdAt,name, id, current}) => (
                        <FileTab
                            key={id}
                            date={createdAt}
                            filename={name}
                            setDocCurrent={setDocCurrent}
                            id={id}
                            current={current}
                        />
                    ))
                }
            </FileTabsWrapper>
            <ThemeSwitch  
                light={light}
                setLightMode={setLightMode}/>
        </>
    )
}

export default SideMenu;