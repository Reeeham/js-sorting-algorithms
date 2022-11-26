function selectionSort(arr) {
    let n = arr.length;
     
    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i + 1; j < n; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        if(min != i) {
            //swap the elements 
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

let inputArr = [5, 2, 4, 6, 1, 3];
selectionSort(inputArr);
console.log(inputArr); // O(n^2)