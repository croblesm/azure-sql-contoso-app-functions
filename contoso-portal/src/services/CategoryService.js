export async function getCategories(categoryId) {
    try {
        let url = '/api/CategoryList';
        // if categoryId is an int, get subcategories list
        if (categoryId && !isNaN(categoryId)) {
            url += '/' + categoryId;
        }
        const response = await fetch(url);
        return await response.json();
    } catch(error) {
        return [];
    }
}