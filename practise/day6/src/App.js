import React, { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    roll: "",
    className: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});
  const [search, setSearch] = useState("");

  /* ADD STUDENT */
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, roll, className } = formData;

    if (!name || !roll || !className) {
      alert("All fields are required");
      return;
    }

    const rollExists = students.some((s) => s.roll === roll);
    if (rollExists) {
      alert("Roll number must be unique");
      return;
    }

    const newStudent = {
      id: students.length + 1,
      name,
      roll,
      className,
    };

    setStudents([...students, newStudent]);
    setFormData({ name: "", roll: "", className: "" });
  };

  /* DELETE */
  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  /* EDIT */
  const startEdit = (student) => {
    setEditingId(student.id);
    setEditData({ ...student });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditData({});
  };

  const saveEdit = () => {
    const { name, roll, className } = editData;

    if (!name || !roll || !className) {
      alert("All fields are required");
      return;
    }

    const rollExists = students.some(
      (s) => s.roll === roll && s.id !== editingId
    );

    if (rollExists) {
      alert("Roll number must be unique");
      return;
    }

    setStudents(
      students.map((s) => (s.id === editingId ? editData : s))
    );

    cancelEdit();
  };

  /* SEARCH */
  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Student List Management</h2>

      {/* ADD FORM */}
      <form onSubmit={handleSubmit} className="row g-3 mb-4">
        <div className="col-md-4">
          <input
            className="form-control"
            placeholder="Student Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
        </div>

        <div className="col-md-4">
          <input
            className="form-control"
            placeholder="Roll Number"
            value={formData.roll}
            onChange={(e) =>
              setFormData({ ...formData, roll: e.target.value })
            }
          />
        </div>

        <div className="col-md-4">
          <input
            className="form-control"
            placeholder="Class (e.g. 10A)"
            value={formData.className}
            onChange={(e) =>
              setFormData({ ...formData, className: e.target.value })
            }
          />
        </div>

        <div className="col-12 text-center">
          <button className="btn btn-primary">Add Student</button>
        </div>
      </form>

      {/* SEARCH */}
      <input
        className="form-control mb-3"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* TABLE */}
      {filteredStudents.length === 0 ? (
        <p className="text-center text-muted">No students found</p>
      ) : (
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Roll</th>
              <th>Class</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>

                {editingId === s.id ? (
                  <>
                    <td>
                      <input
                        className="form-control"
                        value={editData.name}
                        onChange={(e) =>
                          setEditData({ ...editData, name: e.target.value })
                        }
                      />
                    </td>
                    <td>
                      <input
                        className="form-control"
                        value={editData.roll}
                        onChange={(e) =>
                          setEditData({ ...editData, roll: e.target.value })
                        }
                      />
                    </td>
                    <td>
                      <input
                        className="form-control"
                        value={editData.className}
                        onChange={(e) =>
                          setEditData({
                            ...editData,
                            className: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-success btn-sm me-2"
                        onClick={saveEdit}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={cancelEdit}
                      >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{s.name}</td>
                    <td>{s.roll}</td>
                    <td>{s.className}</td>
                    <td>
                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => startEdit(s)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(s.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
