import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './components/navbar';
import { Login } from './components/login';
import { Compose } from './components/compose';
import { Home } from './components/Home/home';
import { Blog } from './components/Blog/blogs';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/compose' element={<Compose/>} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
