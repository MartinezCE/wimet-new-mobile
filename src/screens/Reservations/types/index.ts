import { ReservationType } from '../../../services/api';

export type SelectedReservationPayload = {
    locationName: string;
    floor: string;
    date: string;
    hour: string;
};

export type ReservationFormData = {
    blueprintId: string | number;
    blueprintName: string;
    floorNumber: number;
    spaceType: ReservationType;
    startAt: Date;
    endAt?: Date;
    typeId?: number;
};
