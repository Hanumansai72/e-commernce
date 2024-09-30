import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './loginpage';
import Homepage from './homepage';
import { MobileAccessories } from './componets/mobileaccesior';
import Cameras from './componets/cameras';
import Speaker from './componets/speakes';
import Computer from './componets/computers';
import Tablet from './componets/tablets';
import HomeCinema from './componets/tv';
import Mobilesinglepage from './componets/dynmanic';
import Mobilesinglepage1 from './componets/speackersdynamic';
import Mobilesinglepage2 from './componets/camerasdyanamic';
import Tvspage from './componets/tvsdyanmic';
import Tabletspage from './componets/tabletsdyanmic';
import Computerpage from './componets/computerdynamic';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} /> {/* Default route */}
        <Route path="/home" element={<Homepage />} />
        <Route path="/mobiles" element={<MobileAccessories />} />
        <Route path="/drones" element={<Cameras />} />
        <Route path="/speakers" element={<Speaker />} /> {/* Fixed typo */}
        <Route path="/computer" element={<Computer />} /> {/* Lowercase route */}
        <Route path="/tablet" element={<Tablet />} />
        <Route path="/tv" element={<HomeCinema />} /> {/* Lowercase route */}
        <Route path="/mobiles/:id" element={<Mobilesinglepage />} />
        <Route path="/speakers/:id" element={<Mobilesinglepage1 />} />
        <Route path="/drones/:id" element={<Mobilesinglepage2 />} />
        <Route path="/tv/:id" element={<Tvspage />} />
        <Route path="/tablet/:id" element={<Tabletspage />} />
        <Route path="/computer/:id" element={<Computerpage />} />





        

      </Routes>
    </Router>
  );
}

export default App;
