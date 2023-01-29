import axios, { AxiosError, AxiosResponse } from 'axios';
import { WORK_SPACES_API } from '@env';

export type { AxiosError };

export const api = axios.create({
    baseURL: `${WORK_SPACES_API}` || '',
    withCredentials: true,
});

axios.defaults.headers.post['Content-Type'] = 'application/json';

api.interceptors.request.use((config) => {
    config.headers &&
        (config.headers['x-timezone'] =
            Intl.DateTimeFormat().resolvedOptions().timeZone);

    return config;
});

api.interceptors.response.use(
    (data) => data,
    (e) => {
        const { code, config, isAxiosError, message, name, request, response } =
            e as AxiosError;

        const { data } = (response || {}) as AxiosResponse;
        let newMessage = null;

        if (Array.isArray(data?.errors)) {
            newMessage = data.errors[0]?.msg || data.errors[0]?.message;
        } else {
            newMessage = data?.error || data?.message || data || message;
        }

        newMessage = newMessage || '¡Oh no! Ocurrió un error inesperado.';

        const newError = new Error(newMessage) as AxiosError;

        newError.code = code;
        newError.config = config;
        newError.isAxiosError = isAxiosError;
        newError.name = name;
        newError.request = request;
        newError.response = response;

        return Promise.reject(newError);
    }
);
