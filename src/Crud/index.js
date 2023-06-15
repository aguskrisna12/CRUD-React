import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



function Data() {
    const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://crudcrud.com/api/6e4e575032564ed799429756e93f6cbf');
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);
    console.log(data)
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
          {/* {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link
                  to={`/edit/${user.id}`}
                  className="btn btn-sm btn-primary"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="btn btn-sm btn-danger ms-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
}

export default Data;
