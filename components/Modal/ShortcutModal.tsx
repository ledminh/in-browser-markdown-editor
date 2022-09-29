import { FunctionComponent } from "react";

import Modal from "./Modal";

import styles from './ShortcutModal.module.scss';


const ShortcutModal:FunctionComponent<{showModal: boolean, setShowModal: (show:boolean) => void}> = ({showModal, setShowModal}) => {


    return (
        <Modal onClose={() => setShowModal(false)}
                show={showModal}
                title={"SHORTCUT"}
        >
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <span className={styles.key}>CTRL</span>
                    <span className={styles.key}>SHIFT</span>
                    <span className={styles.key}>N</span>
                    <span className={styles.explanation}>create new doc</span>
                </li>
                <li className={styles.li}>
                    <span className={styles.key}>CTRL</span>
                    <span className={styles.key}>SHIFT</span>
                    <span className={styles.key}>S</span>
                    <span className={styles.explanation}>save current doc</span>
                </li>
                <li className={styles.li}>
                    <span className={styles.key}>CTRL</span>
                    <span className={styles.key}>SHIFT</span>
                    <span className={styles.key}>DEL</span>
                    <span className={styles.explanation}>delete current doc</span>
                </li>
            </ul>
        </Modal>
    )
}

export default ShortcutModal;