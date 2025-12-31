import React, { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");

  // Add Book
  const handleAddBook = (e) => {
    e.preventDefault();

    if (bookName.trim() === "") return;

    const newBook = {
      id: books.length + 1,
      name: bookName,
      author: authorName,
      date: publishDate
    };

    setBooks([...books, newBook]);
    setBookName("");
    setAuthorName("");
    setPublishDate("");
  };

  // Delete Book
  const handleDelete = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  // Save Edit
  const handleSave = (id) => {
    if (editName.trim() === "") return;

    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, name: editName } : book
      )
    );
    setEditId(null);
  };

  // Search Filter
  const filteredBooks = books.filter(
    (book) =>
      book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h1 className="mb-3">Book List Management App</h1>

      {/* Add Book Form */}
      <form onSubmit={handleAddBook} className="mb-4">
        <input
          type="text"
          placeholder="Book Name"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
          className="form-control mb-2"
        />
        <input
          type="text"
          placeholder="Author Name"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          className="form-control mb-2"
        />
        <input
          type="date"
          value={publishDate}
          onChange={(e) => setPublishDate(e.target.value)}
          className="form-control mb-2"
        />
        <button className="btn btn-success">Add Book</button>
      </form>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by book or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-control mb-3"
      />

      {/* Book Table */}
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Book Name</th>
            <th>Author</th>
            <th>Publish Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">
                No books found
              </td>
            </tr>
          ) : (
            filteredBooks.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>

                <td>
                  {editId === book.id ? (
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                    />
                  ) : (
                    book.name
                  )}
                </td>

                <td>{book.author}</td>
                <td>{book.date}</td>

                <td>
                  {editId === book.id ? (
                    <>
                      <button
                        className="btn btn-success btn-sm me-2"
                        onClick={() => handleSave(book.id)}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => setEditId(null)}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn btn-primary btn-sm me-2"
                        onClick={() => {
                          setEditId(book.id);
                          setEditName(book.name);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(book.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
