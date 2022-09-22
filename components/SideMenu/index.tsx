import { FunctionComponent } from "react"

import styles from './SideMenu.module.scss';
import FileTab, {FileTabsWrapper} from "./FileTab";
import ThemeSwitch from "./ThemeSwitch";

import Title from "../Title";
import { DocType } from "../../pages";
const SideMenu:FunctionComponent<{light: boolean, setLightMode: (light:boolean) => void, docs:DocType[], curDocIndex:Number, setCurDocIndex: (index:number) => void}> = ({light, setLightMode, docs, curDocIndex, setCurDocIndex}) => {

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
                {
                    docs.map(({createdAt,name}, index) => (
                        <FileTab
                            key={name}
                            date={createdAt}
                            filename={name}
                            index={index}
                            curDocIndex={curDocIndex}
                            setCurDocIndex={setCurDocIndex}
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