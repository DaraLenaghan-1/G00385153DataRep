import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Home } from './components/home';
import { Drama } from './components/drama';
import { Comedy } from './components/comedy';
import { Action } from './components/action';
import { AddShow } from './components/addShow';
import { ShowStorage } from './components/showStorage';
import { Edit } from './components/edit';
import { All } from './components/all';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">GuideCentral</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/showStorage">Show Storage</Nav.Link>
                <Nav.Link href="/addShow">Add Show</Nav.Link>
                <NavDropdown title="Genres" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/action">Action</NavDropdown.Item>
                  <NavDropdown.Item href="/comedy">Comedy</NavDropdown.Item>
                  <NavDropdown.Item href="/drama">Drama</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/all">All</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Container>
          </Navbar>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/action' element={<Action></Action>}></Route>
            <Route path='/addShow' element={<AddShow></AddShow>}></Route>
            <Route path='/comedy' element={<Comedy></Comedy>}></Route>
            <Route path='/drama' element={<Drama></Drama>}></Route>
            <Route path='/showStorage' element={<ShowStorage></ShowStorage>}></Route>
            <Route path='/edit/:id' element={<Edit></Edit>}></Route>
            <Route path='/all/' element={<All></All>}></Route>

          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
