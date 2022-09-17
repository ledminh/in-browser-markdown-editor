import { FunctionComponent, useRef, useState } from "react";
import styles from './TextArea.module.scss';

const TextArea:FunctionComponent = () => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    return (
        <textarea
            ref={textAreaRef}
            className={styles.textArea}
            onInput={(e) => {
                if(textAreaRef.current){
                    textAreaRef.current.style.height = '0';
                    textAreaRef.current.style.height = (textAreaRef.current.scrollHeight) + "px";
                }
            }}
        />
    )
}

export default TextArea;