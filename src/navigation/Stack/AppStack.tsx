import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types';
import CancelReservation from '../../screens/CancelReservation/CancelReservation';
import AddReservation from '../../screens/Reservations/AddReservation/AddReresvation';
import ConfirmedReservation from '../../screens/Reservations/ConfirmedReservation/ConfirmedReservation';
import PreConfirmedReservation from '../../screens/Reservations/PreConfirmedReservation/PreConfirmedReservation';
import SelectSeat from '../../screens/Reservations/SelectSeat/SelectSeat';
import BottomTabNavigator from '../BottomTab/BottomTab';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="AddReservation"
                component={AddReservation}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SelectSeat"
                component={SelectSeat}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="PreConfirmedReservation"
                component={PreConfirmedReservation}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ConfirmedReservation"
                component={ConfirmedReservation}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CancelReservation"
                component={CancelReservation}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
