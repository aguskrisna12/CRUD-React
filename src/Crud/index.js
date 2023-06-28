import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_KEY = 'c948dfbf2ee64c04814c1539f9091ca7'
const url = `https://crudcrud.com/api/${API_KEY}/users`

function Data() {
    const [data, setData] = useState([]);
    const fetchData = () => {
      try {
        fetch(`${url}`)
          .then(response => response.json())
          .then(json => setData(json))
      } catch (error) {
        console.error(error);
      }
    };
    
    useEffect(() => {
      fetchData();
    }, []);

    function handleDelete(id) {

      fetch(`${url}/${id}`, {
        method: 'DELETE'
      })
        .then(fetchData)
        .then(alert('success delete'))
    }

  return (
    <div className="container">
      <h2>CRUD</h2>
      <Link to="/create" className="btn btn-success my-3">
        Create +
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {data.map((data, index) => (
            <tr key={index}>
              <td>{data._id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>
                <Link
                  to={`/update/${data._id}`}
                  className="btn btn-sm btn-primary"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(data._id)}
                  className="btn btn-sm btn-danger ms-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Data;
