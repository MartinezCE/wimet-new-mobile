import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Google from 'expo-auth-session/providers/google';
import { createContext, ReactNode, useEffect, useState } from 'react';
import {
    WORK_SPACES_API,
    GOOGLE_WEB_CLIENT_ID,
    GOOGLE_IOS_CLIENT_ID,
    GOOGLE_ANDROID_CLIENT_ID,
} from '@env';
import { api } from '../services/api';
import { useLogin, useLogOut } from '../services/hooks/useAuth';

export const AuthContext = createContext<any>({});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState<string | null>(null);
    const [error, setError] = useState(false);

    const [_request, response, promptAsync] = Google.useIdTokenAuthRequest({
        clientId: GOOGLE_WEB_CLIENT_ID,
        iosClientId: GOOGLE_IOS_CLIENT_ID,
        androidClientId: GOOGLE_ANDROID_CLIENT_ID,
    });

    const handleConfigToken = async (token: string) => {
        try {
            setIsLoading(true);
            await AsyncStorage.setItem('userToken', token);
            api.defaults.headers.common['Authorization'] = token;
            setUserToken(token);
            setIsLoading(false);
        } catch (e) {
            console.error(e);
        }
    };

    const login = async ({
        email,
        password,
    }: {
        email: string;
        password: string;
    }) => {
        try {
            setError(false);
            const res = await useLogin({ email, password });
            await handleConfigToken(res.token);
        } catch (e) {
            setError(true);
        }
    };

    const socialSignIn = async (token: string) => {
        try {
            setError(false);
            const body = { token, provider: 'google' };
            const res = await api.post(
                `${WORK_SPACES_API}/auth/sign-in/social`,
                body
            );
            await handleConfigToken(res.data.token);
        } catch (error) {
            setError(true);
        }
    };

    useEffect(() => {
        if (response?.type === 'success') {
            const token = response?.authentication?.accessToken;
            if (token) {
                socialSignIn(token);
            }
        }
    }, [response]);

    const logout = async () => {
        try {
            setIsLoading(true);
            await AsyncStorage.clear();
            await useLogOut();
            setUserToken(null);
            setIsLoading(false);
        } catch (e) {
            setIsLoading(false);
            console.error('Error login out', e);
        }
    };

    const isLoggedIn = async () => {
        try {
            setIsLoading(true);
            const userToken = await AsyncStorage.getItem('userToken');

            if (userToken) {
                api.defaults.headers.common['Authorization'] = userToken;
                setUserToken(userToken);
            } else {
                setUserToken(null);
            }

            setIsLoading(false);
        } catch (e) {
            console.error('Error login', e);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        isLoggedIn();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isLoading,
                userToken,
                login,
                logout,
                error,
                loginCredentials: promptAsync,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
