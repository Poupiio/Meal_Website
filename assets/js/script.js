// ALL INFOS FROM ITEMS
const fetchAll = async () => {
    const fetchResponse = await fetch("http://localhost:3000/api/items/infos");
    const response = await fetchResponse.json();

    return response;
}


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
            description.classList.add('des');
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

            //  Bouton "Voir"
            // Créer une balise <a>
            const first = document.createElement('a');
            first.classList.add('btn', 'btn-secondary', 'actions');
            first.href = '../seeItem.html';
            first.textContent = 'Voir ';

            // Créer un élément <i> pour le contenu
            const eye = document.createElement('i');
            eye.classList.add('fa-solid', 'fa-eye');
            
            // Ajouter l'élément <i> comme enfant de <a>
            first.appendChild(eye);

            // Bouton "Modifier"
            const second = document.createElement('a');
            second.classList.add('btn', 'btn-primary', 'actions');
            second.href = '../updateItem.html';
            second.textContent = 'Modifier ';

            // Créer un élément <i> pour le contenu
            const pen = document.createElement('i');
            pen.classList.add('fa-solid', 'fa-square-pen');
            
            // Ajouter l'élément <i> comme enfant de l'élément d'ancrage
            second.appendChild(pen);

            // Bouton "Supprimer"
            const third = document.createElement('a');
            third.classList.add('btn', 'btn-danger', 'actions');
            third.href = '../deleteItem.html';
            third.textContent = 'Supprimer ';

            // Créer un élément <i> pour le contenu
            const trash = document.createElement('i');
            trash.classList.add('fa-solid', 'fa-trash');
            
            // Ajouter l'élément <i> comme enfant de l'élément d'ancrage
            third.appendChild(trash);

            // Ajouter l'élément d'ancrage au document
            actions.append(first, second, third);
        };
        // Crée une nouvelle ligne pour chaque item
        createRow();
    });
};

displayAllInfos();