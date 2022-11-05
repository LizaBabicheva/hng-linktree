import React from 'react';
import Main from './Main';
import Contact from './Contact';
import Footer from './Footer';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="root">
      <Switch>

        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>
        
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
