import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";



const API_ID = 'c6867fa0cdd04dee8e04b52d679c9349';


function Update() {
    const {id} = useParams()
    const navigate = useNavigate()
    console.log(id)
    const [data, setData] = useState([])
    const [uname, setUname] = useState('')
    const [uemail, setUemail] = useState('')
    const datas = {uname, uemail}
    const fetchData = async() => {
        try {
            const response = await axios.get(`https://crudcrud.com/api/${API_ID}/users/${id}`)
            console.log(response.data)
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.put(`https://crudcrud.com/api/${API_ID}/users/${id}`, datas)
        .then(res => console.log(res.data))
        // navigate('/')
    }
    
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update User</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="enter name"
              value={data.name}
              onChange={(e) => { setUname(e.target.value) }}  
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="enter email"
              value={data.email}
              onChange={(e) => { setUemail(e.target.value) }}
            />
          </div>
          <br />
          <button className="btn btn-info">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Update;
