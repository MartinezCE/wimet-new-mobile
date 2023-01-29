import { NavigationContainer } from '@react-navigation/native';
import { useContext } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthContext } from '../contexts/AuthContext';
import { BookingProvider } from '../contexts/BookingContext';

import { AppStack } from './Stack/AppStack';
import { AuthStack } from './Stack/AuthStack';

const queryClient = new QueryClient();

const AppNav = () => {
    const { isLoading, userToken } = useContext(AuthContext);

    if (isLoading) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <NavigationContainer>
            {userToken !== null ? (
                <QueryClientProvider client={queryClient}>
                    <BookingProvider>
                        <AppStack />
                    </BookingProvider>
                </QueryClientProvider>
            ) : (
                <AuthStack />
            )}
        </NavigationContainer>
    );
};

export default AppNav;
