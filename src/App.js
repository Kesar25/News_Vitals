import React, { Component } from 'react';
import News from './components/News';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <>
        
        <Router>
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<News key="general" category="general"/>}/>
            <Route exact path="/business" element={<News key="business" category="business"></News>}/>
            <Route exact path="/sports" element={<News key="sports" category="sports"/>}></Route>
            <Route exact path="/technology" element={<News key="technology" category="technology"/>}></Route>
            <Route exact path="/entertainment"element={<News key="entertainment" category="entertainment"/>}></Route>
            <Route exact path="/health" element={<News key="health" category="health"/>}></Route>
            <Route exact path="/science"element={<News key="science" category="science"/>}></Route>
            <Route exact path="/general"element={<News key="general" category="general"/>}></Route>
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
