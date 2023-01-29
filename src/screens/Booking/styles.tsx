import { Platform, StyleSheet } from 'react-native';
import theme from '../../constants/theme';

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 29,
    },
    reservationsScrollView: { borderRadius: 40, paddingTop: 22 },
    tabContainer: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 26,
        marginTop: 8,
    },
    tabWrapper: {
        borderBottomWidth: 2,
        borderBottomColor: theme.colors.blue,
        paddingTop: 26,
        width: '50%',
        ...(Platform.OS === 'android' && {
            marginBottom: 100,
        }),
    },
    buttonText: {
        color: '#15357A',
        fontSize: 18,
        textAlign: 'center',
        paddingBottom: 14,
    },
    inactiveTab: {
        opacity: 0.4,
    },
    reservationsContainer: {
        alignItems: 'center',
        paddingBottom: 13,
        marginBottom: 120,
    },
    title: {
        marginLeft: 26,
        fontSize: 27,
        fontWeight: '600',
        fontStyle: 'normal',
        lineHeight: 33,
        color: theme.colors.darkBlue,
    },
    cardContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        width: 372,
        height: 76,
        backgroundColor: '#F2F2F2',
        marginBottom: 23,
        borderRadius: 6,
    },
    ImgCardContainer: {
        backgroundColor: '#ADC6ED',
        borderRadius: 50,
        height: 56,
        width: 56,
        marginRight: 12,
        marginLeft: 14,
        marginTop: 10,
        marginBottom: 10,
    },
    textCardUser: {
        color: theme.colors.darkBlue,
        fontSize: 20,
        fontWeight: '500',
        lineHeight: 24,
        fontStyle: 'normal',
    },
    subTextCard: {
        color: '#15357A',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 17,
    },

    cardNextReservation: {
        width: 372,
        height: 674,
        backgroundColor: '#F2F2F2',
        borderRadius: 8,
    },
    titleNexReservation: {
        fontSize: 20,
        fontWeight: '300',
        lineHeight: 24,
        fontStyle: 'normal',
        marginTop: 29,
        marginLeft: 29,
        marginBottom: 12,
        color: ' #565656',
    },
});
export default styles;
