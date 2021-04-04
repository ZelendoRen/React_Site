import './App.css';
import React from 'react';
import SideBar from './components/static/menu'
import Footer from './components/static/footer'
import { BrowserRouter, Route } from 'react-router-dom'
import MainPage from './pages/main_page'
import AboutPage from './pages/about_page'
import Translator from './pages/translator'
import Products from './pages/products'
import Model from './pages/model'
import companyHistory from "./components/static/companyHistory";

function App() {
  return (
    <>
      <BrowserRouter>
        <SideBar />
        <Route exact path='/' component={MainPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/translator' component={Translator} />
        <Route path='/client' component={Model} />
        <Route path='/product' component={Products} />

        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
