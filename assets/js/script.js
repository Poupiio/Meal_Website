const fetchCat = async () => {
    const fetchResponse = await fetch("http://localhost:3000/api/categories");
    const response = await fetchResponse.json();

    return response;
}

const displayCategories = async () => {
    categories = await fetchCat();

    categories.map((category) => {
        console.log("Catégorie : " + category.name);
    })
}

displayCategories();

const fetchItems = async () => {
    const fetchResponse = await fetch("http://localhost:3000/api/items");
    const response = await fetchResponse.json();

    return response;
}

const displayItems = async () => {
    // Je fais un appel fetch vers mon API pour récupérer les données que je stocke dans la variable items
    items = await fetchItems();

    // Je cible la balise <tr> avec la class db-content
    const container = document.querySelector('.db-content');

    // Je boucle sur les données récupérées grâce à la fonction map()
    items.map((item) => {
        // Je viens recréer la structure HTML du tableau pour insérer les données de la BDD dynamiquement

        // Création de la 1ère ligne
        const firstRow = document.createElement('th');
        firstRow.setAttribute('scope', 'row');
        firstRow.textContent = item.name;
        container.before(firstRow);

        const description = document.createElement('td');
        description.textContent = item.description;
        container.before(description);

        const price = document.createElement('td');
        price.textContent = item.price + "€";
        container.before(price);

        const cat = document.createElement('td');
        cat.textContent = item.category;
        container.before(cat);

        // const actions = document.createElement('td');
        // container.append(actions);

        // // Bouton Voir
        // const show = document.createElement('a');
        // show.setAttribute('href', 'assets/js/get.js');
        // show.classList('btn btn-secondary actions');

        // const f1 = document.createElement('i');
        // f1.classList('fa-solid fa-eye');
        // f1.textContent = "Voir";

        // // Bouton Modifier
        // const update = document.createElement('a');
        // update.setAttribute('href', 'assets/js/update.js');
        // update.classList('btn btn-secondary actions');

        // const f2 = document.createElement('i');
        // f2.classList('fa-solid fa-square-pen');
        // f2.textContent = "Modifier";

        // // Bouton Supprimer
        // const remove = document.createElement('a');
        // remove.setAttribute('href', 'assets/js/delete.js');
        // remove.classList('btn btn-secondary actions');

        // const f3 = document.createElement('i');
        // f3.classList('fa-solid fa-trash');
        // f3.textContent = "Supprimer";

        // container.append(show, f1, update, f2, remove, f3);
    });
};

displayItems();