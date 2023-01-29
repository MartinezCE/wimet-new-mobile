import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import _theme from '../../constants/theme';

const iconGoogle = require('../../../assets/images/google.png');

export type ButtonIconProps = {
    name: any;
    size?: number;
    theme?: 'gray';
    onPress?: () => void;
    style?: any;
};

const ButtonSocialLogin = ({
    onPress,
    name,
    size,
    theme = 'gray',
    style,
}: ButtonIconProps) => {
    const styles = StyleSheet.create({
        buttonContainer: {
            width: 54,
            height: 54,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            ...(theme === 'gray' && {
                backgroundColor: _theme.colors.lighterGray,
            }),
        },
        buttonIcon: {
            ...(theme === 'gray' && {
                color: _theme.colors.lightGray,
            }),
        },
    });

    return (
        <TouchableOpacity onPress={onPress}>
            <View
                style={[styles.buttonContainer, _theme.shadows.primary, style]}
            >
                {name === 'google' ? (
                    <Image
                        source={iconGoogle}
                        style={{ marginLeft: 8, marginTop: 4 }}
                    />
                ) : (
                    <AntDesign
                        name={name}
                        size={size || 30}
                       // style={styles.buttonIcon}
                    />
                )}
            </View>
        </TouchableOpacity>
    );
};

export default ButtonSocialLogin;
