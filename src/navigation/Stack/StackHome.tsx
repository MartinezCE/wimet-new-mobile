import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types';
import Home from '../../screens/Home/Home';
import AddReservation from '../../screens/Reservations/AddReservation';
import ConfirmedReservation from '../../screens/Reservations/ConfirmedReservation';
import SelectSeat from '../../screens/Reservations/SelectSeat';

const StackHome = createNativeStackNavigator<RootStackParamList>();

export default function HomeNavigator() {
    return (
        <StackHome.Navigator initialRouteName="HomeScreen">
            <StackHome.Screen
                name="HomeStack"
                component={Home}
                options={{ headerShown: false }}
            />
            <StackHome.Screen
                name="AddReservation"
                component={AddReservation}
                options={{ headerShown: false }}
            />
            <StackHome.Screen
                name="SelectSeat"
                component={SelectSeat}
                options={{ headerShown: false }}
            />
            <StackHome.Screen
                name="ConfirmedReservation"
                component={ConfirmedReservation}
                options={{ headerShown: false }}
            />
        </StackHome.Navigator>
    );
}

