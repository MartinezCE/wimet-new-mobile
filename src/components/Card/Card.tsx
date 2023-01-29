import { Ionicons } from '@expo/vector-icons';
import { FC } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import style from '../Card/styles';

export type Props = {
    date: string;
    name: string;
    hour: string;
    onPress: () => void;
};

const Card: FC<Props> = ({ date, name, hour, onPress }) => {
    return (
        <TouchableOpacity style={style.container} onPress={() => onPress()}>
            <View style={style.header}>
                <Ionicons name="push" size={35} />
                <View>
                    <Text>24/08/2022</Text>
                    <Text>Mariana Gamalero</Text>
                </View>
                <Text>08:51</Text>
                <Ionicons name="chevron-forward-outline" size={35} />
            </View>
            <View style={style.location}>
                <Ionicons name="location" size={35} />
                <Text>47,48,49,50</Text>
            </View>
            <View style={style.map}>
                <View style={style.bottom}>
                    <Ionicons name="map" size={35} />
                    <Text>Find on the map</Text>
                </View>

                <TouchableOpacity style={style.button}>
                    <Text>Check-in</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};
export default Card;
