import { ReservationType, WPMReservationTypes } from '../services/api';

export const WPMReservationTypeLabels = {
    [WPMReservationTypes.DAYPASS]: 'DayPass',
    [WPMReservationTypes.MORNING]: 'Mañana',
    [WPMReservationTypes.AFTERNOON]: 'Tarde',
    [WPMReservationTypes.CUSTOM]: 'Personalizado',
};

export const reservationTypeTitle = {
    [ReservationType['SHARED']]: 'Escritorios',
    [ReservationType['MEETING_ROOM']]: 'sala de reunión',
    [ReservationType['PRIVATE_OFFICE']]: 'oficina privada',
    [ReservationType['PARKING']]: 'estacionamiento',
};
