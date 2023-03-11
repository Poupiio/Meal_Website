        // CATEGORIES
// const fetchCat = async () => {
//     const fetchResponse = await fetch("http://localhost:3000/api/categories");
//     const response = await fetchResponse.json();

//     return response;
// }

// const displayCategories = async () => {
//     categories = await fetchCat();

//     categories.map((category) => {
//         console.log("Catégorie : " + category.name);
//     })
// }

// displayCategories();

// -------------------------------------------------------------------------- //

        // ITEMS
// const fetchItems = async () => {
//     const fetchResponse = await fetch("http://localhost:3000/api/items");
//     const response = await fetchResponse.json();

//     return response;
// }

// const displayItems = async () => {
//     // Je fais un appel fetch vers mon API pour récupérer les données que je stocke dans les variables items et categories
//     items = await fetchItems();
//     categories = await fetchCat();

//     // Je boucle sur les données récupérées grâce à la fonction map()
//     items.map((item) => {
//         // Je viens recréer la structure HTML du tableau pour insérer les données de la BDD dynamiquement

//         // Création d'une ligne => je crée une fonction pour ça
//         const createRow = () => {
//             const tbody = document.querySelector('.db-content');
//             const row = document.createElement('tr');
//             tbody.appendChild(row);
            
//             const itemName = document.createElement('td');
//             // itemName.setAttribute('scope', 'row');
//             itemName.textContent = item.name;
//             row.append(itemName);

//             const description = document.createElement('td');
//             description.textContent = item.description;
//             row.append(description);
    
//             const price = document.createElement('td');
//             price.textContent = item.price + "€";
//             row.append(price);
            
//             // categories.map((category) => {
//             //     const cat = document.createElement('td');
//             //     cat.textContent = category.name;
//             //     row.append(cat);

//             // })

//             // const actions = document.createElement('td');
//             // row.append(actions);
    
//             // Bouton Voir
//             // const show = document.createElement('a');
//             // show.setAttribute('href', 'assets/js/get.js');
//             // show.classList('btn');
//             // show.classList('btn-secondary');
//             // show.classList('actions');
    
//             // const f1 = document.createElement('i');
//             // f1.classList('fa-solid fa-eye');
//             // f1.textContent = "Voir";
    
//             // // Bouton Modifier
//             // const update = document.createElement('a');
//             // update.setAttribute('href', 'assets/js/update.js');
//             // update.classList('btn btn-secondary actions');
    
//             // const f2 = document.createElement('i');
//             // f2.classList('fa-solid fa-square-pen');
//             // f2.textContent = "Modifier";
    
//             // // Bouton Supprimer
//             // const remove = document.createElement('a');
//             // remove.setAttribute('href', 'assets/js/delete.js');
//             // remove.classList('btn btn-secondary actions');
    
//             // const f3 = document.createElement('i');
//             // f3.classList('fa-solid fa-trash');
//             // f3.textContent = "Supprimer";
    
//             // row.append(show, f1, update, f2, remove, f3);
//         };

//         createRow();
//     });
// };

// displayItems();


// -------------------------------------------------------------------------- //
// ALL INFOS FROM ITEMS
const fetchAll = async () => {
    const fetchResponse = await fetch("http://localhost:3000/api/items/infos");
    const response = await fetchResponse.json();

    return response;
}

// const displayAll = async () => {
//     infos = await fetchAll();

//     infos.map((info) => {
//         console.log("All infos: ", info);
//     })
// };

// displayAll();


const displayAllInfos = async () => {
    // Je fais un appel fetch vers mon API pour récupérer les données = toutes les infos de tous les items
    const datas = await fetchAll();
    
    // Je boucle sur les données récupérées grâce à la fonction map()
    datas.map((data) => {
        // Je viens recréer la structure HTML du tableau pour insérer les données de la BDD dynamiquement

//         // Création d'une ligne => je crée une fonction pour ça
        const createRow = () => {
            const tbody = document.querySelector('.db-content');
            const row = document.createElement('tr');
            tbody.appendChild(row);

            const itemName = document.createElement('td');
            // itemName.setAttribute('scope', 'row');
            itemName.textContent = data.name;
            row.append(itemName);

            const description = document.createElement('td');
            description.textContent = data.description;
            row.append(description);

            const price = document.createElement('td');
            price.textContent = data.price + "€";
            row.append(price);

            const category = document.createElement('td');
            category.textContent = data.category;
            row.append(category);

            const actions = document.createElement('td');
            row.append(actions);

            // const see = document.createElement('a');
            // see.setAttribute('href', 'assets/js/get.js');
            // see.classList.add('btn', 'btn-secondary', 'actions');

            // const f1 = document.createElement('i');
            // f1.classList.add('fa-solid', 'fa-eye');
            // f1.textContent = "Voir";
            // f1.appendChild(see);
            // row.append(see);

            // Créer un élément d'ancrage
            const watch = document.createElement('a');

            // Définir l'emplacement de l'ancrage
            watch.href = '#';

            // Créer un élément <i> pour le contenu
            const icon = document.createElement('i');
            icon.classList.add('fa-solid', 'fa-eye');
            icon.innerHTML = 'Voir';

            // Ajouter l'élément <i> comme enfant de l'élément d'ancrage
            watch.appendChild(icon);

            // Ajouter l'élément d'ancrage au document
            row.appendChild(watch);

        };
        // Crée une nouvelle ligne pour chaque item
        createRow();
    });
};

displayAllInfos();