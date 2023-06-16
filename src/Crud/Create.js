import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_ID = 'a67648960acd4fe4a72b25b31faf5d95';

function Create() {

    const [post, setPost] = useState({
        name: '',
        email: ''
    })
    const navigate = useNavigate()

    const handleInput = (event) => {
        setPost({...post, [event.target.name] : event.target.value})
    }

    const handleSubmit = (event) => {
      if (!post.name || !post.email) {
        return;
      }
      event.preventDefault();
      axios.post(`https://crudcrud.com/api/${API_ID}/users`, post)
      .then(response => {
        window.location.href = '/';
      })
      .catch(console.log)
    };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Add New User</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="enter name"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="enter email"
              onChange={handleInput}
            />
          </div>
          <br />
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
