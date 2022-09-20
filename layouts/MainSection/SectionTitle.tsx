import { FunctionComponent } from "react";
import styles from './SectionTitle.module.scss';



import { SectionType } from ".";
import PreviewEditorSwitch from "./PreviewEditorSwitch";
import PreviewFullScreenSwitch from "./PreviewFullScreenSwitch";


const SectionTitle:FunctionComponent<{section:SectionType, setCurSection: (curSection: SectionType) => void, setFullScreen: (fs:boolean) => void, fullscreen:boolean}> = ({section, setCurSection, setFullScreen, fullscreen}) => {


    return(
        <div className={styles.sectionTitle} data-section={section}>
            <div className={styles.title}><h2>{section === 'EDITOR'? 'MARKDOWN' : 'PREVIEW'}</h2></div>
            <PreviewEditorSwitch 
                section={section}
                setCurSection={setCurSection}
            />
            <PreviewFullScreenSwitch 
                section={section}
                setFullScreen={setFullScreen}
                fullscreen={fullscreen}
            />

        </div>
    )
}

export default SectionTitle;