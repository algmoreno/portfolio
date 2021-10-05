import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';


function App() {
  return (
      <Router>
        <div>
          <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          <Footer />
        </div>
      </Router>
  );
}

export default App;