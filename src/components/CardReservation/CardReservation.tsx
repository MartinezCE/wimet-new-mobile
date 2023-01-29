import {  Text, TouchableOpacity, Image } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { FC } from 'react';
import styles from './styles';
import { split } from '../../utils/strings';
import { useNavigation } from '@react-navigation/native';
import { View, } from 'dripsy';
const desk = require('../../../assets/images/desk-white.png');
const parking = require('../../../assets/images/parking-white.png');
const meetingroom = require('../../../assets/images/meetingroom-white.png');
const privateOffice = require('../../../assets/images/private-office-white.png');

export type Props = {
    reservation: any;
    onPress?: () => void;
    isToDay?: boolean;
    idReservation: number;
};

export const CardReservation: FC<Props> = ({
    reservation,
    isToDay,
    idReservation,
}) => {
    const navigation = useNavigation();
    const { startAt, seat } = reservation;
    const { name, spaceTypeId, blueprint } = seat;
    const { floor } = blueprint;
    const img: any = {
        1: desk,
        4: parking,
        2: meetingroom,
        3: privateOffice,
    };
    const src = img[spaceTypeId];

    return (
        <View
            style={styles.container}
            sx={{
                width: [null, null, '90%'],
                height: [null, null, '100%'],
            }}
        >
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('CancelReservation', {
                        idReservation,
                    });
                }}
                style={styles.touchCard}
            >
                <View style={styles.containerImgTex}>
                    <View style={styles.containerImg}>
                        <Image source={src} style={styles.img} />
                    </View>
                    <View style={{ marginLeft: 13 }}>
                        <Text style={styles.date}>{split(startAt)}</Text>
                        <Text style={styles.title}>{floor.location.name}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.touchLocation}>
                    <EvilIcons name="location" size={30} color={'#175cff'} />
                    <Text style={styles.textLocation}>{name}</Text>
                </TouchableOpacity>
            </TouchableOpacity>
            {reservation.status === 'PENDING' && isToDay && (
                <TouchableOpacity
                    onPress={() => navigation.navigate('QRCode')}
                    style={styles.touchCheckIn}
                >
                    <Text style={styles.textCheckIn}>Check-In</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};
