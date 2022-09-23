import React, { ChangeEvent, FunctionComponent, RefObject, useEffect, useRef, useState } from "react";
import styles from './TextArea.module.scss';

const TextArea:FunctionComponent<{docContent: string, setContent: (content:string) => void}> = ({docContent, setContent}) => {

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if(textAreaRef.current){
            textAreaRef.current.style.height = '';
            textAreaRef.current.style.height = textAreaRef.current.scrollHeight +  8 + 'px';           
        }
    }, []);


    return (
        <div>
            <textarea
                    className={styles.textArea}
                    onChange={(e) => {                
                        if(textAreaRef.current){
                            setContent(textAreaRef.current.value);
    
                            textAreaRef.current.style.height = '';
                            textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 8 + 'px';
                            
                        }
    
                    }}
    
                    ref={textAreaRef}
        
                    value={docContent}
                />

        </div>
    )
}

export default TextArea;