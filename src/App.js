import './App.css';
import BookList from './components/BookList'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Edit from './components/Edit'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/booklist' element={<BookList />}></Route>
        <Route path='/edit/:id' element={<Edit/>}></Route>
      </Routes></BrowserRouter>
  );
}

export default App;
