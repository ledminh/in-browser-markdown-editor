import { useState, useEffect, useRef } from "react";

import { v4 as uuidv4 } from 'uuid';



export type DocType = {
    id: string,
    createdAt: string,
    name: string,
    content: string,
    
    current: boolean
}


export type DocsListType = { createdAt: string; name: string; id: string; current: boolean; }[];

let newFileCount = 0;

const loadDocsFromLocalStorage = (initDocs:DocType[]) => {
    let currentDocs  = null;

    const localDataStr = localStorage.getItem('markDownData');

    // First time --> store initDocs to localStorage
    if(localDataStr === null) {
        localStorage.setItem('markDownData', JSON.stringify(initDocs.map(d => ({...d, current: false}))));
        
    }
    else { // not first time --> get data from localStorage
        const localData = JSON.parse(localDataStr);

        currentDocs = [...localData.map((d:DocType, i:number) => ({...d, current: i === 0}))];

    }

    return currentDocs;
}

/************************
 * useData
 */

const useData  = (initDocs: DocType[]) => {
    const [docs, setDocs] = useState<DocType[]>(initDocs);
    

    //Get data from localStorage (or store data to localStorage if this is the first time)
    useEffect(() => {
        let currentDocs  = loadDocsFromLocalStorage(initDocs);
        if(currentDocs)
            setDocs(currentDocs);
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    /**********************************************/


    const getCurrentDoc = () => docs.find((doc) => doc.current);

    const setDocCurrent = (id:string) => {
        const newDocs = docs.map((d) => ({
            ...d,
            current: false
        }));

        const curDoc = newDocs.find((d) => d.id === id);
        
        if(curDoc)
            curDoc.current = true;

        setDocs(newDocs);

    } 

    const setCurDocContent = (content:string) => {
        const newDocs = docs.slice();
    
        const currentDoc = newDocs.find(d => d.current); 
        
        if(currentDoc)
            currentDoc.content = content;
        
        setDocs(newDocs);
    }

    const createNewDoc = () => {
        let newDocs = docs.map((d) => ({
            ...d,
            current: false
        }));


        const newDoc = {
            createdAt: new Date().toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}),
            name: 'new-file' + (newFileCount === 0? '' : '-' + newFileCount) + '.md',
            content: '',
            id: 'md-' + uuidv4(),
            current: true
        }

        newDocs = [newDoc, ...newDocs];
        
        setDocs(newDocs);
    }

    
    //Save doc to localStorage
    const saveToLocalStorage = (id:string, filename:string) => {
        const localDataStr = localStorage.getItem('markDownData');
        let newDocs = docs.slice();

        const docToSave = newDocs.find(d => d.id === id);
        
        if(docToSave){
            docToSave.name = filename;
            docToSave.current = false;
            
            if(localDataStr !== null) {
                const lSData = JSON.parse(localDataStr);
                
                const newLSData = [docToSave, ...lSData];
                localStorage.setItem('markDownData', JSON.stringify(newLSData));
                
                
                newDocs = newDocs.filter((d,i) => i < newDocs.length - newLSData.length && d.id !== id);

                
                newDocs = [...newDocs,...newLSData];
                setDocs(newDocs);
            }
        
        }
    

    }    




    const getDocsList = ():DocsListType => docs.map(d => ({
        createdAt: d.createdAt,
        name: d.name,
        id: d.id,
        current: d.current
    }));




    
    
    
    
    
    
    
        
        
        return {
            getCurrentDoc, setDocCurrent, setCurDocContent, createNewDoc, saveToLocalStorage, getDocsList
        }


}

export default useData;