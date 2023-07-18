/* Write a JavaScript program to sort an array of numbers in ascending order using the quicksort algorithm. */

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[Math.floor(arr.length / 2)];
    let left = [];
    let middle = [];
    let right = [];

    for (let num of arr) {
        if (num < pivot) {
            left.push(num);
        } else if (num > pivot) {
            right.push(num);
        } else {
            middle.push(num);
        }
    }

    return quickSort(left).concat(middle).concat(quickSort(right));
}

function main() {
    let numbers = [634, 349, 525, 132, 252, 111, 190];

    // Sort the numbers array using QuickSort in ascending order
    let sortedNumbers = quickSort(numbers);

    console.log(sortedNumbers);
}
main();