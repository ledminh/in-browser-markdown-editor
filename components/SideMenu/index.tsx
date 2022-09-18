import { FunctionComponent } from "react"

import styles from './SideMenu.module.scss';
import FileTab, {FileTabsWrapper} from "./FileTab";
import ThemeSwitch from "./ThemeSwitch";
import { LightMode } from "../../pages";

const SideMenu:FunctionComponent<{setLightMode: (mode:LightMode) => void}> = ({setLightMode}) => {

    return (
        <>
            <h1 className={styles.title}>
                MARKDOWN
            </h1>
            <h3 className={styles.myDocument}>
                MY DOCUMENTS
            </h3>
            <button className={styles.newDocumentButton}>
                <h2>+ New Document</h2>
            </button>
            <FileTabsWrapper>
                
                <FileTab
                    date="01 April 2022"
                    filename="welcome.md"
                />
                <FileTab
                    date="01 April 2022"
                    filename="untitled-document.md"
                />


            </FileTabsWrapper>
            <ThemeSwitch  setLightMode={setLightMode}/>
        </>
    )
}

export default SideMenu;