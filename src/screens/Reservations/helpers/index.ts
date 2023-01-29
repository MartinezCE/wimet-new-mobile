import { CLIENT_API } from '@env';
import { ReservationType } from '../../../services/api';

type SelectSeatUrlParams = {
    locationId: string;
    floorId: string;
    blueprintId: string;
    reservationType: ReservationType;
    selectedDate: Date | string;
};

export const getSelectSeatMapUrl = ({
    locationId,
    floorId,
    blueprintId,
    reservationType,
    selectedDate,
}: SelectSeatUrlParams) => {
    const url = `${CLIENT_API}/blueprint-reservations?locationId=${locationId}&floorId=${floorId}&blueprintId=${blueprintId}&filterMarkersBy=${reservationType}&date=${selectedDate}`;
    return url;
};
