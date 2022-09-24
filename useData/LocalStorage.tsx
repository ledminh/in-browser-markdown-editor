import { DocType } from ".";

export const getDocs = () => {
    const docStr = localStorage.getItem('markDownData');

    if(docStr !== null) {
        return JSON.parse(docStr);
    } 
    else {
        return null;
    }
}

export const setDocs = (docs: DocType[]) => {
    localStorage.setItem('markDownData', JSON.stringify(docs.map(d => ({...d, current:false, savedAt:'LOCAL'}))));
}