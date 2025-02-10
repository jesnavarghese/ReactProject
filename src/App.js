import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { ProductList } from "./pages/ProductList";
import "./App.css";
import { DetailFooter } from "./Components/DetailFooter";
import { ProductDetails } from "./Components/ProductDetails";
import { ProductForm } from "./Components/ProductForm/ProductForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route path="/shop" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/create" element={<ProductForm />} />
            <Route path="/update/:id" element={<ProductForm />} />
          </Routes>
        </main>

        <DetailFooter />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
