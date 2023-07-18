/* Implement a JavaScript function to sort an array of strings in descending order of length using the selection sort algorithm. */

function selectionSortDescendingByLength(arr) {
    let len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        let maxIndex = i;

        for (let j = i + 1; j < len; j++) {
            if (arr[j].length > arr[maxIndex].length) {
                maxIndex = j;
            }
        }

        if (maxIndex !== i) {
            // Swap elements to move the string with the maximum length to its correct position
            [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
        }
    }

    return arr;
}

function main() {
    let strings = ['America', 'Korea', 'China', 'France', 'India'];

    // Sort the strings array in descending order of length
    let sortedStrings = selectionSortDescendingByLength(strings);

    console.log(sortedStrings);
}
main();