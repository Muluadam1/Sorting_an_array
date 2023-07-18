/* Create a JavaScript program to sort an array of objects based on a specific property value in descending order. */

function sortByPropertyDescending(arr, prop) {
    arr.sort((a, b) => b[prop] - a[prop]);
}

function main() {
    const books = [
        { title: 'Book H', author: 'Author X', year: 2010 },
        { title: 'Book F', author: 'Author Y', year: 1990 },
        { title: 'Book E', author: 'Author Z', year: 2020 },
        { title: 'Book G', author: 'Author X', year: 2000 }
    ];

    // Sort the books array by the 'year' property in descending order
    sortByPropertyDescending(books, 'year');

    console.log(books);
}
main();