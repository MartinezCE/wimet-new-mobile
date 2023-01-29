import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types";
import Booking from "../../screens/Booking/Booking";
import CancelReservation from "../../screens/CancelReservation/CancelReservation";
import AddReservation from "../../screens/Reservations/AddReservation";
import ConfirmedReservation from "../../screens/Reservations/ConfirmedReservation";
import SelectSeat from "../../screens/Reservations/SelectSeat";

const StackBooking = createNativeStackNavigator<RootStackParamList>();

export function BookingNavigator() {
    return (
        <StackBooking.Navigator initialRouteName="Booking">
            <StackBooking.Screen
                name="Booking"
                component={Booking}
                options={{ headerShown: false }}
            />

            <StackBooking.Screen
                name="AddReservation"
                component={AddReservation}
                options={{ headerShown: false }}
            />
            <StackBooking.Screen
                name="SelectSeat"
                component={SelectSeat}
                options={{ headerShown: false }}
            />
            <StackBooking.Screen
                name="ConfirmedReservation"
                component={ConfirmedReservation}
                options={{ headerShown: false }}
            />
            <StackBooking.Screen
                name="CancelReservation"
                component={CancelReservation}
                options={{ headerShown: false }}
            />
        </StackBooking.Navigator>
    );
}
