import React from 'react';
import Card from 'react-bootstrap/Card';

// {
//     "Name": "A New Product",
//     "Color": "red",
//     "StandardCost": 1.23,
//     "ListPrice": 2.34,
//     "Size": "L",
//     "Weight": 1.23,
//     "ProductCategoryID": 40
// }

export const AddProduct = ({onChangeForm, addProduct, categories }) => {
    if (categories.length === 0) return null;

    const CategoryRow = (category, index) => {
        return (
            <option value={category.ProductCategoryID}>{category.Name}</option>
        )
    }
    const CategorySelect = categories.map((category, index) => CategoryRow(category, index));

    return (
        <div className="container">
            <div className='row'>
                <div className='col-md-12'>
                    <h3>Add a Product</h3>
                    <Card>
                        <Card.Body>
                            <form>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="Name">Product Name</label>
                                        <input type="text" className="form-control" id="Name" name="Name" placeholder="Name" onChange={(e) => onChangeForm(e)} maxLength={50} required />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="ProductCategoryID">Sub-Category</label>
                                        <select className="form-control" id="ProductCategoryID" name="ProductCategoryID" onChange={(e) => onChangeForm(e)} required >
                                            <option value="">Select a Sub-Category</option>
                                            {CategorySelect}
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-3">
                                        <label htmlFor="Color">Color</label>
                                        <input type="text" className="form-control" id="Color" name="Color" placeholder="Color" onChange={(e) => onChangeForm(e)} maxLength={15} />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="Size">Size</label>
                                        <select className="form-control" id="Size" name="Size" onChange={(e) => onChangeForm(e)}>
                                            <option value=""></option>
                                            <option value="S">S</option>
                                            <option value="M">M</option>
                                            <option value="L">L</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="Weight">Weight (kg)</label>
                                        <input type="number" className="form-control" id="Weight" name="Weight" placeholder="Weight" onChange={(e) => onChangeForm(e)} />
                                    </div>
                                </div>
                                <div className="row bottomrow">
                                    <div className="form-group col-md-3">
                                        <label htmlFor="StandardCost">Standard Cost ($)</label>
                                        <input type="number" className="form-control" id="StandardCost" step="0.01" name="StandardCost" placeholder="0.00" onChange={(e) => onChangeForm(e)} required min={0.01} />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="ListPrice">List Price ($)</label>
                                        <input type="number" className="form-control" id="ListPrice" step="0.01" name="ListPrice" placeholder="0.00" onChange={(e) => onChangeForm(e)} required min={0.01} />
                                    </div>
                                    <div className="col-md-3 position-relative">
                                        <button type="button" onClick= {(e) => addProduct()} className="btn btn-success position-absolute bottom-0 end-0">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}
