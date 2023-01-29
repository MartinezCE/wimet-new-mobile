import Toast from 'react-native-root-toast';
import { useMutation, useQueryClient } from 'react-query';
import { api } from '../api';
import { GET_USER_WPM_RESERVATIONS } from './useGetMyWPMReservations';

export const PUT_CANCEL = 'PUT_CANCEL';

export const cancelReservation = async (id: string) => {
    try {
        await api.put(`checkin/${id}/cancel`);
    } catch (e) {
        console.error(e)
    }
};

const useCancelReservation = () => {
    const queryClient = useQueryClient();

    return useMutation(
        (reservationId: string) => cancelReservation(reservationId),
        {
            onSuccess: async () => {
                await queryClient.invalidateQueries([
                    GET_USER_WPM_RESERVATIONS,
                ]);
                Toast.show('Se cancelo correctamente la reserva.');
            },
        }
    );
};
export default useCancelReservation;
