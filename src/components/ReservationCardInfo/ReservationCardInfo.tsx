import { View, Text, TouchableOpacity } from 'react-native';
import { FC } from 'react';
import { split } from '../../utils/strings';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export type Props = {
    reservation: any;
    onPress?: () => void;
    isToDay?: boolean;
};

const ReservationCardInfo: FC<Props> = ({ reservation, isToDay }) => {
    const navigation = useNavigation();
    const { startAt } = reservation;
    const date = new Date();

    const day: any = {
        1: 'Lunes',
        2: 'Martes',
        3: 'Miercoles',
        4: 'Jueves',
        5: 'Viernes',
        6: 'Sabado',
        0: 'Domingo',
    };

    const month: any = {
        0: 'Enero',
        1: 'Febrero',
        2: 'Marzo',
        3: 'Abril',
        4: 'Mayo',
        5: 'Junio',
        6: 'Julio',
        7: 'Agosto',
        8: 'Septiembre',
        9: 'Octubre',
        10: 'Noviembre',
        11: 'Diciembre',
    };
    const isDayReservation = new Date(startAt).getDay();
    const isMonthReservation = split(startAt).slice(3, 5) - 1;
    const isDay = day[isDayReservation];
    const isMonth = month[isMonthReservation];

    return (
        <View style={styles.container}>
            <View style={styles.wrapText}>
                <View>
                    <Text style={styles.dayText}>
                        {isDay} {split(startAt).slice(0, 2)}
                    </Text>
                    <Text style={styles.monthText}>
                        {isMonth} {split(startAt).slice(6, 10)}
                    </Text>
                </View>
                {reservation.status === 'PENDING' && isToDay && (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('QRCode')}
                        style={styles.touchCheckIn}
                    >
                        <Text style={styles.textCheckIn}>Check-In</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};
export default ReservationCardInfo;
