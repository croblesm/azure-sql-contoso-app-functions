import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, {useState, useEffect} from 'react';

import { Clippy } from './components/Clippy';
import { Header } from './components/Header';
import { Products } from './components/Products';
import { Categories } from './components/Categories';
import { AddProduct } from './components/AddProduct';
import { ProductInfo } from './components/ProductInfo';
import { getProducts, addProduct, getProductInfo } from './services/ProductService';
import { getCategories } from './services/CategoryService';

function App() {
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [productInfo, setProductInfo] = useState({});

  const formReset = () => { 
    document.getElementById("Name").value = "";
    document.getElementById("ProductCategoryID").value = "";
    document.getElementById("Color").value = "";
    document.getElementById("Size").value = "";
    document.getElementById("Weight").value = "";
    document.getElementById("StandardCost").value = "";
    document.getElementById("ListPrice").value = "";
  }

  const productCreate = (e) => {
    addProduct(product).then(res => {
      console.log(res);
      if (res !== undefined && res !== {}) {
        let categoryId = document.getElementById('CategoryId').value;
        // refresh the list and form
        document.getElementById("Name").value = "";
        document.getElementById("ProductCategoryID").value = "";
        document.getElementById("Color").value = "";
        document.getElementById("Size").value = "";
        document.getElementById("Weight").value = "";
        document.getElementById("StandardCost").value = "";
        document.getElementById("ListPrice").value = "";
        getProducts(categoryId).then(res => {
          setProducts(res);
        });
      }
    });
  }

  useEffect(() => {
    getProducts(0).then(products => setProducts(products));
    getCategories().then(categories => setCategories(categories));
  }, []);

  const updateProducts = (categoryId, categoryName) => {
    if (document.getElementsByClassName('list-group-item list-group-item-action active').length > 0) {
      document.getElementsByClassName('list-group-item list-group-item-action active')[0].classList.remove('active');
    }
    getProducts(categoryId).then(products => setProducts(products));
    setSelectedCategory(categoryName);
    document.getElementById('category-'+categoryId).className = 'list-group-item list-group-item-action active';

    getCategories(categoryId).then(categories => setFilteredCategories(categories));
    // set input CategoryId to categoryId
    document.getElementById('CategoryId').value = categoryId;
  }

  const onChangeForm = (e) => {
    setProduct({...product, [e.target.name]: e.target.value});
  }

  const onDetails = (productId, productNumber, productName) => {
    getProductInfo(productId).then(productInfo => {
      setProductInfo({"ProductName": productName, "ProductNumber": productNumber, "ProductData": productInfo[0]});
    });
    handleShow();
  }

  return (
    <div className="App">
      <Header></Header>
      <div className='container mrgnbtm'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='row mrgnbtm'>
              <Clippy></Clippy>
            </div>
            <div className='row mrgnbtm'>
              <Categories categories={categories} getProducts={updateProducts}></Categories>
            </div>
          </div>
          <div className='col-md-9'>
            <div className='row mrgnbtm'>
              <AddProduct product={product} onChangeForm={onChangeForm} addProduct={productCreate} categories={filteredCategories}></AddProduct>
            </div>
            <div className='row mrgnbtm'>
              <Products products={products} selectedCategory={selectedCategory} handleShow={onDetails}></Products>
            </div>
          </div>
        </div>
        <ProductInfo productInfo={productInfo} handleClose={handleClose} show={show} onHide={() => setShow(false)}
      />
      </div>
    </div>
  );
}

export default App;
