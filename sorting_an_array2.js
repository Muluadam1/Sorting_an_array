/* Implement a JavaScript program to sort an array of strings in lexicographic (dictionary) order using the bubble sort algorithm. */

function bubbleSortLexicographic(arr) {
    let len = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap elements if they are in the wrong order
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        len--;
    } while (swapped);

    return arr;
}

function main() {
    let strings = ['Twitter', 'Face book', 'Webex', 'Teams', 'chat', 'Blue Jeans'];
    let sortedStrings = bubbleSortLexicographic(strings);

    console.log(sortedStrings);
}
main();