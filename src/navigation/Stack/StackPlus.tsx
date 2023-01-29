import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types";
import AddReservation from "../../screens/Reservations/AddReservation";
import ConfirmedReservation from "../../screens/Reservations/ConfirmedReservation";
import SelectSeat from "../../screens/Reservations/SelectSeat";

const StackPlus = createNativeStackNavigator<RootStackParamList>();

export function PlusNavigator() {
    return (
        <StackPlus.Navigator>
            <StackPlus.Screen
                name="AddReservation"
                component={AddReservation}
                options={{ headerShown: false }}
            />
            <StackPlus.Screen
                name="SelectSeat"
                component={SelectSeat}
                options={{ headerShown: false }}
            />
            <StackPlus.Screen
                name="ConfirmedReservation"
                component={ConfirmedReservation}
                options={{ headerShown: false }}
            />
        </StackPlus.Navigator>
    );
}
