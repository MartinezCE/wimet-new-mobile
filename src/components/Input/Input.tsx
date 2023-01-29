import {
    TextInput,
    View,
    Text,
    TextInputProps,
    StyleSheet,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import _theme from '../../constants/theme';

export type InputProps = {
    value: string;
    theme?: 'default' | 'one-line';
    placeholder?: string;
    errorMsg?: string;
    successMsg?: string;
    bottomMsg?: string;
    rightIcon?: React.ReactNode;
    leftIcon?: React.ReactNode;
};

const Input = ({
    value,
    theme = 'default',
    placeholder,
    errorMsg,
    successMsg,
    bottomMsg,
    rightIcon,
    leftIcon,

    ...props
}: InputProps & TextInputProps) => {
    const hasValidations = successMsg || errorMsg;

    const toggleValidationColors = successMsg
        ? _theme.colors.green
        : _theme.colors.red;

    const style = StyleSheet.create({
        wrapper: {
            marginBottom: 16,
        },
        inputContainer: {
            height: 50,
            flexDirection: 'row',
            marginBottom: 6,
            ...(theme === 'default' && {
                borderWidth: 0.5,
                paddingHorizontal: 12,
                ...(hasValidations && {
                    borderColor: toggleValidationColors,
                }),
            }),
            ...(theme === 'one-line' && {
                borderBottomColor: 'gray',
                borderBottomWidth: 1,
                ...(hasValidations && {
                    borderBottomColor: toggleValidationColors,
                }),
            }),
        },
        input: {
            fontSize: value ? 20 : 18,
            color: _theme.colors.darkBlue,
            fontWeight: value ? '600' : '400',
            minWidth: '90%',
            ...(rightIcon && {
                maxWidth: '90%',
            }),
        },
        bottomTextContainer: {
            flexDirection: 'row',
            minHeight: 30,
            alignItems: 'center',
        },
        bottomText: {
            marginLeft: 5,
            fontSize: 15,
            color: _theme.colors.darkGray,
            ...(hasValidations && {
                color: toggleValidationColors,
            }),
        },
        bottomIcon: {
            color: toggleValidationColors,
        },
    });

    return (
        <View style={style.wrapper}>
            <View style={style.inputContainer}>
                {leftIcon && leftIcon}
                <TextInput
                    style={style.input}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={_theme.colors.lightGray}
                    {...props}
                />
                {rightIcon && rightIcon}
            </View>
            <View style={style.bottomTextContainer}>
                {hasValidations && (
                    <AntDesign
                        style={style.bottomIcon}
                        name={successMsg ? 'checkcircle' : 'exclamationcircle'}
                        size={18}
                    />
                )}
                <Text style={style.bottomText}>
                    {errorMsg || successMsg || bottomMsg}
                </Text>
            </View>
        </View>
    );
};

export default Input;
