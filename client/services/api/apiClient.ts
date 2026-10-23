export interface FetchError extends Error {
    status?: number;
    data?: any;
}

export const apiClient = {
    async post<T = unknown>(url: string, data: unknown, options: RequestInit = {}): Promise<T> {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json', 
                ...options.headers 
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            const error = new Error("API Error") as FetchError;
            error.status = response.status;
            error.data = errorData;
            throw error;
        }
        return (await response.json()) as T;
    },

    async get<T = unknown>(url: string, options: RequestInit = {}): Promise<T> {
        const response = await fetch(url, options);

        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            const error = new Error("API Error") as FetchError;
            error.status = response.status;
            error.data = errorData;
            throw error;
        }

        return (await response.json()) as T;
    },
};