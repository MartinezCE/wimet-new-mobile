import { StyleSheet } from 'react-native';
import theme from '../../../constants/theme';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: theme.colors.white,
        paddingBottom: 60,
    },
    safeView: {
        backgroundColor: theme.colors.white,
        flex: 1,
    },
    header: { marginLeft: 32, flexDirection: 'row', marginBottom: 41 },
    goBackIcon: {
        color: theme.colors.darkBlue,
    },
    title: {
        color: theme.colors.darkBlue,
        fontSize: 24,
        fontWeight: '600',
        marginRight: 91,
        marginLeft: 40,
    },
    titleType: {
        marginLeft: 32,
        color: theme.colors.darkBlue,
        fontSize: 26,
        fontWeight: '600',
        marginRight: 91,
    },
    separator: {
        backgroundColor: theme.colors.darkBlue,
        width: 30,
        height: 4,
        borderRadius: 100,
        marginTop: 11,
        marginBottom: 34,
        marginLeft: 32,
    },
    formContainer: {
        justifyContent: 'space-between',
        backgroundColor: theme.colors.darkBlue,
        borderRadius: 24,
        paddingHorizontal: 32,
        paddingVertical: 22,
        width: '100%',
        height: '100%',
    },
    inputContainer: {
        justifyContent: 'space-around',
        marginBottom: 22,
        flex: 1,
    },
    formLabel: {
        marginBottom: 10,
        color: theme.colors.white,
        fontSize: 18,
        fontWeight: '700',
    },
    timeOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 12,
    },
    timpeOptionsItem: {
        marginLeft: 10,
    },
    pickPlaceButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: theme.colors.darkBlue,
        borderWidth: 2,
        borderRadius: 50,
        backgroundColor: theme.colors.lightBlue,
        height: 72,
        marginTop: 50,
        marginBottom: 48,
    },
    pickPlaceButtonDisabled: {
        opacity: 0.3,
    },
    markerContainer: {
        flexDirection: 'row',
        marginLeft: 22,
        //  backgroundColor: theme.colors.white,
    },
    pickPlaceButtonText: {
        color: theme.colors.white,
        fontSize: 24,
        fontWeight: '500',
        marginLeft: 8,
        lineHeight: 29,
    },
    blueIcon: {
        color: theme.colors.white,
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export const DatePickerStyles = StyleSheet.create({
    container: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 10,
    },
    resourceNumber: {
        fontSize: 18,
        fontWeight: '600',
        marginRight: 4,
        color: theme.colors.darkBlue,
    },
    recourseText: {
        fontSize: 16,
        fontStyle: 'italic',
        color: theme.colors.darkBlue,
    },
    resourceIcon: {
        marginRight: 8,
    },
});

export const DatePickerStatus = {
    primary: theme.colors.darkBlue,
    available: theme.colors.green,
    notAvailable: theme.colors.red,
};
