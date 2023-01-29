import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FC } from 'react';

export type Props = {
    onPress: () => void;
    size:number;
};

const IconClosed: FC<Props> = ({ onPress,size }) => {
    return (
        <Pressable
            onPress={() => {
                onPress();
            }}
        >
            <Ionicons
                name="ios-close-outline"
                size={size}
                color="grey"
                style={{ position: 'absolute', right: 0 }}
            />
        </Pressable>
    );
};

export default IconClosed