import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import reportWebVitals from './reportWebVitals';
import Home from "./views/home.jsx";
import Banner from "./components/banner";
import Footer from './components/footer';
import Signin from "./views/signin";
import User from "./views/user";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Banner/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sign-in' element={<Signin/>}/>
          <Route path='/user' element={<User/>}/>
        </Routes>
        <Footer/>
      </Router>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();

