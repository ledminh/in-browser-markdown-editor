import { FunctionComponent } from "react";
import { SectionType } from ".";

import styles from './PreviewEditorSwitch.module.scss';

import Image from "next/image";
import iconShowPreview from '../../assets/icon-show-preview.svg';
import iconHidePreview from '../../assets/icon-hide-preview.svg';

const PreviewEditorSwitch:FunctionComponent<{section:SectionType, setCurSection: (curSection:SectionType) => void}> = ({section, setCurSection}) => {

    return (
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
    )
}

export default PreviewEditorSwitch;