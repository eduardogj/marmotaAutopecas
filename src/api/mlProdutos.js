const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

async function getProducts() {
    const apiUrl = API_URL;

    const headers = {
        Authorization: API_KEY,
    };

    try {
        const response = await fetch(apiUrl, {headers})
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json()
        return data

    } catch (error) {
        console.error('Error:', error);
    }

}

export {getProducts};
