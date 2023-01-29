import { StyleSheet } from 'react-native';
import theme from '../../constants/theme';

const styles = StyleSheet.create({
    container: {
        width: 364,
        height: 92,
        borderRadius: 16,
        backgroundColor: 'white',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.29,
        shadowRadius: 9,
        shadowColor: 'grey',
        elevation: 20,
    },
    wrapText: {
        marginLeft: 24,
        marginTop: 24,
    },
    dayText: {
        color: theme.colors.darkBlue,
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 17,
        lineHeight: 21,
    },
    monthText: {
        color: theme.colors.darkBlue,
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 17,
        lineHeight: 21,
    },

    touchCheckIn: {
        backgroundColor: theme.colors.blue,
        position: 'absolute',
        marginLeft: 206,
        marginRight: 16,
        marginTop: 5,
        marginBottom: 66,
        borderRadius: 8,
        width: 106,
        height: 33,
        alignItems: 'center',
    },
    textCheckIn: {
        textAlign: 'center',
        color: theme.colors.white,
        marginTop: 7,
        marginBottom: 7,
        marginLeft: 11,
        marginRight: 11,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 19,
    },
});
export default styles;
