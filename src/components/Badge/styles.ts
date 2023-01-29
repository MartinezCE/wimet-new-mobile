import { StyleSheet } from 'react-native';
import theme from '../../constants/theme';

export default (selected = false) =>
    StyleSheet.create({
        container: {
            paddingHorizontal: 20,
            paddingVertical: 4,
            alignSelf: 'flex-start',
            borderRadius: 8,
            backgroundColor: !selected
                ? theme.colors.lighterGray
                : theme.colors.lightGreen,
        },
        text: {
            color: theme.colors.darkBlue,
            fontSize: 16,
        },
    });
