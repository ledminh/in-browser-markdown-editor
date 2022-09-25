import styles from './Panel.module.scss';

import { FunctionComponent } from "react";

import Image from 'next/image';
import iconMenu from '../../assets/icon-menu.svg';
import iconDocument from '../../assets/icon-document.svg';
import iconDelete from '../../assets/icon-delete.svg';
import iconSave from '../../assets/icon-save.svg';
import iconClose from '../../assets/icon-close.svg';
import Title from '../Title';
import { savingSource } from '../../useData';

const Panel:FunctionComponent<{setShowDeleteModal: (show: boolean)=>void, setShowSaveModal: (show: boolean)=>void, setShowMenu: (show: boolean) => void, showMenu:boolean, filename:string, savingSource?:savingSource, updateDocInLocalStorage: () => void, noDoc: boolean}> = ({setShowDeleteModal, setShowSaveModal, setShowMenu, showMenu, filename, savingSource, updateDocInLocalStorage, noDoc}) => {

    return (
        <div className={styles.panel}>
            <div className={styles.menuImage}
                onClick={(e) => {
                    e.stopPropagation();
                    setShowMenu(!showMenu);
                }}
            >
                {
                    showMenu?
                    <Image
                        src={iconClose}
                        alt="Close Icon"
                    />:
                    <Image
                        src={iconMenu}
                        alt="Menu Icon"
                    />    
                }
            </div>
            <Title/>
            <div className={styles.fileName}>
                <div>
                    <Image 
                        src={iconDocument}
                        alt="Document Icon"
                    />
                </div>
                <h2><span>{filename}</span></h2>
            </div>
            <button className={styles.recycleBin}
                onClick={() => {
                    if(noDoc) return;
                    setShowDeleteModal(true);            
                }}            >
                <Image 
                    src={iconDelete}
                    alt="Delete Icon"
                />
            </button>
            <button className={styles.save}
                onClick={() => {
                    if(noDoc) return;

                    if(savingSource === 'LOCAL'){
                        updateDocInLocalStorage();
                    } 

                    setShowSaveModal(true);
                }}
            >
                <Image
                    src={iconSave}
                    alt="Save Icon"
                    />
            </button>
        </div>
    )

}

export default Panel;