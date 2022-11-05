import React from 'react';

// import Profile from './Profile';
// import Links from './Links';
import Main from './Main';
import Contact from './Contact';
import Footer from './Footer';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="root">
      <Switch>
        <Route exact path="/">
          {/* <Profile />
          <Links /> */}
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
