import Data from "./Crud";
import Create from "./Crud/Create"
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Data />}></Route>
        <Route path='/create' element={<Create />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
