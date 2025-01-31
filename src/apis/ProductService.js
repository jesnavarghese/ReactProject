import axios from "axios";

export const deleteProduct = async (id) => {
  try {
    await axios.delete(`http://localhost:8000/products/${id}`);
  } catch (error) {
    console.error("Error deleting product", error);
  }
};


export const getProductbyId = async (id) => {
    try {
    const response = await axios.get(`http://localhost:8000/products/${id}`);
    return response.data;
    }catch (error) {
        console.error ("Error in fetching product: ",error);
    }    
};

export const updateProduct = async (id, updateProduct) => {
  try {
    const response = await axios.put(
      `http://localhost:8000/products/${id}`,
      updateProduct
    );
    return response.data;
  } catch (error) {
    console.error("Error in updating product: ", error);
  }
};
