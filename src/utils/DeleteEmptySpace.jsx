//Supprimer de l'espace inutile à l'interieur et exterieur
export const deleteEmptySpace = (value) => {
    var str = value.trim().replace(/\s+/g, ' ');
    return str;
} 


