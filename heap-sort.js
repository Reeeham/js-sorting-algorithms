const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const heapify = (arr, n, i) =>  {
    let smallest = i; 
    let left = 2*i+1;
    let right = 2*i+2;

    //if left child is smaller than root
    if(left < n && arr[left] < arr[smallest]) 
      smallest = left;
    
    if(right < n && arr[right] < arr[smallest])
      smallest = right;

    // if smallest is not the root
    if(smallest != i) {
      swap(arr, i, smallest);
      //recursively heapify the affected subtree, creates a max heap
     heapify(arr, n, smallest);
    }

}

const heapSort = (arr, n) => {
    //build heap
    for(let i = n / 2 - 1; i >= 0; i--) 
       heapify(arr, n, i);
    
    for(let i = n - 1; i >= 0; i--){
       //move current root to end
       swap(arr, 0, i);

       //create max heap on the reduced heap
       heapify(arr, i, 0);
    }
    return arr;
}


console.log(heapSort([2,8,5,3,9,1], 6));
