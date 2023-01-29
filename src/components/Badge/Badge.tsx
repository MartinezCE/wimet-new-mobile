import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';
import styles from './styles';

export type BadgeProps = {
    text: string;
    selected?: boolean;
    onPress?: () => void;
    style?: any;
};

const Badge = ({ text, selected, onPress, style }: BadgeProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={onPress}
            style={[styles(selected).container, style]}
        >
            <Text style={styles().text}>{text}</Text>
        </TouchableOpacity>
    );
};

export default Badge;
