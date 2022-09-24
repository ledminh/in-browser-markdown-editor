import { useState, useEffect, useRef } from "react";

import { v4 as uuidv4 } from 'uuid';

import * as LocalStorage from './localStorage';

export type savingSource = 'LOCAL' | 'SERVER' | 'NONE';

export type DocType = {
    id: string,
    createdAt: string,
    name: string,
    content: string,
    
    current: boolean,
    savedAt: savingSource
}




export type DocsListType = { createdAt: string; name: string; id: string; current: boolean; }[];



const loadDocsFromLocalStorage = (propDocs: DocType[]) => {
    const localDocs = LocalStorage.getDocs();

    if(localDocs === null) 
        LocalStorage.setDocs(propDocs);

    return localDocs === null? propDocs : [
        ...localDocs.map((d:DocType,i:number) => ({
            ...d,
            current: i === 0
        }))
    ]

    
}


/************************
 * useData
 */
const initDoc:DocType =  {
    id: '',
    createdAt: '',
    name: '',
    content: '',
    current: false,
    savedAt: 'NONE'
}


const useData  = (propDocs: DocType[]) => {
    const [docs, setDocs] = useState<DocType[]>([initDoc]);
    

    useEffect(() => {
        let docsToLoad = loadDocsFromLocalStorage(propDocs);
        
        setDocs(docsToLoad);
        
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

        


        const newDoc:DocType = {
            createdAt: new Date().toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}),
            name: 'new-file.md' ,
            content: '',
            id: 'md-' + uuidv4(),
            current: true,
            savedAt: 'NONE'
        }


        newDocs = [newDoc, ...newDocs];
        

        setDocs(newDocs);
    }



    const deleteCurDoc = () => {
        let curI = -1;

        const newDocs = docs.filter((d, i) => {
            if(d.current) {
                curI = i;
            }

            return d.current === false;
        });

        if(curI > 0) {
            curI = curI - 1;
        }

        if(newDocs.length > 0)
            newDocs[curI].current = true;

        setDocs(newDocs);
        

        localStorage.setItem('markDownData', JSON.stringify(newDocs.filter(d => d.savedAt === 'LOCAL')));
    }
    
    //Save doc to localStorage
    const saveToLocalStorage = (id:string, filename:string) => {
        const localDataStr = localStorage.getItem('markDownData');
        let newDocs = docs.slice();

        const docToSave = newDocs.find(d => d.id === id);
        
        if(docToSave){
            docToSave.name = filename;
            docToSave.current = false;
            docToSave.savedAt = 'LOCAL';
            
            if(localDataStr !== null) {
                const lSData = JSON.parse(localDataStr);
                

                const newLSData = [docToSave, ...lSData];
                localStorage.setItem('markDownData', JSON.stringify(newLSData));
                
                
                newDocs = newDocs.filter((d,i) => i < newDocs.length - newLSData.length && d.id !== id);

                
                newDocs = [...newDocs,...newLSData].map(d => ({...d, current: d.id === docToSave.id}));
                setDocs(newDocs);
            }
        
        }
    

    }    


    const updateLocalStorage = () => {
        const localDataStr = localStorage.getItem('markDownData');

        if(localDataStr) {
            const lSData = JSON.parse(localDataStr);
            const docToSaveClient = getCurrentDoc();

            if(docToSaveClient) {
                const docToSaveLS = lSData.find((d:DocType) => d.id === docToSaveClient.id);

                if(docToSaveLS) {
                    docToSaveLS.content = docToSaveClient.content;
                    
                    localStorage.setItem('markDownData', JSON.stringify(lSData));
                
                }
            }
            
        }   



    }


    const getDocsList = ():DocsListType => docs.map(d => ({
        createdAt: d.createdAt,
        name: d.name,
        id: d.id,
        current: d.current
    }));




    
    const isEmpty = () => docs.length === 0;
    
    
    
    
    
        
        
        return {
            getCurrentDoc, setDocCurrent, setCurDocContent, createNewDoc, saveToLocalStorage, updateLocalStorage, getDocsList, deleteCurDoc, isEmpty
        }


}

export default useData;