import { FunctionComponent } from "react";

import Modal from "./Modal";

import styles from './SaveModal.module.scss';


const SaveModal:FunctionComponent<{showModal: boolean, setShowModal: (show:boolean) => void}> = ({showModal, setShowModal}) => {


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
                    />
                <button className={styles.button}
                    onClick={(e) => {
                        e.preventDefault();
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