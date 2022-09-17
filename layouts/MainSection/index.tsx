import { FunctionComponent, useState } from "react";
import SectionTitle from "./SectionTitle";
import styles from './MainSection.module.scss';

type SectionType = 'EDITOR' | 'PREVIEW';

const MainSection:FunctionComponent<{children:JSX.Element, section:SectionType}> = ({children, section}) => {

    return (
        <>
            <SectionTitle title={section==='EDITOR'? 'MARKDOWN': 'PREVIEW'}/>
            <div className={styles.body}>
                {children}
            </div>
        </>
    )

}

export default MainSection;