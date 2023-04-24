import './App.css';
import Home from './pages/Home';
import { Route, BrowserRouter , Routes } from 'react-router-dom';
import User from './pages/User';
import Login from './pages/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} /> 
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;