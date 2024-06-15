function BookCard(props) {
  return (
    <div className="bg-light border p-4 m-2">
      <h3>{props.book.name}</h3>
      <h4>{props.book.author}</h4>
      <p>{props.book.rating}</p>
      <p>{props.book.category}</p>
    </div>
  );
}

export default BookCard;
