import { DocType } from ".";

const getDocs = () => {
    const docStr = localStorage.getItem('markDownData');

    if(docStr !== null) {
        return JSON.parse(docStr);
    } 
    else {
        return null;
    }
}

const setDocs = (docs: DocType[]) => {
    localStorage.setItem('markDownData', JSON.stringify(docs.map(d => ({...d, current:false, savedAt:'LOCAL'}))));
}

export const addDoc = (doc:DocType) => {
    const docs = getDocs();

    if(docs !== null) {
        setDocs([doc, ...docs]);
    }

}

const updateDoc = (doc:DocType) => {
    const localDocs = getDocs();

    if(localDocs !== null) {
        const localDoc = localDocs.find((d:DocType) => d.id === doc.id);
        
        if(localDoc) {
            localDoc.content = doc.content;
            setDocs(localDocs);
        }
        
        
    }   

}

const LocalStorage = {
    getDocs,
    setDocs,
    addDoc,
    updateDoc
    
    
    
       
}

export default LocalStorage;