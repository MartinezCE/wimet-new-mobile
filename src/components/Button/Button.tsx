import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import _theme from '../../constants/theme';
import { EvilIcons } from '@expo/vector-icons';

export type ButtonProps = {
    text?: string;
    onPress?: () => void;
    theme?: 'primary' | 'secondary' | 'tertiary';
    type?: 'danger';
    disabled?: boolean;
    nameIcon?: string | any;
    sizeIcon?: number;
    colorIcon?: string;
    styleBtn?: any;
    styleText?: any;
    fullWidth?: boolean;
};

const Button = ({
    text,
    onPress,
    theme = 'primary',
    type,
    disabled,
    nameIcon,
    sizeIcon,
    colorIcon,
    styleBtn,
    styleText,
    fullWidth,
}: ButtonProps) => {
    const styles = StyleSheet.create({
        touchableContainer: {
            flex: 1,
        },
        buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            padding: 16,
            borderRadius: 12,
            ...(theme === 'primary' && {
                backgroundColor: _theme.colors.blue,
            }),
            ...(theme === 'secondary' && {
                backgroundColor: _theme.colors.darkBlue,
            }),
            ...(theme === 'tertiary' && {
                backgroundColor: _theme.colors.white,
                borderColor: _theme.colors.lightGray,
                borderWidth: 1,
            }),
            ...(theme === 'tertiary' &&
                type === 'danger' && {
                    borderColor: _theme.colors.red,
                }),
            ...(disabled && {
                backgroundColor: _theme.colors.lightGray,
            }),
        },
        buttonText: {
            textAlign: 'center',
            fontSize: 18,
            fontFamily: 'apercu-medium',
            ...(theme === 'primary' && { color: _theme.colors.white }),
            ...(theme === 'secondary' && { color: _theme.colors.white }),
            ...(theme === 'tertiary' && { color: _theme.colors.darkerBlue }),
            ...(theme === 'tertiary' &&
                type === 'danger' && { color: _theme.colors.red }),
        },
    });

    return (
        <TouchableOpacity
            onPress={!disabled ? onPress : () => {}}
            disabled={disabled}
            style={fullWidth && styles.touchableContainer}
        >
            <View style={!styleBtn ? styles.buttonContainer : styleBtn}>
                {nameIcon && (
                    <EvilIcons
                        name={nameIcon}
                        size={sizeIcon || 30}
                        color={colorIcon || _theme.colors.white}
                    />
                )}
                <Text style={!styleText ? styles.buttonText : styleText}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default Button;
