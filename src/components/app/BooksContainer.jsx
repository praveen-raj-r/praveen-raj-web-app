import books from "@/data/books.json";

function BooksContainer() {
    return (
        <div className="relative grid grid-cols-2 md:grid-cols-3">
            {books.map((bookItem, key) => (
                <BookItem book={bookItem} key={`bookItem-${key}`} />
            ))}
        </div>
    );
}

function BookItem(book) {
    return <a href={book.hrefUrl}>{book.name}</a>;
}
export default BooksContainer;
