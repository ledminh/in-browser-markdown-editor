const addShortcuts = (e:KeyboardEvent, createNewDoc:() => void) => {
    
    if(e.ctrlKey && e.shiftKey) {
        if(e.key.toLowerCase() === 'n') {
            e.preventDefault();
            // createNewDoc();
        }
    }


}


export default addShortcuts;