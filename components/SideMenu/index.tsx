import { FunctionComponent } from "react"

import styles from './SideMenu.module.scss';


const SideMenu:FunctionComponent = () => {

    return (
        <>
            <div className={styles.title}>
                <span>MARKDOWN</span>
            </div>
            <h2 className={styles.myDocument}>
                MY DOCUMENTS
            </h2>
            <button>+ New Document</button>
            <div>
                <div>IM</div>
                <span>01 April 2022</span>
                <span>untitled-document.md</span>
            </div>
            <div>
                <div>IM</div>
                <span>01 April 2022</span>
                <span>welcome.md</span>
            </div>
            <div>Switch theme</div>
        </>
    )
}

export default SideMenu;