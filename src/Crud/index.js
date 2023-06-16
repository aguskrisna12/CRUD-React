import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_ID = 'a67648960acd4fe4a72b25b31faf5d95';

function Data() {
    const [data, setData] = useState([]);
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://crudcrud.com/api/${API_ID}/users`);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
      fetchData();
    }, []);
    console.log(data)

    function handleDelete(id) {
        axios.delete(`https://crudcrud.com/api/${API_ID}/users/${id}`)
        .then(fetchData)
        .catch(console.log)
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
            <th>Email</th>
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
                  to={`/edit/${data._id}`}
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
