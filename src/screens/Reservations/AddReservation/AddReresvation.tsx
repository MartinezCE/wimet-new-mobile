import { useContext, useState } from 'react';
import { ReservationType } from '../../../services/api';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import {
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import InputSelectSkeleton from '../../../components/InputSelectSkeleton';
import DropdownSelect from '../../../components/DropdownSelect';
import Badge from '../../../components/Badge/Badge';
import styles, { DatePickerStyles, DatePickerStatus } from './styles';
import { BookingContext } from '../../../contexts/BookingContext';
import { BookingContextType } from '../../../contexts/types';
import { reservationTypeTitle } from '../../../utils/config';

const AddReservation = () => {
    const navigation = useNavigation();
    const [datePickerVisible, setDatePickerVisible] = useState<boolean>(false);
    const {
        bookingType,
        selectedDate,
        setSelectedDate,
        locationsList,
        selectedLocation,
        locationFloorList,
        selectedFloor,
        setSelectedFloor,
        handleSelectBuilding,
        selectedStartHour,
        setSelectedStartHour,
        selectedFinishHour,
        setSelectedFinishHour,
        selectedDuration,
        setSelectedDuration,
        reservavtionDurationTypes,
        timeSlots,
        enablePickPlace,
    } = useContext(BookingContext) as BookingContextType;

    const handleSelectDate = (date: Date) => {
        setSelectedDate(date);
        setDatePickerVisible(false);
    };

    const onGoBack = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={onGoBack}>
                    <Ionicons
                        style={styles.goBackIcon}
                        name="arrow-back-outline"
                        size={32}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>Reserva tu oficina</Text>
            </View>
            <Text style={styles.titleType}>
                {reservationTypeTitle[bookingType]}
            </Text>
            <View style={styles.separator} />
            <View style={styles.formContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.formLabel}>Fecha</Text>
                        <InputSelectSkeleton
                            onPress={() => setDatePickerVisible(true)}
                            isSelected={datePickerVisible}
                            label={
                                !selectedDate
                                    ? 'Seleccionar fecha'
                                    : format(selectedDate, 'dd/MM/yyyy')
                            }
                        >
                            <DateTimePickerModal
                                locale="es"
                                minimumDate={new Date()}
                                date={selectedDate}
                                isVisible={datePickerVisible}
                                mode="date"
                                onConfirm={handleSelectDate}
                                onCancel={() => setDatePickerVisible(false)}
                                pickerContainerStyleIOS={
                                    DatePickerStyles.container
                                }
                                accentColor={DatePickerStatus.primary}
                                buttonTextColorIOS={DatePickerStatus.primary}
                                confirmTextIOS="Confirmar"
                                customCancelButtonIOS={() => <></>}
                                {...(Platform.OS === 'ios' && {
                                    display: 'inline',
                                })}
                            />
                        </InputSelectSkeleton>
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.formLabel}>Edificio</Text>
                        <DropdownSelect
                            placeholder="Seleccionar edificio"
                            selected={selectedLocation}
                            onSelect={handleSelectBuilding}
                            data={locationsList}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.formLabel}>Piso</Text>
                        <DropdownSelect
                            disabled={!selectedLocation}
                            placeholder="Seleccionar piso"
                            selected={selectedFloor}
                            onSelect={(floor) => setSelectedFloor(floor)}
                            data={locationFloorList}
                        />
                    </View>
                    {bookingType === ReservationType.MEETING_ROOM ? (
                        <View style={styles.flexContainer}>
                            <View
                                style={
                                    (styles.inputContainer, { width: '48%' })
                                }
                            >
                                <Text style={styles.formLabel}>Desde</Text>
                                <DropdownSelect
                                    placeholder="Seleccionar hora de inicio"
                                    selected={selectedStartHour}
                                    onSelect={(hour) =>
                                        setSelectedStartHour(hour)
                                    }
                                    data={timeSlots}
                                    disabled={!selectedDate}
                                />
                            </View>

                            <View
                                style={
                                    (styles.inputContainer, { width: '48%' })
                                }
                            >
                                <Text style={styles.formLabel}>Hasta</Text>
                                <DropdownSelect
                                    placeholder="Seleccionar hora de fin"
                                    selected={selectedFinishHour}
                                    onSelect={(hour) =>
                                        setSelectedFinishHour(hour)
                                    }
                                    data={timeSlots}
                                    disabled={!selectedStartHour}
                                />
                            </View>
                        </View>
                    ) : (
                        <View style={styles.inputContainer}>
                            <Text style={styles.formLabel}>Duración</Text>
                            <View style={styles.timeOptions}>
                                <ScrollView
                                    scrollEnabled={!!selectedDate}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                >
                                    {reservavtionDurationTypes.map(
                                        (item, i) => (
                                            <Badge
                                                style={
                                                    i !==
                                                        reservavtionDurationTypes.length +
                                                            1 &&
                                                    styles.timpeOptionsItem
                                                }
                                                key={item.value}
                                                text={item.label}
                                                selected={
                                                    item.value ===
                                                    selectedDuration?.value
                                                }
                                                onPress={() =>
                                                    setSelectedDuration(item)
                                                }
                                            />
                                        )
                                    )}
                                </ScrollView>
                            </View>
                        </View>
                    )}
                    <TouchableOpacity
                        disabled={!enablePickPlace}
                        style={[
                            styles.pickPlaceButtonContainer,
                            !enablePickPlace && styles.pickPlaceButtonDisabled,
                        ]}
                        activeOpacity={0.6}
                        onPress={() => navigation.navigate('SelectSeat')}
                    >
                        <View style={styles.markerContainer}>
                            <Text style={styles.pickPlaceButtonText}>
                                Seleccionar
                            </Text>
                        </View>
                        <Ionicons
                            name="arrow-forward-circle-sharp"
                            size={52}
                            style={styles.blueIcon}
                        />
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};
export default AddReservation;
