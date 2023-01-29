import { StyleSheet } from 'react-native';
import theme from '../../constants/theme';

const styles = StyleSheet.create({
    container: {
        /* flex: 1, */
        alignItems: 'center',
        justifyContent: 'center',
      //  marginTop: 29,
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
       // width: 372,
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
     //   width: 372,
       // height: 574,
        backgroundColor: '#F2F2F2',
        borderRadius: 6,
    },
    titleNextReservation: {
        fontSize: 20,
        fontWeight: '300',
        lineHeight: 24,
        fontStyle: 'normal',
        marginTop: 29,
        marginLeft: 29,
        marginBottom: 12,
        color: ' #565656',
    },
    noReservation: {
        alignItems: 'center',
        paddingBottom: 13,
        marginBottom: 120,
    },
});
export default styles;
