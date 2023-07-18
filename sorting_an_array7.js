/* Write a JavaScript function to sort an array of numbers in ascending order using the merge sort algorithm. */

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    // Split the array into two halves
    let middle = Math.floor(arr.length / 2);
    let leftHalf = arr.slice(0, middle);
    let rightHalf = arr.slice(middle);

    // Recursively sort both halves
    let sortedLeft = mergeSort(leftHalf);
    let sortedRight = mergeSort(rightHalf);

    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

function merge(leftArr, rightArr) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            result.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            result.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate any remaining elements from both arrays
    return result.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}

function main() {
    let numbers = [364, 134, 254, 152, 262, 191, 900];

    // Sort the numbers array using Merge Sort in ascending order
    let sortedNumbers = mergeSort(numbers);

    console.log(sortedNumbers);
}
main();