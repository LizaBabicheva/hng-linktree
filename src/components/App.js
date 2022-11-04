import React from 'react';

import Profile from './Profile';
import Links from './Links';
import Contact from './Contact';
import Footer from './Footer';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="root">
      <Profile />
      <Links />
      {/* <Route path='/contact'> */}
        <Contact />
      {/* </Route> */}
      <Footer />
    </div>
  );
}

export default App;
