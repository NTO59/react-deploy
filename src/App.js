import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Knowledges from './pages/Knowledges';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact component= {Home} />
          <Route path="/competences" exact component= {Knowledges} />
          <Route path="/portfolio" exact component= {Portfolio} />
          <Route path="/contact" exact component= {Contact} />
          <Route component= {NotFound} />
        </Switch>
      
      </Router>
    </>
  );
}

export default App;
