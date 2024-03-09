import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ShowProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    const getProductById = () => {
        axios.get(`http://localhost:2000/products/${id}`)
            .then((response) => {
                console.log(response.data);
                setProduct(response.data);
            })
            .catch(error => console.log(error));
    };
    
    useEffect(() => {
        getProductById();
    }, []);

    return (
        <div>
            <div className="card">
                <img src={product.imgUrl} className="card-img-top w-50 mx-auto" alt="Product"></img>
                <hr />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Quantity: {product.quantity}</p>
                    <p className="card-text">Price: {product.price} $</p>
                    <Link to="/products" className="btn btn-info">Go to Products</Link>
                </div>
            </div>
        </div>
    );
}
