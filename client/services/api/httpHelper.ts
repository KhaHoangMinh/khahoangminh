import { apiClient, FetchError} from '@/services/api/apiClient';

/**
 * Global HTTP client helper matching the Tier 3 infrastructure specification.
 * Seamlessly unpacks Axios streams and formats error context uniformly.
 */
export const httpHelper = {
    get: async <T>(url: string, config: RequestInit = {}): Promise<T> => {
        try {
            const response = await apiClient.get<T>(url, config);
            return response;
        } catch (error) {
            throw httpHelper.formatError(error as FetchError);
        }
    },

    post: async <T>(url: string, data: unknown, config: RequestInit & { responseType?: string; returnFullResponse?: boolean } = {}): Promise<T> => {
        try {
            if (config.responseType === 'blob' || config.returnFullResponse) {
                const rawResponse = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', ...config.headers },
                    body: JSON.stringify(data),
                });
                
                if (!rawResponse.ok) throw new Error("API Error");
                
                return rawResponse as unknown as T;
            }

            // Standard JSON request
            const response = await apiClient.post<T>(url, data, config);
            return response;
        } catch (error) {
            throw httpHelper.formatError(error as FetchError);
        }
    },

    formatError: (error: FetchError) => {
        // Matching the backend API error schema
        return {
            error: error.data?.error || "Connection Error",
            message: error.data?.message || "An unexpected error occurred over network streams.",
            cause: error.data?.cause || error.message,
            status: error.status || 500
        };
    }
};