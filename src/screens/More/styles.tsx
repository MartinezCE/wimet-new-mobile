import theme from '../../constants/theme';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: theme.colors.white,
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    title: {
        marginTop: 50,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'grey',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    icon: {
        marginRight: 20,
        marginTop: 50,
    },
});
export default styles;
