import { FunctionComponent } from "react";
import styles from './SectionTitle.module.scss';

import Image from 'next/image';
import iconShowPreview from '../../assets/icon-show-preview.svg';
import iconHidePreview from '../../assets/icon-hide-preview.svg';

import { SectionType } from ".";


const SectionTitle:FunctionComponent<{section:SectionType, setCurSection: (curSection: SectionType) => void}> = ({section, setCurSection}) => {


    return(
        <div className={styles.sectionTitle}>
            <div className={styles.title}><h2>{section === 'EDITOR'? 'MARKDOWN' : 'PREVIEW'}</h2></div>
            <button className={styles.previewEditorSwitch}
                onClick={() => {
                    if(section === 'EDITOR')
                        setCurSection('PREVIEW');
                    else
                        setCurSection('EDITOR');    
                }}
            >
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
            </button>
        </div>
    )
}

export default SectionTitle;