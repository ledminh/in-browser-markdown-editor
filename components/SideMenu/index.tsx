import { FunctionComponent } from "react"

import styles from './SideMenu.module.scss';
import FileTab, {FileTabsWrapper} from "./FileTab";
import ThemeSwitch from "./ThemeSwitch";

import Title from "../Title";
const SideMenu:FunctionComponent<{light: boolean, setLightMode: (light:boolean) => void}> = ({light, setLightMode}) => {

    return (
        <>
            <Title />
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
            <ThemeSwitch  
                light={light}
                setLightMode={setLightMode}/>
        </>
    )
}

export default SideMenu;