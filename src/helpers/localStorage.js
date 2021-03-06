export function addPropertyToLocalStorage(propertyId) {

    let visitedProperties = JSON.parse(localStorage.getItem('visitedProperties'));

    //check if localStorage item is empty
    if (visitedProperties) {
        for (let i = 0; i < visitedProperties.length; i++) {
            if (visitedProperties[i] === propertyId) {
                //if it already exists in local storage just return
                return;
            }
        }
        visitedProperties.push(propertyId);
        localStorage.setItem('visitedProperties', JSON.stringify(visitedProperties));

    } else {
        localStorage.setItem('visitedProperties', JSON.stringify([propertyId]));
    }

}

export function isPropertyVisited(propertyId) {
    let visitedProperties = JSON.parse(localStorage.getItem('visitedProperties'));

    if (visitedProperties) {
        for (let i = 0; i < visitedProperties.length; i++) {
            if (visitedProperties[i] === propertyId) {
                return true;
            }
        }
    }
    //in case of no matching
    return false;

}

export function getLastFilters() {
    //returns lasFilters or null if its empty
    return JSON.parse(localStorage.getItem('lastFilters'));
}

export function setLastFilters(filters) {
    localStorage.setItem('lastFilters', JSON.stringify(filters));
}