import BookCard from "./BookCard";

const bookList = [
  {
    id: 0,
    name: "Little Fires Everywhere",
    author: "Celeste Ng",
    rating: null,
    category: "Contemporary Fiction",
  },
  {
    id: 1,
    name: "Pride and Prejudice",
    author: "Jane Austen",
    rating: null,
    category: "Fiction",
  },
  {
    id: 2,
    name: "When Among Crows",
    author: "Veronica Roth",
    rating: null,
    category: "Fantasy",
  },
  {
    id: 3,
    name: "The Ministry of Time",
    author: "Kaliane Bradley",
    rating: null,
    category: "Science Fiction",
  },
  {
    id: 4,
    name: "The Girl on the Train",
    author: "Paula Hawkins",
    rating: null,
    category: "Thriller",
  },
  {
    id: 5,
    name: "Bobby Truax",
    author: "Denise Cassino",
    rating: null,
    category: "Crime",
  },
  {
    id: 6,
    name: "I Know Why the Caged Bird Sings",
    author: "Maya Angelou",
    rating: null,
    category: "Autobiography",
  },
  {
    id: 7,
    name: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    rating: null,
    category: "Nonfiction",
  },
];

function App() {
  return (
    <div>
      <h1>My Book Rating App</h1>
      {bookList.map((b) => (
        <BookCard book={b} />
      ))}
    </div>
  );
}

export default App;
