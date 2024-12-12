import React from 'react';
import Login from './login_signup/Login.jsx';
import { BrowserRouter,Routes,Route} from
"react-router-dom"; 
import Signup from './login_signup/Signup.jsx';

const  App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route  path="/Signup" element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
