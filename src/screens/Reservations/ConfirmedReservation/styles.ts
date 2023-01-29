import { StyleSheet } from 'react-native';
import theme from '../../../constants/theme';

export default StyleSheet.create({
    safeView: {
        width: '100%',
        height: '100%',
        backgroundColor: theme.colors.white,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        paddingHorizontal: 32,
        alignItems: 'center',
        padding: 32,
    },
    iconBackground: {
        padding: 20,
        borderRadius: 100,
        backgroundColor: 'rgba(209, 250, 223, 0.5)',
    },
    checkIconContainer: {
        borderColor: '#0DD268',
        borderWidth: 7,
        borderRadius: 100,
        padding: 12,
    },
    checkIcon: {
        color: '#0DD268',
        fontSize: 60,
    },
    title: {
        fontSize: 27,
        color: theme.colors.darkerBlue,
        textAlign: 'center',
        fontWeight: '500',
        marginBottom: 22,
        marginTop: 30,
    },
    text: {
        fontSize: 17,
        textAlign: 'center',
        paddingHorizontal: 18,
        color: theme.colors.darkGray,
    },
    separator: {
        borderBottomColor: theme.colors.gray,
        borderBottomWidth: 1,
        marginBottom: 30,
    },
    buttonContainer: {
        display: 'flex',
        width: 365,
        height: 130,
        marginTop: 72,
    },
    gapX: {
        marginHorizontal: 6,
    },
});
