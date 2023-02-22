const fetchCat = async () => {
    const fetchResponse = await fetch("http://localhost:3000/api/categories");
    const response = await fetchResponse.json();

    return response;
}

const displayCategories = async () => {
    categories = await fetchCat();

    categories.map((category) => {
        console.log(category.name);
    })
}

displayCategories();

const fetchItems = async () => {
    const fetchResponse = await fetch("http://localhost:3000/api/items");
    const response = await fetchResponse.json();

    return response;
}

const displayItems = async () => {
    items = await fetchItems();

    items.map((item) => {
        console.log(item.name);
    })
}

displayItems();