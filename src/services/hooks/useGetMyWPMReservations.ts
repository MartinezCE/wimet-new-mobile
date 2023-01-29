import { useQuery } from 'react-query';
import { api } from '../api';

export const GET_USER_WPM_RESERVATIONS = 'GET_USER_WPM_RESERVATIONS';

export const getMyWPMReservations = async () => {
    try {
        const { data: reservations } = await api.get(
            '/user/me/wpm-reservations'
        );
        return reservations;
    } catch (e: any) {
        console.log(e, 'getMyReservation')
        throw new Error(e.message);
    }
};

const useGetMyWPMReservations = () =>
    useQuery(GET_USER_WPM_RESERVATIONS, getMyWPMReservations);

export default useGetMyWPMReservations;
