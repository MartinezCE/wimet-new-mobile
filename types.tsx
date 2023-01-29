import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
    CompositeScreenProps,
    NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ReservationType } from './src/services/api';

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

export type RootStackParamList = {
    Root: NavigatorScreenParams<RootTabParamList> | undefined;
    Modal: undefined;
    NotFound: undefined;
    EmailLogin: NavigatorScreenParams<RootTabParamList> | undefined;
    Home: NavigatorScreenParams<RootTabParamList> | undefined;
    Booking: NavigatorScreenParams<RootTabParamList> | undefined;
    More: NavigatorScreenParams<RootTabParamList> | undefined;
    QRCode: NavigatorScreenParams<RootTabParamList> | undefined;
    EmptyView: NavigatorScreenParams<RootTabParamList> | undefined;
    HomeInit: NavigatorScreenParams<RootTabParamList> | undefined;
    Main: NavigatorScreenParams<RootTabParamList> | undefined;
    AddReservation: { reservationType: ReservationType } | undefined;
    SelectSeat: NavigatorScreenParams<RootTabParamList> | undefined;
    PreConfirmedReservation:
        | NavigatorScreenParams<RootTabParamList>
        | undefined;
    ConfirmedReservation: { idReservation: number } | undefined;
    HomeScreen: NavigatorScreenParams<RootTabParamList> | undefined;
    HomeStack: NavigatorScreenParams<RootTabParamList> | undefined;
    CancelReservation: { idReservation: number } | undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
    Home: undefined;
    QRCode: undefined;
    More: undefined;
    Booking: undefined;
    EmptyView: undefined;
    Reservations: undefined;
    EmailLogin: undefined;
    AddReservation: undefined;
    HomeInit: undefined;
    HomeStack: undefined;
    CancelReservation: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<RootTabParamList, Screen>,
        NativeStackScreenProps<RootStackParamList>
    >;
