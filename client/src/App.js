import logo from './logo.svg';
import './App.css';
import { Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
       <Routes>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
       </Routes>

      </header>
    </div>
  );
}

export default App;
