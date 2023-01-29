import { StyleSheet } from 'react-native';
import _theme from '../../constants/theme';

export default (theme: string) =>
    StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },
        iconContainer: {
            width: 35,
            height: 35,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 6,
            padding: 5,
            marginRight: 12,
            ...(theme === 'primary' && {
                backgroundColor: _theme.colors.lighterBlue,
            }),
            ...(theme === 'secondary' && {
                backgroundColor: _theme.colors.white,
            }),
        },
        icon: {
            fontSize: 22,
            ...(theme === 'primary' && {
                color: _theme.colors.darkBlue,
            }),
        },
        title: {
            fontSize: 19,
            fontWeight: '700',
            marginRight: 8,
            ...(theme === 'primary' && {
                color: _theme.colors.darkBlue,
            }),
            ...(theme === 'secondary' && {
                color: _theme.colors.white,
            }),
        },
        text: {
            fontSize: 17,
            fontWeight: '400',
            ...(theme === 'primary' && {
                color: _theme.colors.darkBlue,
            }),
            ...(theme === 'secondary' && {
                color: _theme.colors.white,
            }),
        },
    });
