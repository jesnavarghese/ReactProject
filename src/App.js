import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Header} from './Components/Header';
import {Footer} from './Components/Footer';
import {} from './Components/ProductDetails'
import {Home} from './pages/Home';
import "./App.css";
import {CollectionsPage} from './pages/ProductList/CollectionPage'
import {DeliveryDetails} from './pages/ProductList/DeliveryDetails'
import {DetailFooter} from './Components/DetailFooter'
import { ProductDetails } from "./Components/ProductDetails";



function App() {
  return (
    <Router>
      <div className="App">
        
        <Header />
        <CollectionsPage />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
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