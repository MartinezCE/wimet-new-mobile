import { Pressable, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import { customAlert } from '../../utils/customAlert';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export default function More() {
    const { logout } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Pressable
                style={styles.button}
                onPress={() =>
                    customAlert({
                        title: 'Cerrar sesion',
                        msg: '¿Está seguro que desea desea cerrar sesión?',
                        options: [
                            {
                                text: 'Cancelar',
                                style: 'cancel',
                            },
                            {
                                text: 'Confirmar',
                                onPress: logout,
                                style: 'destructive',
                            },
                        ],
                    })
                }
            >
                <AntDesign
                    name="logout"
                    size={24}
                    color="grey"
                    style={styles.icon}
                />
                <Text style={styles.title}>Cerrar sesión</Text>
            </Pressable>
        </View>
    );
}
