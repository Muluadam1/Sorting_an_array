/* Create a JavaScript function to sort an array of objects based on a specific property value in ascending order. */

//Using year to sort out the order 

function sortByYearAscending(arr) {
    arr.sort((a, b) => a.year - b.year);
}

function main() {
    let movies = [
        { title: 'Movie C', author: 'Producer X', year: 2023 },
        { title: 'Movie A', author: 'Producer Y', year: 1920 },
        { title: 'Movie D', author: 'Producer Z', year: 2019 },
        { title: 'Movie B', author: 'Producer X', year: 2000 }
    ];

    // Sort the movies array by the 'year' property in ascending order
    sortByYearAscending(movies);

    console.log(movies);
}
main();

//Using title to sort out the order 
function sortByProperty(arr, prop) {
    arr.sort(function(a, b) {
        return a[prop].localeCompare(b[prop]);
    });
}

function main() {
    let books = [
        { title: 'Book D', author: 'Author X', year: 2010 },
        { title: 'Book B', author: 'Author Y', year: 1990 },
        { title: 'Book C', author: 'Author Z', year: 2020 },
        { title: 'Book A', author: 'Author X', year: 2000 }
    ];

    // Sort the books array by the 'title' property in ascending order
    sortByProperty(books, 'title');

    console.log(books);
}
main();