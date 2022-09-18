import { FunctionComponent, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import styles from './Modal.module.scss';

const Modal:FunctionComponent<{show:boolean, onClose: () => void, children:JSX.Element[], title: string}> = ({ show, onClose, children, title }) => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const handleCloseClick = (e:Event) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = show ? (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
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