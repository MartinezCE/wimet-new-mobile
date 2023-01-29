import { ScrollView } from 'react-native';
import useGetMe from '../../services/hooks/useGetMe';
import styles from './styles';
//import { SafeAreaView } from 'react-native-safe-area-context';
import { CardReservation } from '../../components/CardReservation/CardReservation';
import { FontAwesome5 } from '@expo/vector-icons';
import useGetMyWPMReservations from '../../services/hooks/useGetMyWPMReservations';
import {
    orderReservationsByDate,
    isBeforeToday,
    isEqualToday,
} from '../../utils/helpers';
import EmptyState from '../../components/EmptyState';
import { View, SafeAreaView, Text } from 'dripsy';
const UserRoleLabels = {
    ['ACCOUNT_MANAGER']: 'Account Manager',
    ['MEMBER']: 'Miembro',
    ['TEAM_MANAGER']: 'Team Manager',
};

const img = require('../../../assets/images/empty.png');

export default function Home() {
    const { data: user } = useGetMe();
    const { data: reservationsList = [] } = useGetMyWPMReservations();

    const filteredReservations = orderReservationsByDate(
        reservationsList,
        'asc'
    )
        .filter(
            (reservation: any) =>
                reservation.status === 'PENDING' &&
                !isBeforeToday(new Date(reservation.startAt))
        )
        .map((reservation: any) => ({
            ...reservation,
            isToday: isEqualToday(new Date(reservation.startAt)),
        }));

    return (
        <SafeAreaView
            //  edges={['bottom', 'left', 'right']}
            sx={{ height: ['100%', '100%', '100%'] }}
            style={{ flex: 1, backgroundColor: '#FFFFFF' }}
        >
            <Text style={styles.title}>{user?.companies[0].name}</Text>
            <View style={styles.container} sx={{ marginTop: ['2%', 29, '0%'] }}>
                <View
                    style={styles.cardContainer}
                    sx={{ width: ['95%', null, '95%'] }}
                >
                    <View style={styles.ImgCardContainer} sx={{}}>
                        <FontAwesome5
                            name="user"
                            size={28}
                            color="grey"
                            style={{ marginTop: 12, marginLeft: 16 }}
                        />
                    </View>
                    <Text style={styles.textCardUser}>
                        {user?.firstName} {user?.lastName}
                        {'\n'}
                        <Text style={styles.subTextCard}>
                            {user?.userRole?.value
                                ? UserRoleLabels[user?.userRole?.value]
                                : ''}
                        </Text>
                    </Text>
                </View>

                <View
                    style={styles.cardNextReservation}
                    sx={{
                        width: ['95%', '95%', '95%'],
                        height: ['82%', null, '90%'],
                    }}
                >
                    <Text style={styles.titleNextReservation}>
                        Tus próximas Reservas
                    </Text>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{ borderRadius: 4 }}
                    >
                        <View style={styles.noReservation}>
                            {!!filteredReservations.length ? (
                                filteredReservations
                                    .slice(0, 6)
                                    .map((reservation: any) => {
                                        return (
                                            <CardReservation
                                                key={reservation.id}
                                                reservation={reservation}
                                                isToDay={reservation.isToday}
                                                idReservation={reservation.id}
                                            />
                                        );
                                    })
                            ) : (
                                <EmptyState text="Sin Reservas por el momento 🫣" />
                            )}
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
}
