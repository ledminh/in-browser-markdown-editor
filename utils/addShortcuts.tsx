const addShortcuts = (e:KeyboardEvent, createNewDoc:() => void, deleteCurDoc: () => void, setShowSaveModal: (show: boolean) => void, isEmpty: () => boolean, setNext: () => void, setPrev: () => void, showMenu: boolean) => {
    
    if(e.ctrlKey && e.shiftKey) {
        e.preventDefault();
        if(e.key.toLowerCase() === 'n') {
            createNewDoc();
        }
        else if(e.key === 'Delete' && !isEmpty()) {
            deleteCurDoc();
        }
        else if(e.key.toLowerCase() === 's' && !isEmpty()) {
            setShowSaveModal(true);
        }
    }
    else if(showMenu) {
        e.preventDefault();
        if(e.key === 'ArrowUp'){
            setPrev();
        }
        else if(e.key === 'ArrowDown') {
            setNext();
        }
    }
    


}


export default addShortcuts;