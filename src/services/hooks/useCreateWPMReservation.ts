import { useMutation, useQueryClient } from 'react-query';
import Toast from 'react-native-root-toast';
import { api, AxiosError, SpaceTypeEnum, WPMReservation } from '../api';
import { GET_USER_WPM_RESERVATIONS } from './useGetMyWPMReservations';

export type WPMReservationPayload = {
    seatId: number;
    startAt: Date;
    endAt?: Date;
    metadata: {
        seatName: string;
        blueprintName: string;
        floorNumber: number;
        spaceType?: SpaceTypeEnum;
    };
};

export type CreateWPMReservationPayload = {
    blueprintId: string | number;
    reservations: WPMReservationPayload[];
};

export const createWPMReservations = async (
    payload?: CreateWPMReservationPayload
) => {
    try {
        const { data: reservation } = await api.post<WPMReservation[]>(
            '/seat-reservations',
            payload
        );
        return reservation;
    } catch (e: any) {
        throw new Error(e.message);
    }
};

const useCreateWPMReservations = () => {
    const queryClient = useQueryClient();

    return useMutation(createWPMReservations, {
        onSuccess: async () =>
            await queryClient.invalidateQueries(GET_USER_WPM_RESERVATIONS),
        onError: (error: AxiosError) => {
            Toast.show(error.message, {
                duration: Toast.durations.LONG,
                position: Toast.positions.CENTER,
                shadow: false,
                animation: true,
                opacity: 0.9,
                textStyle: {
                    fontSize: 18,
                },
            });
        },
    });
};

export default useCreateWPMReservations;
