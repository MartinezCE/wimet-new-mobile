import { StyleSheet } from 'react-native';
import theme from '../../constants/theme';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alingItems: 'flex-start',
        paddingLeft: 24,
        paddingTop: 24,
        borderRadius: 16,
        marginBottom: 16,
        shadowColor: 'black',
        
    },
    containerDisabled: {
        opacity: 0.5,
    },
});
export default styles;
