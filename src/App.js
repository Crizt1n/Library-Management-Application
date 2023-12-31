import './App.css';
import BookList from './components/BookList'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Edit from './components/Edit'
import Footer from './components/Footer';
import './bootstrap.min.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/booklist' element={<BookList />}></Route>
        <Route path='/edit/:id' element={<Edit/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    
  );
}

export default App;