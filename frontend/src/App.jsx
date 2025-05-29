import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Cuisines from './Pages/Cuisines.jsx';
import Recipes from './Pages/Recipes.jsx';
import RecipeDetail from './Pages/RecipesDetail.jsx';
import About from './Pages/About';
import Contact from './Pages/Contact.jsx'
import Signup from './Pages/Signup.jsx';
import ForgotPassword from './Pages/ForgotPassword.jsx';
import BlogList from './Pages/BlogList.jsx';
import BlogDetail from './Pages/BlogDetails.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/cuisines" element={<Cuisines />} />
        <Route path="/Recipe" element={<Recipes/>}/>
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/about" element={<About/>}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='/Blog' element={<BlogList/>}/>
        <Route path='/Blog/:id' element={<BlogDetail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
