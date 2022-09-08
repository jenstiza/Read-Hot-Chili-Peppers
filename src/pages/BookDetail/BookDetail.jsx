import { useParams } from 'react-router-dom';



export default function BookDetail({ books }) {
  const { bookTitle } = useParams();
  const book = books.find((b) => b.title === bookTitle);
  
  return (
        <div>
        {book}
        </div>
  );
}