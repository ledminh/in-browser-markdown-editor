import { FunctionComponent } from "react";
import styles from './SectionTitle.module.scss';

import Image from 'next/image';
import iconShowPreview from '../../assets/icon-show-preview.svg';


const SectionTitle:FunctionComponent<{title:string}> = ({title}) => {


    return(
        <div className={styles.sectionTitle}>
            <div className={styles.title}><h2>{title}</h2></div>
            <div className={styles.previewEditorSwitch}>
                <Image
                    src={iconShowPreview}
                    alt="show preview icon"
                />
            </div>
        </div>
    )
}

export default SectionTitle;