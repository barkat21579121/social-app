import React from 'react';
import './App.css';
import { Routes , Route ,BrowserRouter} from 'react-router-dom';
import { Main } from './main/Main';
import { Login } from './create-post/Login';
import { Navbar } from './components/Navbar';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/createpost' element={<CreatePost/>}/>


      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
