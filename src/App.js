import Data from "./Crud";
import Create from "./Crud/Create"
import Update from "./Crud/Update";
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Data />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/update/:id' element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
