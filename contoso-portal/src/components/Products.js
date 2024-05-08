import React from 'react';
import CurrencyFormat from 'react-currency-format';
import Button from 'react-bootstrap/Button';

export const Products = ({products, selectedCategory, handleShow}) => {
    if (products.length === 0) return null

    const ProductRow = (product, index) => {
        return (
            <tr key={index}>
                <td>{product.ProductNumber}</td>
                <td>{product.Name}</td>
                <td><CurrencyFormat value={product.ListPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/></td>
                <td>{product.Category}</td>
                <td><Button variant='primary' size='sm' onClick={() => handleShow(product.ProductId, product.ProductNumber, product.Name)}>Details</Button></td>
            </tr>
        )
    }

    const ProductTable = products.map((product, index) => ProductRow(product, index))

    return (
        <div className='container'>
            <h3>Products in {selectedCategory}</h3>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Product #</th>
                        <th>Name</th>
                        <th>List Price</th>
                        <th>Category</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {ProductTable}
                </tbody>
            </table>
        </div>
    )
}