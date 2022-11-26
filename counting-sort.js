const countingSort = (arr, min, max) => {

    const count = [];

    for(let i =min; i <= max; i++) {
        count[i] = 0;
    }
    for(let i =0; i < arr.length; i++) {
        count[arr[i]]++;
    }
    const sortedArr = [];
    for(let i = min; i <= max; i++) {
        while(count[i] > 0) {
            sortedArr.push(i);
            count[i]--;
        }
    }
    return sortedArr;
}

let array = [2,1,1,0,2,5,4,0,2,8,7,7,9,2,0,1,9];
let max = Math.max(...array);
let min = Math.min(...array);

console.log(countingSort(array, min, max)); // [0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 4, 5, 7, 7, 8, 9, 9]