import { FunctionComponent } from "react";

import Modal from "./Modal";

import styles from './DeleteModal.module.scss';


const DeleteModal:FunctionComponent<{showModal: boolean, setShowModal: (show:boolean) => void, deleteCurDoc: ()=> void}> = ({showModal, setShowModal, deleteCurDoc}) => {


    return (
        <Modal onClose={() => setShowModal(false)}
                show={showModal}
                title={"Delete this document?"}
        >
            <p>Are you sure you want to delete the &apos;welcome.md&apos; document and its contents?</p>
            <p>This action cannot be reversed.</p>
            <button className={styles.button}
                onClick= {(e) => {
                    deleteCurDoc();
                    setShowModal(false);
                }}
            >
                <h2>Confirm {"&"} Delete</h2>
            </button>
        </Modal>
    )
}

export default DeleteModal;