import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 12,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    map: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    location: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    bottom: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    button: { borderRadius: 10, borderWidth: 2 },
});
export default style;
