import { StyleSheet } from 'react-native';
import theme from '../../constants/theme';

export default (disabled = false) =>
    StyleSheet.create({
        button: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: theme.colors.white,
            borderWidth: 1.2,
            borderColor: theme.colors.darkBlue,
            borderRadius: 8,
            minHeight: 55,
            zIndex: 1,
            paddingHorizontal: 22,
            ...(disabled && {
                backgroundColor: theme.colors.disabled,
                borderColor: theme.colors.disabled,
            }),
        },
        buttonText: {
            flex: 1,
            fontSize: 16,
            color: theme.colors.darkBlue,
            ...(disabled && {
                color: theme.colors.lightGray,
            }),
        },
        icon: {
            color: theme.colors.darkBlue,
            ...(disabled && {
                color: theme.colors.disabled,
            }),
        },
    });
