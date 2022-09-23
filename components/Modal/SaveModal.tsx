import { FunctionComponent } from "react";
import { useState } from "react";

import Modal from "./Modal";

import styles from './SaveModal.module.scss';


const SaveModal:FunctionComponent<{showModal: boolean, setShowModal: (show:boolean) => void, saveToLocalStorage: (id:string, filename:string) => void, curID:string}> = ({showModal, setShowModal, saveToLocalStorage, curID}) => {
    const [filename, setFilename] = useState("");

    return (
        <Modal onClose={() => setShowModal(false)}
                show={showModal}
                title={"Save this document?"}
        >
            <form>
                <label htmlFor='filename'>File name:</label>
                <input className={styles.input}
                    type="text"
                    id="filename"
                    onChange={(e) => setFilename(e.target.value)}
                    value={filename}
                    />
                <button className={styles.button}
                    onClick={(e) => {
                        e.preventDefault();

                        saveToLocalStorage(curID, filename);
                        setShowModal(false);
                    }}
                >
                    <h2>Save</h2>
                </button>
            </form>
            
        </Modal>
    )
}

export default SaveModal;