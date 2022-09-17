import { FunctionComponent } from "react";

import styles from './Preview.module.scss';
import Markdown from "marked-react";

import dataJSON from '../../data.json';

const Preview:FunctionComponent = () => {
    
    return (
        <div className={styles.preview}>
            <Markdown>{dataJSON[1].content}</Markdown>
        </div> 
        
    );
}

export default Preview;