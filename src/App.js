import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Category from './components/CategoryComponent';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Meghna Raguraman Resume</NavbarBrand>
          </div>
        </Navbar>
        <Header />
        <Category />
        <Footer />
      </div>
    );
  }
}

export default App;
