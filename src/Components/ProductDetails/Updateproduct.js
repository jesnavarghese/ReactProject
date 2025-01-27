import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductbyId, updateProduct } from "./ProductService";

export const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductbyId(id);
        setProduct(productData);
      } catch (error) {
        console.error("Error in fetching products ", error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: name === "price" ? parseFloat(value) : value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateProduct(id, product);
      alert("product updated successfully");
      navigate("/shop");
    } catch (error) {
      console.error("Error in updating product", error);
    }
  };

  return (
    <div className="update-product">
      <h1> Update Product</h1>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={product.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
        />

        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};
