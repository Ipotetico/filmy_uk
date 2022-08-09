import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import Browser from './components/Browser/Browser';
import Mobile from './components/Mobile/Mobile';

import './scss/_reset.scss';
import './scss/App.scss';


const App = () => {
  return (
    <>

      <BrowserView>
        <Browser />
      </BrowserView>

      <MobileView>
        <Mobile />
      </MobileView>

    </>
  );
};

export default App;
