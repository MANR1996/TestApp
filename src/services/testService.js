export const loadTest = () => {
    return fetch('src/mocks/test.json')
        .then(response => {
            if (!response.ok) {
                return {}
            }
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.log('Hubo un problema con la operación fetch: ' + error.message);
            return {}
        });
}