import { FunctionComponent } from "react";
import { SectionType } from ".";

import styles from './PreviewFullScreenSwitch.module.scss';

import Image from 'next/image';
import iconShowPreview from '../../assets/icon-show-preview.svg';
import iconHidePreview from '../../assets/icon-hide-preview.svg';

const PreviewFullScreenSwitch:FunctionComponent<{section: SectionType, setFullScreen: (fs:boolean) => void, fullscreen: boolean}> = ({section, setFullScreen, fullscreen}) => {



    return (
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
    )
}

export default PreviewFullScreenSwitch;