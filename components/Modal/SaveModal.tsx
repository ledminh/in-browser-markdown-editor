import { FunctionComponent } from "react";
import { useState } from "react";
import { savingSource } from "../../useData";

import Modal from "./Modal";

import styles from './SaveModal.module.scss';


const SaveModal:FunctionComponent<{showModal: boolean, setShowModal: (show:boolean) => void, saveToLocalStorage: (id:string, filename:string) => void, curID:string, savingSource?:savingSource }> = ({showModal, setShowModal, saveToLocalStorage, curID, savingSource}) => {
    const [filename, setFilename] = useState("");

    return (
        <Modal onClose={() => setShowModal(false)}
                show={showModal}
                title={savingSource === 'NONE'? "Save this document?" : 'Document saved'}
        >
            {
                savingSource === 'LOCAL'?
                    <span>Document is saved to localStorage</span>
                    :
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
        
                                let fnToSave = filename.indexOf('.md') !== -1? filename : filename + '.md';

                                saveToLocalStorage(curID, fnToSave);

                                setFilename('');

                                setShowModal(false);
                            }}
                        >
                            <h2>Save</h2>
                        </button>
                    </form>
            }

            
        </Modal>
    )
}

export default SaveModal;