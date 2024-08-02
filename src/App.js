
import './App.css';
import Login from './login';
import SignUp from './SignUp';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import RegisterPage from './RegisterPage';
import SecondFlexPart from './SecondFlexPart';



function App() {
  return (
    <div className="App">
      
      
       <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
         <Route path="/RegisterPage" element ={<RegisterPage />} />
         <Route path="/" element={<SecondFlexPart />} />
         
      </Routes>
       
      </div>
  );
}

export default App;
