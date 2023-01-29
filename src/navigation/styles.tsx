import { Platform, StyleSheet } from 'react-native';
import theme from '../constants/theme';

const stylesBottomSheet = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'grey',
        width: 124,
    },
    contentContainer: {
        /* flex: 1, */
        alignItems: 'center',
    },
    titleOne: {
        color: '#0A083B',
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 48,
        textAlign: 'left',
    },
    titleTwo: {
        textAlign: 'left',
        color: '#0A083B',
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 48,
    },
    textInputContainer: {
        marginLeft: 142,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#9BB9FF',
        borderRadius: 16,
        width: 348,
        height: 144,
        justifyContent: 'center',
        marginRight: 103,
    },
    textInput: {
        color: theme.colors.white,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '400',
        display: 'flex',
        flexDirection: 'row',
    },
    tabPlus: {
        top: Platform.OS === 'ios' ? '-65%' : '-25%',
        left: '42%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.lightBlue,
        borderRadius: 50,
        width: 'auto',
        height: 'auto',
        position: 'absolute',
        shadowOffset: { width: 0.1, height: 8 },
        shadowColor: 'grey',
        shadowOpacity: 0.2,
        shadowRadius: 0.1,
    },
    tabStyle: {
        backgroundColor: theme.colors.white,
        width: '100%',
        height: 92,
        position: 'absolute',
    },
    buttonStyle: {
        flexDirection: 'row',
        marginTop: 150,
        marginLeft: 30,
    },
});
export default stylesBottomSheet;
