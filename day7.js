// Objects

const book = {
  title: "Rich dad",
  author: "shagun",
  year: "2024",
  bookInfo: function () {
    return book.title + book.author;
  },
  updateYear: function (year) {
    this.year = year;
  },
};

console.log(book, book.author, book.title, book.bookInfo());
book.updateYear("2022");

console.log(book);

const library = {
  name: "green Books",
  books: [
    {
      title: "Rich dad",
      author: "shagun",
      year: "2024",
    },
    {
      title: "Rich dad2",
      author: "shagun",
      year: "2024",
    },
    {
      title: "Rich dad3",
      author: "shagun",
      year: "2024",
    },
    {
      title: "Rich dad4",
      author: "shagun",
      year: "2024",
    },
  ],
};

console.log(library, "library");

library.books.forEach((ele) => {
  console.log(ele.title);
});

for (const property in book) {
  console.log(`${property}: ${book[property]}`);
}
console.log(Object.keys(book), Object.values(book));
