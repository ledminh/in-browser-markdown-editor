import { FunctionComponent, useState } from "react";
import SectionTitle from "./SectionTitle";
import styles from './MainSection.module.scss';

export type SectionType = 'EDITOR' | 'PREVIEW';

const MainSection:FunctionComponent<{children:JSX.Element, section:SectionType}> = ({children, section}) => {

    return (
        <>
            <SectionTitle section={section}/>
            <div className={styles.body}>
                {children}
            </div>
        </>
    )

}

export default MainSection;