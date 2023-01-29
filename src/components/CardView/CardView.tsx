import { FC } from 'react';
import { TouchableOpacity, View, Text, Image, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import theme from '../../constants/theme';
import style from './styles';

const desk = require('../../../assets/images/escritorio.png');
const parking = require('../../../assets/images/parking.png');
const meetingroom = require('../../../assets/images/sala.png');
const privateOffice = require('../../../assets/images/private-office.png');

export type Props = {
    styleBtn?: any;
    color?: any;
    title?: string;
    detail?: string;
    type?: any;
    disabled?: boolean;
    onPress: () => void;
};

const CardView: FC<Props> = ({
    styleBtn,
    type,
    title,
    disabled,
    onPress,
    detail,
}) => {
    const img: any = {
        desk: desk,
        parking: parking,
        meetingroom: meetingroom,
        privateOffice: privateOffice,
    };

    const src = img[type];

    return (
        <ImageBackground source={src} style={{width:364,height:200}}>
            <TouchableOpacity
                style={[
                    style.container,
                    disabled && style.containerDisabled,
                    styleBtn,
                ]}
                onPress={!disabled ? onPress : () => {}}
                disabled={disabled}
            >
                <View >
                    <Text
                        style={{
                            fontWeight:'500',
                            fontSize:20,
                            color: theme.colors.darkBlue,
                            textAlign: 'left',
                            marginTop: 140,
                            marginLeft: 16,
                            lineHeight: 20,
                            fontStyle:'normal',
                            
                        }}
                    >
                        {title}
                        {/* {'\n'}
                        {detail} */}
                    </Text>
                </View>
            </TouchableOpacity>
        </ImageBackground>
    );
};
export default CardView;

function Icon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
    size: number;
}) {
    return <FontAwesome style={{ marginBottom: -35 }} {...props} />;
}
