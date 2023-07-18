/*Write a JavaScript function to sort an array of numbers in ascending order using the bubble sort algorithm.*/

function bubbleSort(arr) {
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
    let numbers = [67, 54, 15, 11, 32, 111, 196];
    console.log(bubbleSort(numbers));
}
main();