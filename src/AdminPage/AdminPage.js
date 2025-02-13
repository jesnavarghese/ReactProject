import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminPage.css";
import axios from "axios";
import { deleteProduct } from "../apis/ProductDeletion";
import { Table ,Button, Image    } from "antd";

export const AdminPage = () => {
  const navigate = useNavigate();
  const [getProducts, setGetProducts] = useState([]);

  async function getAllProducts() {
    try {
      const response = await axios.get(`http://localhost:8000/products`);
      if (Array.isArray(response.data)) {
        setGetProducts(response.data);
      } else {
        setGetProducts([]);
      }
    } catch (error) {
      console.error("Error in fetching product", error);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  if (!getProducts) {
    return <h2>Product is not found.</h2>;
  }

  async function handleDelete(productId, productName) {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${productName}`
    );
    if (confirmDelete) {
      try {
        await deleteProduct(productId);
        setGetProducts(
          getProducts.filter((product) => product.id !== productId)
        );
      } catch (error) {
        console.error("Error in deleting product: ", error);
      }
    }
  }

  const handleUpdate = (productId) => {
    console.log("navigating to update page for product ID", productId);
    navigate(`/update/${productId}`);
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image, record) =>
        image ? (
          <img
            src={image}
            alt={record.name}
            width={50}
            height={50}
            style={{ borderRadius: "5px" }}
          />
        ) : (
          <div
            className="admin-placeholder-box"
            style={{ width: 50, height: 50, background: "#ddd" }}
          />
        ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `$${price.toFixed(3)}`,
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      ellipsis: true,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="admin-button">
          <button onClick={() => handleUpdate(record.id)}>Edit</button>
          <button
            onClick={() => handleDelete(record.id, record.name)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
          </div>
      ),
    },
  ];

  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Panel</h1>
      <Button
        type="primary"
        onClick={() => navigate("/create")}
        style={{ marginBottom: "16px" }}
      >
        Create Product
      </Button>
      <Table
        columns={columns}
        dataSource={getProducts}
        rowKey="id"
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

// <div className="admin-container">
//   <h1 className="admin-title">Admin Panel</h1>
//   <button type="primary"  onClick={() => navigate("/create")} className="create-button" style ={{marginBottom :"16px"}}>
//     Create Product
//   </button>
//   <Table
//   columns={columns}
//   dataSource={getProducts}
//   rowKey ="id"
//   pagination={{pageSize :5}}
//   />
//   <div />
//   );
//   };

//   {/* <div className="admin-product">

//          <table>
//           <thead>
//             <tr>
//               <th>Image</th>

//               <th>Name</th>
//               <th>Price</th>
//               <th>Rating</th>
//               <th>Description</th>

//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {getProducts.map((product) => (
//               <tr key={product.id}>
//                 <td>
//                   {" "}
//                   {product.image ? (
//                     <img
//                       className="product-admin-image"
//                       src={product.image}
//                       alt={product.name}
//                     />
//                   ) : (
//                     <div className="admin-placeholder-box"></div>
//                   )}
//                 </td>
//                 <td>{product.name}</td>
//                 <td>{product.price.toFixed(3)}</td>

//                 <td>{product.rating}</td>
//                 <td>{product.description}</td>

//                 <td>
//                   <div className="admin-button">
//                     <button onClick={() => handleUpdate(product.id)}>
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(product.id, product.name)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div> */
//   /* );
// };  */
