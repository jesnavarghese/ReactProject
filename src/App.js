import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Header} from './Components/Header';
import {Footer} from './Components/Footer';
import {ProductPage} from './pages/ProductPage';
import {Home} from './pages/Home';
import "./App.css";
import {CollectionsPage} from './pages/CollectionPage'
import {DeliveryDetails} from './pages/DeliveryDetails'
import {DetailFooter} from './Components/DetailFooter'



function App() {
  return (
    <Router>
      <div className="App">
        
        <Header />
        <CollectionsPage />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </main>
        <DeliveryDetails/>
        <DetailFooter/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;