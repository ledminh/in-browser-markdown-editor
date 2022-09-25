

const getCounter = () => {
    const arr:boolean[] = [];
    
    const getIndex = () => {
        let index = null;
    

        if(arr.length === 0){
            arr.push(true);
        }
        else if(arr.indexOf(false) === -1) {
            index = arr.length;
            arr.push(true);
        }
        else if(arr.indexOf(false) !== 0){
            index = arr.indexOf(false);
            arr[index] = true;
        }
        else {
            arr[0] = true;
        }


        return index;
    }

    const markRemove = (i:number) => {
        arr[i] = false;

    }

    return {
        getIndex,
        markRemove
    }
}

export default getCounter;