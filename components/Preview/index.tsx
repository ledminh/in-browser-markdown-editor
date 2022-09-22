import { FunctionComponent, RefObject } from "react";

import styles from './Preview.module.scss';
import Markdown from "marked-react";

const Preview:FunctionComponent<{docContent:string, previewRef:RefObject<HTMLDivElement>}> = ({docContent, previewRef}) => {
    
    return (
        <div className={styles.preview}
                ref={previewRef}
            >
                <Markdown>{docContent}</Markdown>
        </div> 
        
    );
}

export default Preview;