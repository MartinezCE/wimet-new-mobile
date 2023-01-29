import { StyleSheet } from 'react-native';
import theme from '../../../constants/theme';

export default StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: theme.colors.white,
        paddingBottom: 60,
    },
    header: {
        flexDirection: 'row',
        marginBottom: 80,
        marginTop: 20,
        marginLeft: 32,
    },
    container: {
        backgroundColor: theme.colors.darkBlue,
        borderRadius: 24,
        paddingHorizontal: 8,
        paddingVertical: 22,
        width: '100%',
        height: '100%',
    },
    title: {
        color: theme.colors.darkBlue,
        fontSize: 24,
        fontWeight: '500',
        marginLeft: 32,
    },
    text: {
        marginTop: 48,
        marginLeft: 32,
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 22,
        marginTop: 68,
    },
    gapX: {
        marginHorizontal: 6,
    },
});
