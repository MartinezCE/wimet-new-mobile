import { View, Text, ScrollView, SafeAreaView, Pressable } from 'react-native';
import { WPMReservation } from '../../services/api/types';
import useGetMyWPMReservations from '../../services/hooks/useGetMyWPMReservations';
import { useState } from 'react';
import { CardReservation } from '../../components/CardReservation/CardReservation';
import styles from './styles';
import {
    isBeforeToday,
    isEqualToday,
    orderReservationsByDate,
} from '../../utils/helpers';
import EmptyState from '../../components/EmptyState';

type Tabs = 'active-reservations' | 'passed-reservations';

export default function Booking() {
    const [activeTab, setActiveTab] = useState<Tabs>('active-reservations');

    const handleActiveTab = (tab: Tabs) => setActiveTab(tab);

    const { data: allReservations = [] } = useGetMyWPMReservations();

    const passedReservations = allReservations.filter((r: WPMReservation) =>
        isBeforeToday(new Date(r.startAt))
    );

    const activeReservations = allReservations
        .filter(
            (r: any) =>
                r.status === 'PENDING' && !isBeforeToday(new Date(r.startAt))
        )
        .map((r: any) => ({
            ...r,
            isToday: isEqualToday(new Date(r.startAt)),
        }));

    const toggledReservationsList =
        activeTab === 'active-reservations'
            ? activeReservations
            : passedReservations;

    return (
        <SafeAreaView style={styles.safeArea}>
            <Text style={styles.title}>Reservas</Text>
            <View style={styles.tabContainer}>
                <Pressable
                    onPress={() => handleActiveTab('active-reservations')}
                    style={[
                        styles.tabWrapper,
                        activeTab !== 'active-reservations' &&
                            styles.inactiveTab,
                    ]}
                >
                    <Text
                        style={styles.buttonText}
                    >{`Próximas (${activeReservations.length})`}</Text>
                </Pressable>
                <Pressable
                    onPress={() => handleActiveTab('passed-reservations')}
                    style={[
                        styles.tabWrapper,
                        activeTab !== 'passed-reservations' &&
                            styles.inactiveTab,
                    ]}
                >
                    <Text style={styles.buttonText}>Pasadas</Text>
                </Pressable>
            </View>
            <View style={styles.container}>
                <View style={styles.cardNextReservation}>
                    <ScrollView
                        style={styles.reservationsScrollView}
                        showsVerticalScrollIndicator={false}
                    >
                        {!!toggledReservationsList.length ? (
                            <View style={styles.reservationsContainer}>
                                {orderReservationsByDate(
                                    toggledReservationsList,
                                    'asc'
                                ).map((reservation: any) => (
                                    <CardReservation
                                        key={Math.random()}
                                        reservation={reservation}
                                        isToDay={reservation?.isToday}
                                        idReservation={reservation.id}
                                    />
                                ))}
                            </View>
                        ) : (
                            <EmptyState text="Sin Reservas por el momento 🫣" />
                        )}
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
}
