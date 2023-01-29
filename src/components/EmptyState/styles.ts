import { StyleSheet } from 'react-native';
import theme from '../../constants/theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.white,
        width: 326,
        height: 456,
        marginRight: 24,
        marginLeft: 22,
        marginBottom: 26,
        borderRadius: 40,
    },
    emotyStateImg: {
        width: 157.83,
        height: 123.7,
        left: 87,
        top: 180,
        right: 80,
    },
    emptyStateText: {
        textAlign: 'center',
        marginTop: 190,
    },
});

export default styles;
