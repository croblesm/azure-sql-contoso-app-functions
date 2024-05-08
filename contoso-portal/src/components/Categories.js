import React from 'react';

export const Categories = ({categories, getProducts}) => {
    if (categories.length === 0) return null;

    const CategoryRow = (category) => {
        const categoryId = 'category-'+category.ProductCategoryID;
        return (
            <button type='button' id={categoryId} className='list-group-item list-group-item-action' onClick={() => getProducts(category.ProductCategoryID, category.Name)}>
                {category.Name}
            </button>
        )
    }

    const CategoryList = categories.map((category) => CategoryRow(category));

    return (
        <div className='container'>
            <input type="hidden" id="CategoryId" name="CategoryId" />
            <h3>Select a Category</h3>
            <div className='list-group'>
                {CategoryList}
            </div>
        </div>
    )
}