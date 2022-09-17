import { FunctionComponent } from "react"

import styles from './SideMenu.module.scss';
import FileTab from "./FileTab";

const SideMenu:FunctionComponent = () => {

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
            <FileTab
                date="01 April 2022"
                filename="untitled-document.md"
            />
            <FileTab
                date="01 April 2022"
                filename="welcome.md"
            />
            <div>Switch theme</div>
        </>
    )
}

export default SideMenu;