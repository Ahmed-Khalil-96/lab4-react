import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        name: '',
        price: 0,
        quantity: 0,
        imgUrl: 'https://source.unsplash.com/random'
    });

    const handleInputChange = useCallback((event) => {
        const { name, value } = event.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value
        }));
    }, []);

    const addProduct = (event) => {
        event.preventDefault();
        axios.post("http://localhost:2000/products", product)
            .then(res => {
                setProduct(res.data);
                navigate("/products");
            })
            .catch(error => console.log(error));
    };

    return (
        <div>
            <h1>Add New Product</h1>
            <form onSubmit={addProduct}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="productName" placeholder="Name" name="name" value={product.name} onChange={handleInputChange} />
                    <label htmlFor="productName">Product Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="productImage" placeholder="Image" name="imgUrl" value={product.imgUrl} onChange={handleInputChange} />
                    <label htmlFor="productImage">Product Image</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="productPrice" placeholder="Price" name="price" value={product.price} onChange={handleInputChange} />
                    <label htmlFor="productPrice">Product Price</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="productQuantity" placeholder="Quantity" name="quantity" value={product.quantity} onChange={handleInputChange} />
                    <label htmlFor="productQuantity">Product Quantity</label>
                </div>
                <button className="btn btn-dark">Submit</button>
            </form>
        </div>
    );
}
