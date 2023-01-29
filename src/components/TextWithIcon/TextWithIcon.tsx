import { Feather } from '@expo/vector-icons';
import { View, Text, ViewProps } from 'react-native';
import styles from './styles';

export type TexhWhithIconProps = {
    title?: string;
    text: string;
    iconName: keyof typeof Feather.glyphMap;
    theme?: 'primary' | 'secondary';
    style?: any;
} & ViewProps;

const TextWithIcon = ({
    title,
    text,
    iconName,
    theme = 'primary',
    style,
}: TexhWhithIconProps) => {
    return (
        <View style={[styles(theme).container, style]}>
            <View style={styles(theme).iconContainer}>
                <Feather style={styles(theme).icon} name={iconName} />
            </View>
            {title && <Text style={styles(theme).title}>{title}</Text>}
            <Text style={styles(theme).text}>{text}</Text>
        </View>
    );
};

export default TextWithIcon;
