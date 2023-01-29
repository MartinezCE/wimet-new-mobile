import { StyleSheet } from 'react-native';
import theme from '../../../constants/theme';

export default StyleSheet.create({
    mainContainer: {
        height: '100%',
        backgroundColor: theme.colors.white,
        marginBottom: 100,
    },
    safeView: {
        backgroundColor: theme.colors.white,
        paddingHorizontal: 32,
        flex: 1,
    },
    header: {
        padding: 32,
        flexDirection: 'row',
    },
    goBackIcon: {
        color: theme.colors.darkBlue,
        marginBottom: 14,
    },
    position: {
        paddingHorizontal: 32,
    },
    title: {
        color: theme.colors.darkBlue,
        fontSize: 26,
        fontWeight: '600',
        marginLeft: 40,
    },
    separator: {
        backgroundColor: theme.colors.darkBlue,
        width: 30,
        height: 4,
        borderRadius: 100,
        marginVertical: 12,
    },
    subtitle: {
        marginLeft: 32,
        textAlign: 'left',
        color: theme.colors.darkBlue,
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 22,
    },
    webViewContainer: {
        height: 500,
    },
    webView: {
        minHeight: 700,
    },
    confirmButtonContainer: {
        marginVertical: 58,
        width: 335,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: theme.colors.darkBlue,
        backgroundColor: theme.colors.darkBlue,
        borderWidth: 2,
        borderRadius: 50,
        height: 72,
        marginBottom: 82,
    },
    iconMarkerContainer: {
        flexDirection: 'row',
        marginLeft: 22,
    },
    confirmtButtonText: {
        color: theme.colors.white,
        fontSize: 24,
        fontWeight: '500',
        marginLeft: 8,
        lineHeight: 29,
    },
    whiteIcon: {
        color: theme.colors.white,
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
