import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        event.preventDefault();
        axios.post('https://crudcrud.com/api/6e4e575032564ed799429756e93f6cbf',{
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => console.log(response))
        // navigate('/')
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
