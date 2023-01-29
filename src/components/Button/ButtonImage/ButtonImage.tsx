import {
    TouchableOpacity,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import theme from '../../../constants/theme';
import {   View,} from 'dripsy'
const img = require('../../../../assets/images/misOficinas.png');
const image = { uri: 'https://reactjs.org/logo-og.png' };
export type ButtonProps = {
    text?: string;
    onPress?: () => void;
    theme?: 'primary' | 'secondary';
    disabled?: boolean;
    nameIcon?: string | any;
    sizeIcon?: number;
    colorIcon?: string;
    styleBtn?: any;
    styleText?: any;
    fullWidth?: boolean;
};

const ButtonImage = ({
    text,
    onPress,
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
            borderRadius: 16,
            width: 348,
            height: 144,
        },
        buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            padding: 16,
            borderRadius: 16,
        },
        buttonText: {
            textAlign: 'center',
            fontSize: 18,
            fontFamily: 'apercu-medium',
            color: theme.colors.darkBlue
        },
    });

    return (
        <View
        /*   style={{ backgroundColor: 'red' }}
            sx={{ width: [null, null, '180%'], height: [null, null, '70%'] }} */
        >
            <ImageBackground
                source={img}
                resizeMode="contain"
                style={{
                    justifyContent: 'center',
                    borderRadius: 50,
                    width: '100%',
                }}
            >
                <View
                    style={{ borderRadius: 16 }}
                    sx={{
                        width: [364, 364, 664],
                        height: [200, 200, 400],
                    }}
                >
                    <TouchableOpacity
                        onPress={!disabled ? onPress : () => {}}
                        disabled={disabled}
                        style={{
                            borderRadius: 16,
                            width: 364,
                            height: 200,
                        }}
                    >
                        <View
                            style={
                                !styleBtn ? styles.buttonContainer : styleBtn
                            }
                        >
                            <Text
                                style={
                                    !styleText ? styles.buttonText : styleText
                                }
                            >
                                {text}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

export default ButtonImage;
