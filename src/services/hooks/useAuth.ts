import { api, User } from '../api';

export type LoginUserPayload = {
    email: string;
    password: string;
};

export const useLogin = async (payload: LoginUserPayload) => {
    try {
        const { data: user, headers } = await api.post(
            'auth/sign-in/token',
            payload,
            {
                withCredentials: false,
            }
        );
        return user;
    } catch (e: any) {
        throw new Error(e.message);
    }
};

export const useGoogleLogin = async () => {
    try {
        const res = await api.get<User>('auth/google');
        return res.data;
    } catch (e: any) {
        throw new Error(e.message);
    }
};

export const useLogOut = async () => {
    try {
        const { data: user } = await api.post('auth/sign-out');
        return user;
    } catch (e: any) {
        throw new Error(e.message);
    }
};
