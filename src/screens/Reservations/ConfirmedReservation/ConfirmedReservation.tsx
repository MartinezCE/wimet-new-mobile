import { SafeAreaView, Text, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import Button from '../../../components/Button';
import styles from './styles';
import { RootStackParamList } from '../../../../types';

type AddReservationRouteParams = RouteProp<
    RootStackParamList,
    'ConfirmedReservation'
>;

const ConfirmedReservation = () => {
    const navigation = useNavigation();
    const route = useRoute<AddReservationRouteParams>();

    return (
        <SafeAreaView style={styles.safeView}>
            <View style={styles.container}>
                <View
                    style={{ alignItems: 'center', justifyContent: 'center' }}
                >
                    <View style={styles.iconBackground}>
                        <View style={styles.checkIconContainer}>
                            <Feather name="check" style={styles.checkIcon} />
                        </View>
                    </View>
                </View>

                <Text style={styles.title}>¡Reserva confirmada!</Text>
                <Text style={styles.text}>
                    El detalle de esta y todas las reservas puedes encontrarlo
                    en el tab de “Reservas”
                </Text>
                <View style={styles.buttonContainer}>
                    <Button
                        text="Salir"
                        theme="primary"
                        onPress={() => navigation.navigate('HomeInit')}
                        fullWidth
                    />
                    <Button
                        text="Ver reserva"
                        theme="tertiary"
                        onPress={() =>
                            navigation.navigate('CancelReservation', {
                                idReservation: route?.params
                                    ?.idReservation as number,
                            })
                        }
                        fullWidth
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ConfirmedReservation;
