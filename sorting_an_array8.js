/* Implement a JavaScript program to sort an array of strings in lexicographic (dictionary) order using the merge sort algorithm. */

function mergeSortLexicographic(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);

    const sortedLeft = mergeSortLexicographic(leftHalf);
    const sortedRight = mergeSortLexicographic(rightHalf);

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

    return result.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}

function main() {
    let strings = ['toyota', 'tesla', 'honda', 'Land rover'];

    // Sort the strings array using Merge Sort in lexicographic order
    let sortedStrings = mergeSortLexicographic(strings);

    console.log(sortedStrings);
}
main();