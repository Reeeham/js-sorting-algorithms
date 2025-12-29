function bubbleSort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = 0; j < arr.length - i - 1; j++) { 
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                 arr[j] = arr[j+1];
                arr[j+1] = temp; 
            }
        }
    }
    return arr;
}

console.log(bubbleSort([11, 6, 4, 1, 0,10,4,6,7,9,3,2,19]))