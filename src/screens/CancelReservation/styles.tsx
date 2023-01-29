import theme from '../../constants/theme';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: theme.colors.white,
    },
    containerInfo: {
        backgroundColor: theme.colors.white,
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    containerCard: {
        backgroundColor: theme.colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 34,
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        lineHeight: 29,
        marginTop: 48,
        marginLeft: 24,
        color: theme.colors.darkBlue,
    },
    card: {
        width: 364,
        height: 92,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginTop: 48,
        width: 380,
    },
    textIcon: {
        marginTop: 48,
    },
});
export default styles;
