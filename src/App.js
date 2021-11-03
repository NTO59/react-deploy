import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Knowledges from './pages/Knowledges';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/home" exact component= {Home} />
          <Route path="/competences" exact component= {Knowledges} />
          <Route path="/portfolio" exact component= {Portfolio} />
          <Route path="/contact" exact component= {Contact} />
          <Route component= {NotFound} />
        </Switch>
      
      </BrowserRouter>
    </>
  );
}

export default App;
