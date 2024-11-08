import BooksContainer from "@/components/app/BooksContainer";
import Description from "@/components/app/Description";

function Books() {
    return (
        <>
            <Description header="Books">
                Here are some of my favorite books I have read or have on my bookshelf.
            </Description>
            <BooksContainer />
        </>
    );
}

export default Books;
