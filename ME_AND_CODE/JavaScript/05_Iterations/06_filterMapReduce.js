

const books = [
    {title: "Harry Potter", author: "J.K. Rowling", year: 1991, genre: "Fantasy"},
    {title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954, genre: "Fantasy"},
    {title: "The Hunger Games", author: "Suzanne Collins", year: 2008, genre: "Dystopian"},
    {title: "The Alchemist", author: "Paulo Coelho", year: 1988, genre: "Philosophical Fiction"},
    {title: "The Little Prince", author: "Antoine de Saint-Exupéry", year: 1943, genre: "Children's Literature"},
    {title: "1984", author: "George Orwell", year: 1949, genre: "Dystopian"},
    {title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genre: "Southern Gothic"},
    {title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, genre: "Coming-of-Age Fiction"},
    {title: "The Giver", author: "Lois Lowry", year: 1993, genre: "Dystopian"}
];


let userBooks = books.filter( (bk) => (bk.year >= 1995));
 
// userBooks = books.filter( (bk) => (bk.genre === "Dystopian"));

userBooks = books.filter( (bk) => {
    return bk.genre === "Dystopian" && bk.year >= 1995
});

console.log(userBooks);