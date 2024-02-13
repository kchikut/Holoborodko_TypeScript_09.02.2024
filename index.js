"use strict";
var Category;
(function (Category) {
    Category[Category["JavaScript"] = 0] = "JavaScript";
    Category[Category["CSS"] = 1] = "CSS";
    Category[Category["HTML"] = 2] = "HTML";
    Category[Category["TypeScript"] = 3] = "TypeScript";
    Category[Category["Angular"] = 4] = "Angular";
})(Category || (Category = {}));
function getAllBooks() {
    const books = [
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
    ];
    return books;
}
function logFirstAvailable(books) {
    const bookCount = books.length;
    const firstAvailable = books.find(book => book.available);
    console.log(`Кількість книг: ${bookCount}`);
    console.log(`Назва першої доступної книги: ${firstAvailable?.title}`);
}
function getBookTitlesByCategory(category, books) {
    const booksInCategory = books.filter(book => book.category === category);
    return booksInCategory.map(book => book.title);
}
function logBookTitles(bookTitles) {
    console.log("Назви книг:");
    bookTitles.forEach(title => console.log(title));
}
function getBookAuthorByIndex(index, books) {
    const book = books[index];
    if (book) {
        return [book.title, book.author];
    }
    else {
        console.log("Неправильний індекс.");
        return undefined;
    }
}
function calcTotalPages(libraries) {
    let totalPages = 0n;
    libraries.forEach(library => {
        totalPages += BigInt(library.books) * BigInt(library.avgPagesPerBook);
    });
    return totalPages;
}
const books = getAllBooks();
logFirstAvailable(books);
const javascriptBookTitles = getBookTitlesByCategory(Category.JavaScript, books);
logBookTitles(javascriptBookTitles);
const firstBookAuthor = getBookAuthorByIndex(0, books);
if (firstBookAuthor) {
    console.log(`Назва та автор першої книги: ${firstBookAuthor[0]}, ${firstBookAuthor[1]}`);
}
const libraries = [
    { lib: 'libName1', books: 1000000000n, avgPagesPerBook: 250n },
    { lib: 'libName2', books: 5000000000n, avgPagesPerBook: 300n },
    { lib: 'libName3', books: 3000000000n, avgPagesPerBook: 280n }
];
console.log(`Загальна кількість сторінок у всіх бібліотеках: ${calcTotalPages(libraries)}`);
