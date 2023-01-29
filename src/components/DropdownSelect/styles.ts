import { StyleSheet } from 'react-native';
import theme from '../../constants/theme';

export default StyleSheet.create({
    dropdown: {
        position: 'absolute',
        backgroundColor: theme.colors.white,
        borderRadius: 8,
        ...theme.shadows.primary,
    },
    dropdownOptionsBox: {
        maxHeight: 190,
    },
    overlay: {
        width: '100%',
        height: '100%',
    },
    itemContainer: {
        padding: 16,
    },
    item: {
        color: theme.colors.darkBlue,
    },
    itemSeparator: {
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.darkBlue,
    },
});
