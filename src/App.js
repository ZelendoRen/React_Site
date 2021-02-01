import './App.css';
import React from 'react';
import SideBar from './components/static/menu'
import Footer from './components/static/footer'
import { BrowserRouter, Route } from 'react-router-dom'
import MainPage from './pages/main_page'
import AboutPage from './pages/about_page'
import companyHistory from "./components/static/companyHistory";

function App() {
  return (
    <>
      <BrowserRouter>
        <SideBar />
        <Route exact path='/' component={MainPage} />
        <Route path='/about' component={AboutPage} />
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
