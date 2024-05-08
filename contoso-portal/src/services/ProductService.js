export async function getProducts(categoryId) {
    try {
        const url = '/api/ProductList?CategoryId=' + categoryId;
        const response = await fetch(url);
        return await response.json();
    } catch(error) {
        return [];
    }
}

export async function addProduct(data) {
    try {
        console.log(data);
        const url = '/api/AddProduct';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (response.status === 201) {
            return await response.json();
        } else {
            return {};
        }
    } catch(error) {
        return {};
    }
}

export async function getProductInfo(productId) {
    try {
        const url = '/api/ProductSalesSummary/' + productId;
        const response = await fetch(url);
        return await response.json();
    } catch(error) {
        return [];
    }
}