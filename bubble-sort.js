const bubbleSort = (arr) => {
    let changed;
    let temp;

    do {
        changed = false;
        for(let i = 0; i < arr.length - 1; i++) {
            if(arr[i] > arr[i+1]) {
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                changed = true;
            }
        }
    } while(changed);
}
const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const optimizedBubbleSort = (arr) => {
    let isSorted = false;
    let lastUnsorted = arr.length - 1;
    while(!isSorted) {
        isSorted = true;
        for(let i = 0; i< lastUnsorted; i++) {
            if(arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
                isSorted = false;
            }
        }
        lastUnsorted--;
    }
    return arr;
}

let inputArr = [5, 2, 4, 6, 1, 3];
optimizedBubbleSort(inputArr);
console.log(inputArr); // O(n^2)