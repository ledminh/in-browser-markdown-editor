import { FunctionComponent, useState } from "react";
import SectionTitle from "./SectionTitle";
import styles from './MainSection.module.scss';

export type SectionType = 'EDITOR' | 'PREVIEW';

const MainSection:FunctionComponent<{children:JSX.Element, section:SectionType, curSection: SectionType, setCurSection: (sectionType:SectionType) => void}> = ({children, section, curSection, setCurSection}) => {
    const [fullscreen, setFullScreen] = useState(false);

    return (
        <section className={styles.section} 
                    data-show={section === curSection}
                    data-section={section}
                    data-fullscreen={fullscreen}
                    >
            <SectionTitle section={section} 
                        setCurSection={setCurSection}
                        setFullScreen={setFullScreen}
                        fullscreen={fullscreen}
                        />
            <div className={styles.body}>
                {children}
            </div>
        </section>
    )

}

export default MainSection;