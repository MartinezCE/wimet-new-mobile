import { useQuery } from 'react-query';
import { api, WPMReservationType, WPMReservationTypes } from '../api';
import { WPMReservationTypeLabels } from '../../utils/config';

export const GET_WPM_RESERVATION_TYPES = 'GET_WPM_RESERVATION_TYPES';

export const getWPMReservationTypes = async () => {
    try {
        const { data: reservationTypes } = await api.get<WPMReservationType[]>(
            '/seat-reservations/types'
        );

        return reservationTypes;
    } catch (e: any) {
        throw new Error(e.message);
    }
};

const useGetWPMReservationTypes = (queryOptions?: any) =>
    useQuery(GET_WPM_RESERVATION_TYPES, getWPMReservationTypes, {
        select: (types) =>
            types
                .filter((t) => t.name !== WPMReservationTypes.CUSTOM)
                .map(({ id, name }) => ({
                    value: id,
                    label: WPMReservationTypeLabels[name],
                })),
        ...queryOptions,
    });

export default useGetWPMReservationTypes;
