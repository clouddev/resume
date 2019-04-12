import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Category from './CategoryComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const HomePage = () => {
      return(
          <Home 
          />
      );
    }

    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Meghna Raguraman Resume</NavbarBrand>
          </div>
        </Navbar>
        <Category/>
        <Switch>
            <Route path='/home' component={HomePage} />
            <Route exact path='/category' component={() => <Category categories={this.state.categories} />} />
            <Redirect to="/home" />
        </Switch>
      </div>

    );
  }
}

export default Main;