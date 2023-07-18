/* Write a JavaScript program to sort an array of numbers in descending order using the selection sort algorithm. */

function selectionSortDescending(arr) {
    let len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        let maxIndex = i;

        for (let j = i + 1; j < len; j++) {
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
            }
        }

        if (maxIndex !== i) {
            // Swap elements to move the maximum value to its correct position
            [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
        }
    }

    return arr;
}

function main() {
    let numbers = [41, 64, 75, 32, 82, 91, 190];

    // Sort the numbers array in descending order
    let sortedNumbers = selectionSortDescending(numbers);

    console.log(sortedNumbers);
}
main();