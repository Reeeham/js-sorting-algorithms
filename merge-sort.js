function merge(nums, lo, mid, hi) {

    let i = lo;
    let j = mid + 1;
    let k = lo;

    const copy = nums.slice();

    while (i <= mid && j <= hi) {
        if(copy[i] < copy[j]) {
            nums[k++] = copy[i++];
        }else {
            nums[k++] = copy[j++];
        }
    }
    while(i <= mid) {
        nums[k++] = copy[i++];
    }

    while(j <= hi) {
        nums[k++] = copy[j++];
    }


}

const sort = (nums, lo, hi) => {
    if(lo >= hi) {
        return;
    }

    const mid = Math.floor((lo + hi) / 2);

    sort(nums, lo, mid);
    sort(nums, mid + 1, hi);
    merge(nums, lo, mid, hi);
}

const mergeSort  = nums =>  {
    sort(nums, 0, nums.length - 1);
    return nums;
 };

const arr = [3, 5, 2, 1, 0]

console.log(mergeSort(arr));