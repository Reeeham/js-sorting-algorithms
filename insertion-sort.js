
const insertionSort = (arr) => {
    let n = arr.length;
    for(let i = 1; i < n; i++) {
        // choosing our first element in our unsorted subarray
        let current = arr[i];
        let j = i - 1;
        while(j  > -1 && current < arr[j] ) {
            arr[j+1] = arr [j];
            j--;
        } 
        arr[j+1] = current;
    }
    return arr;
}


let inputArr = [5, 2, 4, 6, 1, 3];
insertionSort(inputArr);
console.log(inputArr); // O(n^2)