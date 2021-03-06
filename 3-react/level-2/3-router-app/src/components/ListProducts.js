import React, { useState, useEffect } from 'react';
import productsApi from '../api/Products'
import {Link} from 'react-router-dom'

const ListProducts = () => {
    let [products, setProducts] = useState([])
    useEffect(() => {
        productsApi.getProducts()
            .then(response => response.data)
            .then(products => setProducts(products))
    }, [])

    function renderProducts() {
        return products.map((product, index) => {

            return <tr>
                <td> <Link to={`/findProduct/${product.id}`}>{product.id}</Link></td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
            </tr>

        })
    }

    return (

        <div className="container">

            <div className="card">
                <div className="card-header">Products</div>
                <div className="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Product Name</th>
                                <th>Descriptiin</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderProducts()}
                        </tbody>
                    </table>

                </div>

            </div>





        </div>
    );
};

export default ListProducts;