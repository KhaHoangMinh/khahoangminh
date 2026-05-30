export const apiClient = {
    async post(url, data, options = {}) {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json', ...options.headers 
            },
            body: JSON.stringify(data),
        });
        return response.json();
    },

    async get(url, options = {}) {
        const response = await fetch(url, options);
        return response.json();
    },
};