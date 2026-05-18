interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const Problem6_printBookDetails = (book: Book): void => {
  const availability = book.isAvailable ? "Yes" : "No";
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`,
  );
};

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

Problem6_printBookDetails(myBook);
