import { FunctionComponent } from "react";
import styles from './SectionTitle.module.scss';

import Image from 'next/image';
import iconShowPreview from '../../assets/icon-show-preview.svg';
import iconHidePreview from '../../assets/icon-hide-preview.svg';

import { SectionType } from ".";


const SectionTitle:FunctionComponent<{section:SectionType, setCurSection: (curSection: SectionType) => void, setFullScreen: (fs:boolean) => void, fullscreen:boolean}> = ({section, setCurSection, setFullScreen, fullscreen}) => {


    return(
        <div className={styles.sectionTitle} data-section={section}>
            <div className={styles.title}><h2>{section === 'EDITOR'? 'MARKDOWN' : 'PREVIEW'}</h2></div>
            <button className={styles.previewEditorSwitchSmallScreen}
                onClick={() => {
                    if(section === 'EDITOR')
                        setCurSection('PREVIEW');
                    else
                        setCurSection('EDITOR');    
                }}
            >
                {
                    section === 'EDITOR'?
                    <div>
                        <Image
                            src={iconShowPreview}
                            alt="show preview icon"
                        />
                    </div>
                    :
                    <div className={styles.hidePreviewIcon}>
                        <Image
                            src={iconHidePreview}
                            alt="hide preview icon"
                        />
                    </div>

                }
            </button>
            {
                section === 'PREVIEW'?
                    <button className={styles.previewFullScreenSwitch}
                        onClick={() => setFullScreen(!fullscreen)}
                    >
                        {
                            fullscreen?
                            <Image
                                src={iconHidePreview}
                                alt="hide preview icon"
                            />
                            :
                            <Image
                                src={iconShowPreview}
                                alt="show preview icon"
                            />
                        }
                    </button>:
                    null
            }

        </div>
    )
}

export default SectionTitle;