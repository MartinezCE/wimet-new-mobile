import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Text, View, SafeAreaView } from 'react-native';
import { RootStackParamList } from '../../../types';
import ReservationCardInfo from '../../components/ReservationCardInfo/ReservationCardInfo';
import useGetMyWPMReservations from '../../services/hooks/useGetMyWPMReservations';
import IconClosed from '../../components/IconClosed/IconClosed';
import styles from './styles';
import TextWithIcon from '../../components/TextWithIcon';
import Button from '../../components/Button/Button';
import useCancelReservation from '../../services/hooks/useCancelReservation';
import { customAlert } from '../../utils/customAlert';
import { WPMReservationTypeLabels } from '../../utils/config';
import { WPMReservationTypes } from '../../services/api';
import { isEqualToday } from '../../utils/helpers';

type AddReservationRouteParams = RouteProp<
    RootStackParamList,
    'CancelReservation'
>;

export default function CancelReservation() {
    const { data: reservationsList = [] } = useGetMyWPMReservations();
    const navigation = useNavigation();
    const route = useRoute<AddReservationRouteParams>();
    const { mutateAsync } = useCancelReservation();
    const id = route.params;

    const cancelReservation = async (id: string) => {
        await mutateAsync(id);
        navigation.navigate('Main');
    };

    const reservationDetail = reservationsList.find(
        (r: any) => r.id === id?.idReservation
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <IconClosed onPress={navigation.goBack} size={40} />
            <Text style={styles.title}>Tienes una reserva confirmada </Text>
            <View style={styles.containerInfo}>
                <View style={styles.containerCard}>
                    <ReservationCardInfo
                        key={Math.random()}
                        reservation={reservationDetail}
                        isToDay={isEqualToday(
                            new Date(reservationDetail?.startAt)
                        )}
                    />
                </View>
                <View
                    style={{
                        paddingHorizontal: 34,
                        marginTop: 48,
                        height: 400,
                        width: '100%',
                    }}
                >
                    <TextWithIcon
                        title="Duración:"
                        text={
                            WPMReservationTypeLabels[
                                reservationDetail?.WPMReservationType
                                    .name as WPMReservationTypes
                            ]
                        }
                        iconName="calendar"
                        theme="primary"
                    />
                    <TextWithIcon
                        title="Posición:"
                        text={reservationDetail?.seat.name}
                        iconName="target"
                        style={styles.textIcon}
                        theme="primary"
                    />
                    <TextWithIcon
                        title="Planta:"
                        text={reservationDetail?.seat.blueprint.floor.number}
                        iconName="align-justify"
                        style={styles.textIcon}
                        theme="primary"
                    />
                    <TextWithIcon
                        title="Dirección:"
                        text={
                            reservationDetail?.seat.blueprint.floor.location.address.split(
                                ','
                            )[0]
                        }
                        iconName="map-pin"
                        style={styles.textIcon}
                        theme="primary"
                    />
                    <TextWithIcon
                        title="Locación:"
                        text={
                            reservationDetail?.seat.blueprint.floor.location
                                .name
                        }
                        iconName="map"
                        style={styles.textIcon}
                        theme="primary"
                    />
                </View>

                <View style={styles.button}>
                    <Button
                        text="Cancelar reserva"
                        theme="tertiary"
                        type="danger"
                        onPress={() =>
                            customAlert({
                                title: 'Cancelar reserva',
                                msg: 'Esta seguro que desea cancelar la reserva?',
                                options: [
                                    {
                                        text: 'No',
                                        style: 'cancel',
                                    },
                                    {
                                        text: 'Si',
                                        onPress: async () => {
                                            await cancelReservation(
                                                reservationDetail.id
                                            );
                                        },
                                        style: 'destructive',
                                    },
                                ],
                            })
                        }
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}
