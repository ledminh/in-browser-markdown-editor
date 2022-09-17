import { FunctionComponent } from "react";
import styles from './SectionTitle.module.scss';

import Image from 'next/image';
import iconShowPreview from '../../assets/icon-show-preview.svg';
import iconHidePreview from '../../assets/icon-hide-preview.svg';

import { SectionType } from ".";


const SectionTitle:FunctionComponent<{section:SectionType}> = ({section}) => {


    return(
        <div className={styles.sectionTitle}>
            <div className={styles.title}><h2>{section === 'EDITOR'? 'MARKDOWN' : 'PREVIEW'}</h2></div>
            <div className={styles.previewEditorSwitch}>
                {
                    section === 'EDITOR'?
                    <Image
                        src={iconShowPreview}
                        alt="show preview icon"
                    />
                    :
                    <Image
                        src={iconHidePreview}
                        alt="hide preview icon"
                    />
                }
            </div>
        </div>
    )
}

export default SectionTitle;