import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TextWithIcon from '../../../components/TextWithIcon';
import { BookingContextType } from '../../../contexts/types';
import Button from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { BookingContext } from '../../../contexts/BookingContext';
import { useContext } from 'react';
import { format } from 'date-fns';
import useAllLocations from '../../../services/hooks/useLocations';
import useCreateWPMReservations from '../../../services/hooks/useCreateWPMReservation';
import { SpaceTypeEnum } from '../../../services/api';

const PreConfirmedReservation = () => {
    const navigation = useNavigation();
    const {
        bookingType,
        selectedDate,
        selectedFinishHour,
        selectedLocation,
        selectedFloor,
        selectedDuration,
        currentBlueprint,
        marker,
    } = useContext(BookingContext) as BookingContextType;

    const { data: allLocations = [] } = useAllLocations();
    const { mutateAsync } = useCreateWPMReservations();
    const [address, state] =
        allLocations
            .find((item) => item.id == selectedLocation.value)
            ?.address?.split(',') || [];

    const onGoBack = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.header}>
                <TouchableOpacity onPress={onGoBack}>
                    <Ionicons name="arrow-back-outline" size={32} />
                </TouchableOpacity>
                <Text style={styles.title}>Detalle de reserva</Text>
            </View>

            <View style={styles.container}>
                <TextWithIcon
                    title="Fecha:"
                    text={format(selectedDate, 'dd MMMM yyyy')}
                    iconName="calendar"
                    style={styles.text}
                    theme="secondary"
                />
                <TextWithIcon
                    title="Duración:"
                    text={selectedDuration.label}
                    iconName="clock"
                    style={styles.text}
                    theme="secondary"
                />
                <TextWithIcon
                    title="Posición:"
                    text={marker.seatName}
                    iconName="target"
                    style={styles.text}
                    theme="secondary"
                />
                <TextWithIcon
                    title="Planta:"
                    text={selectedFloor.label}
                    iconName="align-justify"
                    style={styles.text}
                    theme="secondary"
                />
                <TextWithIcon
                    title="Dirección:"
                    text={`${address}, ${state}`}
                    iconName="map-pin"
                    style={styles.text}
                    theme="secondary"
                />
                <TextWithIcon
                    title="Locación:"
                    text={selectedLocation.label}
                    iconName="map"
                    style={styles.text}
                    theme="secondary"
                />
                <View style={styles.buttonContainer}>
                    <Button
                        text="Confirmar reserva"
                        theme="primary"
                        onPress={async () => {
                            try {
                                const [reservation] = await mutateAsync({
                                    blueprintId: currentBlueprint.id,
                                    reservations: [
                                        {
                                            startAt: selectedDate,
                                            seatId: marker?.id as number,
                                            ...(selectedFinishHour && {
                                                endAt: selectedFinishHour.value as Date,
                                            }),
                                            ...(selectedDuration && {
                                                typeId: selectedDuration.value,
                                            }),
                                            metadata: {
                                                seatName:
                                                    marker?.seatName as string,
                                                blueprintName:
                                                    currentBlueprint.name,
                                                floorNumber: Number(
                                                    selectedFloor.value
                                                ),
                                                spaceType:
                                                    bookingType as unknown as SpaceTypeEnum,
                                            },
                                        },
                                    ],
                                });

                                navigation.navigate('ConfirmedReservation', {
                                    idReservation: reservation.id,
                                });
                            } catch (e) {
                                console.log(e, 'ERROR');
                            }
                        }}
                        fullWidth
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default PreConfirmedReservation;
