import api from '../config/api';

/**
 * Global HTTP client helper matching the Tier 3 infrastructure specification.
 * Seamlessly unpacks Axios streams and formats error context uniformly.
 */
export const httpHelper = {
    get: async (url, config = {}) => {
        try {
            const response = await api.get(url, config);
            return response.data;
        } catch (error) {
            throw httpHelper.formatError(error);
        }
    },

    post: async (url, data, config = {}) => {
        try {
            const response = await api.post(url, data, config);
            // Returns raw response if headers or dynamic types are requested
            if (config.responseType === 'blob' || config.returnFullResponse) {
                return response;
            }
            return response.data;
        } catch (error) {
            throw httpHelper.formatError(error);
        }
    },

    formatError: (error) => {
        // Matching the backend API error schema
        return {
            error: error.response?.data?.error || "Connection Error",
            message: error.response?.data?.message || "An unexpected error occurred over network streams.",
            cause: error.response?.data?.cause || error.message,
            status: error.response?.status || 500
        };
    }
};