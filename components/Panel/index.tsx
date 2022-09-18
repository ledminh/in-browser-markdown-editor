import styles from './Panel.module.scss';

import { FunctionComponent } from "react";

import Image from 'next/image';
import iconMenu from '../../assets/icon-menu.svg';
import iconDocument from '../../assets/icon-document.svg';
import iconDelete from '../../assets/icon-delete.svg';
import iconSave from '../../assets/icon-save.svg';

const Panel:FunctionComponent<{setShowDeleteModal: (show: boolean)=>void}> = ({setShowDeleteModal}) => {

    return (
        <div className={styles.panel}>
            <div className={styles.menuImage}>
                <Image
                    src={iconMenu}
                    alt="Menu Icon"
                />    
            </div>
            <div className={styles.fileName}>
                <div>
                    <Image 
                        src={iconDocument}
                        alt="Document Icon"
                    />
                </div>
                <h2><span>welcome.md</span></h2>
            </div>
            <button className={styles.recycleBin}
                onClick={() => {

                    setShowDeleteModal(true)
                
                }}
            >
                <Image 
                    src={iconDelete}
                    alt="Delete Icon"
                />
            </button>
            <button className={styles.save}>
                <Image
                    src={iconSave}
                    alt="Save Icon"
                    />
            </button>
        </div>
    )

}

export default Panel;