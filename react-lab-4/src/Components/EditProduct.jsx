import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function EditProduct() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        name: '',
        price: 0,
        quantity: 0,
        imgUrl: 'https://source.unsplash.com/random'
    });

    const getProductById = (id) => {
        axios.get(`http://localhost:2000/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.log(error))
    };

    useEffect(() => {
        getProductById(id);
    }, [id]);

    const editProduct = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:2000/products/${id}`, product)
            .then(() => navigate("/products"))
            .catch(error => console.log(error));
    };

    const handleInputChange = useCallback((event) => {
        const { name, value } = event.target;
        setProduct(old => ({
            ...old,
            [name]: value
        }));
    }, []);

    return (
        <div>
            <h1>Edit Product</h1>
            <form onSubmit={editProduct}>
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
