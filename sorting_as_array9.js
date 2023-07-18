/* Create a JavaScript function to sort an array of objects based on multiple property values in a specific order. */

function sortByProperties(arr, properties, directions) {
    arr.sort((a, b) => {
        for (let i = 0; i < properties.length; i++) {
            const prop = properties[i];
            const direction = directions[i];

            if (a[prop] < b[prop]) {
                return direction === 'asc' ? -1 : 1;
            } else if (a[prop] > b[prop]) {
                return direction === 'asc' ? 1 : -1;
            }
        }
        return 0;
    });
}

function main() {
    const books = [
        { title: 'Book C', author: 'Author E', year: 2010 },
        { title: 'Book A', author: 'Author H', year: 1990 },
        { title: 'Book B', author: 'Author F', year: 2000 },
        { title: 'Book D', author: 'Author G', year: 2020 }
    ];

    // Sort the books array based on multiple properties in specific order
    sortByProperties(books, ['author', 'year'], ['asc', 'desc']);

    console.log(books);
}
main();