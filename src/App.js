import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { ProductList } from "./pages/ProductList";
import "./App.css";
import { DetailFooter } from "./Components/DetailFooter";
import { ProductDetails } from "./Components/ProductDetails";
import { ProductForm } from "./Components/ProductForm/ProductForm";
import { AdminPage } from "./AdminPage/AdminPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/update/:id" element={<ProductForm />} />
        <Route path="/create" element={<ProductForm />} />
        <Route
          path="/*"
          element={
            <>
              <Header />

              <main>
                <Routes>
                  <Route path="/shop" element={<ProductList />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                </Routes>
              </main>

              <DetailFooter />

              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
