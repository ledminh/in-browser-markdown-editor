import { FunctionComponent, useState } from "react";
import SectionTitle from "./SectionTitle";
import styles from './MainSection.module.scss';

export type SectionType = 'EDITOR' | 'PREVIEW';

const MainSection:FunctionComponent<{children:JSX.Element, section:SectionType, curSection: SectionType, setCurSection: (sectionType:SectionType) => void}> = ({children, section, curSection, setCurSection}) => {

    return (
        <section data-show={section === curSection}>
            <SectionTitle section={section} setCurSection={setCurSection}/>
            <div className={styles.body}>
                {children}
            </div>
        </section>
    )

}

export default MainSection;