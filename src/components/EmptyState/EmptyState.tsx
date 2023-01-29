import { View, Image, Text } from 'react-native';
import styles from './styles';

const img = require('../../../assets/images/empty.png');

const EmptyState = ({ text }: { text: string }) => (
    <View style={styles.container}>
        <Image style={styles.emotyStateImg} source={img} />
        <Text style={styles.emptyStateText}>{text}</Text>
    </View>
);

export default EmptyState;
