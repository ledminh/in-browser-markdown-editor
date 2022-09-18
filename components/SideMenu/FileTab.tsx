import { FunctionComponent } from "react";

import styles from './FileTab.module.scss';

import Image from 'next/image';
import iconDocument from '../../assets/icon-document.svg';


const FileTab:FunctionComponent<{date:string, filename:string}> = ({date, filename}) => {

    return (
        <div className={styles.fileTab}>
            <div className={styles.image}>
                <Image 
                    src={iconDocument}
                    alt="document icon"
                />
            </div>
            <span className={styles.date}>
                {date}
            </span>
            <h2 className={styles.filename}>
                {filename}
            </h2>
        </div>
    );
}

export default FileTab;

export const FileTabsWrapper:FunctionComponent<{children:JSX.Element[]}> = ({children}) => {

    return (
        <div className={styles.wrapper}>
            {
                children
            }
        </div>
    )
} 