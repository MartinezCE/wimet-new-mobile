import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types';
import EmailLogin from '../../screens/Login/EmailLogin';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AuthStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Root"
                component={EmailLogin}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
