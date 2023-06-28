import Data from "./Crud";
import Create from "./Crud/Create"
import Update from "./Crud/Update";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from "./Test-app";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Data />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/update/:id' element={<Update />}></Route>
        <Route path='/test' element={<Index />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
