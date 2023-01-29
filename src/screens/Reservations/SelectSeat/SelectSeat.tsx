import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView, TouchableOpacity, View, Text } from 'react-native';
import WebView from 'react-native-webview';
import styles from './styles';
import React from 'react';
import { getSelectSeatMapUrl } from '../helpers';
import { BookingContext } from '../../../contexts/BookingContext';
import { BookingContextType } from '../../../contexts/types';
import TextWithIcon from '../../../components/TextWithIcon';
import { AuthContext } from '../../../contexts/AuthContext';

const SelectSeat = () => {
    const {
        bookingType,
        selectedDate,
        selectedLocation,
        selectedFloor,
        currentBlueprint,
        marker,
        setMarker,
    } = useContext(BookingContext) as BookingContextType;

    const { userToken } = useContext(AuthContext);

    const navigation = useNavigation();

    const onGoBack = () => {
        navigation.navigate('AddReservation');
    };

    const checkinMapUrl = getSelectSeatMapUrl({
        locationId: selectedLocation?.value as string,
        floorId: selectedFloor?.value as string,
        blueprintId: currentBlueprint.id.toString(),
        reservationType: bookingType,
        selectedDate: selectedDate.toISOString(),
    });

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
                <Text style={styles.title}>Elige una posición</Text>
            </View>

            <TextWithIcon
                title="Planta:"
                text={selectedFloor.number.toString()}
                iconName="target"
                style={styles.position}
            />
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: 692,
                }}
            >
                <ScrollView style={styles.webViewContainer}>
                    <WebView
                        javaScriptEnabled
                        domStorageEnabled
                        thirdPartyCookiesEnabled
                        startInLoadingState={true}
                        source={{
                            uri: checkinMapUrl,
                            headers: {
                                Authorization: userToken,
                            },
                        }}
                        userAgent="Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko"
                        onMessage={(event) => {
                            const { data } = event.nativeEvent;
                            setMarker(JSON.parse(data));
                        }}
                        style={styles.webView}
                    />
                </ScrollView>

                <TouchableOpacity
                    style={[
                        styles.confirmButtonContainer,
                        !marker && { opacity: 0.5 },
                    ]}
                    activeOpacity={0.6}
                    disabled={!marker}
                    onPress={async () => {
                        navigation.navigate('PreConfirmedReservation');
                    }}
                >
                    <View style={styles.iconMarkerContainer}>
                        <Text style={styles.confirmtButtonText}>Siguiente</Text>
                    </View>
                    <Ionicons
                        name="arrow-forward-circle-sharp"
                        size={52}
                        style={styles.whiteIcon}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
export default SelectSeat;
