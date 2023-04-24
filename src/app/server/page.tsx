import React from 'react'

  type Book = {
             id: number;
             name: string;
             type: string;
             available: boolean;
};

async function getBooks() {
   const response = await fetch("https://api.quotable.io/random?tags=technology",{
cache:"no-store"
   });
const data = response.json();

return data;
}

 async function Server () {
    const books= await getBooks();
console.log(books);
    return (
    <div>
        <h1>Static Page</h1>
        {books.map((book: Book) => (
            <ul key={book.id}>
                <li>
                    {book.name}-
                    {book.type}-
                    {book.available}
                </li>
            </ul>
 ))}
        </div>
  );
}

export default Server