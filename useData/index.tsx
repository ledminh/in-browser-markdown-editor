import { useState, useEffect, useRef } from "react";

import { v4 as uuidv4 } from 'uuid';

import * as LocalStorage from './localStorage';

import getCounter from './counter';

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


const markRemovedOnCounter = (filename:string, markRemove:(i:number)=>void) => {
    const testNum = /new-file-(\d+)/;
    const numArr = filename.match(testNum);

    if(numArr) {
        const iNewFile = Number(numArr[1]);
        markRemove(iNewFile);
    }
    else {
        markRemove(0);
    }
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
    
    const Counter = useRef(getCounter());

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

        
        const index = Counter.current.getIndex();

        const newDoc:DocType = {
            createdAt: new Date().toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}),
            name: 'new-file'  + (index === null? '' : '-' + index) +'.md' ,
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

                //if file is new-file, markRemoved on counter.
                if(d.name.indexOf('new-file') !== -1) {
                    markRemovedOnCounter(d.name, Counter.current.markRemove);
                }
            }

            return d.current === false;
        });

        // if curI === 0, keep it that way.
        // if curI === -1, there is no current doc, which means no doc --> no op.
        if(curI > 0) {
            curI = curI - 1;
        }

        // no doc --> no op
        if(newDocs.length > 0)
            newDocs[curI].current = true;

        setDocs(newDocs);
        
        LocalStorage.setDocs(newDocs.filter(d => d.savedAt === 'LOCAL'));

    }
    
    //Save doc to localStorage
    const saveToLocalStorage = (id:string, filename:string) => {
        let newDocs = docs.slice();

        const docToSave = newDocs.find(d => d.id === id);
        
        if(docToSave){
            if(docToSave.name.indexOf('new-file') !== -1) {
                markRemovedOnCounter(docToSave.name, Counter.current.markRemove);
            }
            
            docToSave.name = filename;
            docToSave.current = false;
            docToSave.savedAt = 'LOCAL';
            
            LocalStorage.addDoc(docToSave);
            const lsDocs  = LocalStorage.getDocs();
                
            newDocs = newDocs.filter((d,i) => i < newDocs.length - lsDocs.length && d.id !== id);

            
            newDocs = [...newDocs,...lsDocs].map(d => ({...d, current: d.id === docToSave.id}));

            setDocs(newDocs);
            
        
        }
    

    }    


    const updateDocInLocalStorage = () => {

        const currentDoc = getCurrentDoc();

        if(currentDoc)
            LocalStorage.updateDoc(currentDoc);
        
    }


    const getDocsList = ():DocsListType => docs.map(d => ({
        createdAt: d.createdAt,
        name: d.name,
        id: d.id,
        current: d.current
    }));




    
    const isEmpty = () => docs.length === 0;
    
    
    
    
    
        
        
        return {
            getCurrentDoc, setDocCurrent, setCurDocContent, createNewDoc, saveToLocalStorage, updateDocInLocalStorage, getDocsList, deleteCurDoc, isEmpty
        }


}

export default useData;