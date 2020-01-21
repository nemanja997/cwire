export function addPropertyToLocalStorage(propertyId) {
    let visitedProperties = JSON.parse(localStorage.getItem('visitedProperties'));

    if (visitedProperties) {
        for (let i = 0; i < visitedProperties.length; i++) {
            if (visitedProperties[i] === propertyId) {
                return;
            }
        }
        visitedProperties.push(propertyId);
        localStorage.setItem('visitedProperties', JSON.stringify(visitedProperties));

    } else {
        localStorage.setItem('visitedProperties', JSON.stringify([propertyId]));
    }

}