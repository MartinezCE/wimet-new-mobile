import { Alert } from 'react-native';

type AlertActions = {
    text: string;
    onPress?: () => void;
    style?: any;
};

export const customAlert = ({
    title,
    msg,
    options,
}: {
    title: string;
    msg: string;
    options: AlertActions[];
}) => Alert.alert(title, msg, options);
