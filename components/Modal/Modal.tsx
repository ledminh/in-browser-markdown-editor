import { FunctionComponent, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import styles from './Modal.module.scss';

const Modal:FunctionComponent<{show:boolean, onClose: () => void, children:JSX.Element[], title: string}> = ({ show, onClose, children, title }) => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);


    const modalContent = show ? (
        <div className={styles.modalOverlay}
                onClick={() => onClose()}
            >
            <div className={styles.modal}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                {title && <div className={styles.modalTitle}>{title}</div>}
                <div className={styles.modalBody}>{children}</div>
            </div>
        </div>
    ) : null;
    
    
    if (isBrowser) {

        const modalRoot = document.querySelector(".modal-root");
        
        if(modalRoot)
            return createPortal(
                modalContent,
                modalRoot
            );
        else
            return null;
        
    } else {
        return null;
    }
};

export default Modal;