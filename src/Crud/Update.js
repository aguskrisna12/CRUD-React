import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const API_KEY = 'c948dfbf2ee64c04814c1539f9091ca7'
const url = `https://crudcrud.com/api/${API_KEY}/users`


function Update() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [name, setUname] = useState('')
    const [email, setUemail] = useState('')

    const fetchData = () => {
      try {
        fetch(`${url}`)
          .then(response => response.json())
          .then(json => {
            setUname(json[0]['name'])
            setUemail(json[0]['email'])
          })
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
        fetchData()
    },[])

    const handleSubmit = (event) => {
        event.preventDefault()
        
        let datas = {name, email}
        console.log(datas)

        fetch(`${url}/${id}`, {
          method: 'PUT',
          headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify(datas)
        })
        
        navigate('/')
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
              value={name}
              onChange={ e => setUname(e.target.value)}  
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="enter email"
              value={email}
              onChange={ e => setUemail(e.target.value)}
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
