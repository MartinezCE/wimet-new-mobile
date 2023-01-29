import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import BottomSheet from '@gorhom/bottom-sheet';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useContext } from 'react';
import { useState } from 'react';
import { TouchableHighlight, Text, Dimensions } from 'react-native';
import { RootTabParamList } from '../../../types';
import ButtonImage from '../../components/Button/ButtonImage/ButtonImage';
import CardView from '../../components/CardView/CardView';
import theme from '../../constants/theme';
import Booking from '../../screens/Booking/Booking';
import EmptyView from '../../screens/EmptyView/EmptyView';
import More from '../../screens/More/More';
import QRCode from '../../screens/QR/QRCode';
import { ReservationType } from '../../services/api';
import HomeNavigator from '../Stack/StackHome';
import stylesBottomSheet from '../styles';
import { BookingContext } from '../../contexts/BookingContext';
import { BookingContextType } from '../../contexts/types';
import { View } from 'dripsy';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
    const [screenWidth, _setScreenWidth] = useState(
        Dimensions.get('window').width
    );
    const { setBookingType } = useContext(BookingContext) as BookingContextType;
    const [select, setSelect] = useState(false);
    const navigation = useNavigation();
    const bottomSheetRef = React.useRef<BottomSheet>(null);
    let color;
    // variables
    const snapPoints = React.useMemo(() => ['20%', '100%'], []);
    // callbacks
    const handleSnapPress = React.useCallback((index: any) => {
        bottomSheetRef.current?.snapToIndex(index);
    }, []);
    const handleClosePress = useCallback(() => {
        bottomSheetRef.current?.close();
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            return () => bottomSheetRef.current?.close();
        }, [])
    );

    return (
        <>
            <BottomTab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    tabBarActiveTintColor: theme.colors.darkBlue,
                    tabBarStyle: stylesBottomSheet.tabStyle,
                    tabBarInactiveTintColor: '#7d92c5',
                }}
            >
                <BottomTab.Screen
                    name="HomeInit"
                    component={HomeNavigator}
                    options={{
                        title: '',

                        tabBarIcon: ({ color }) => (
                            <View
                                sx={{ width: ['auto', null, 48] }}
                                style={{
                                    width: 'auto',
                                    height: 'auto',
                                    marginTop: 20,
                                }}
                            >
                                <Feather
                                    name="home"
                                    size={screenWidth > 430 ? 48 : 28}
                                    color={color}
                                />
                            </View>
                        ),
                    }}
                />
                <BottomTab.Screen
                    name="Booking"
                    component={Booking}
                    options={{
                        title: '',
                        tabBarIcon: ({ color }) => (
                            <View
                                sx={{
                                    marginRight: ['40%', null, null],
                                    width: ['auto', null, 48],
                                }}
                                style={{
                                    height: 'auto',
                                    marginTop: 20,
                                }}
                            >
                                <MaterialCommunityIcons
                                    name="calendar-text-outline"
                                    size={screenWidth > 430 ? 48 : 28}
                                    color={color}
                                />
                            </View>
                        ),
                    }}
                />
                <BottomTab.Screen
                    name="EmptyView"
                    component={EmptyView}
                    options={({ navigation }) => ({
                        tabBarButton: (props) => (
                            <TouchableHighlight
                                underlayColor={theme.colors.white}
                                onPress={() => {
                                    handleSnapPress(1), setSelect(false);
                                }}
                                style={stylesBottomSheet.tabPlus}
                            >
                                <View
                                    style={{
                                        borderRadius: 50,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                    sx={{
                                        width: [75, 75, 115],
                                        height: [75, 75, 115],
                                    }}
                                >
                                    <Feather
                                        name="plus"
                                        size={screenWidth > 430 ? 58 : 38}
                                        color={'#E5E5E5'}
                                    />
                                </View>
                            </TouchableHighlight>
                        ),
                    })}
                />
                <BottomTab.Screen
                    name="QRCode"
                    component={QRCode}
                    options={{
                        title: '',
                        tabBarIcon: ({ color }) => (
                            <View
                                sx={{
                                    marginLeft: ['45%', null, null],
                                    width: ['auto', null, 48],
                                }}
                                style={{
                                    width: 'auto',
                                    height: 'auto',
                                    marginTop: 20,
                                }}
                            >
                                <AntDesign
                                    name="scan1"
                                    size={screenWidth > 430 ? 48 : 28}
                                    color={color}
                                />
                            </View>
                        ),
                    }}
                />
                <BottomTab.Screen
                    name="More"
                    component={More}
                    options={{
                        title: '',
                        tabBarIcon: ({ color }) => (
                            <View
                                sx={{ width: ['auto', null, 48] }}
                                style={{
                                    marginTop: 20,
                                    width: 'auto',
                                    height: 'auto',
                                }}
                            >
                                <Feather
                                    name="menu"
                                    size={screenWidth > 430 ? 48 : 28}
                                    color={color}
                                />
                            </View>
                        ),
                    }}
                />
            </BottomTab.Navigator>

            <BottomSheet
                ref={bottomSheetRef}
                index={-1}
                snapPoints={snapPoints}
                onChange={handleSnapPress}
                enablePanDownToClose={true}
                handleIndicatorStyle={{
                    backgroundColor: select
                        ? theme.colors.grayTwo
                        : theme.colors.grayTwo,
                }}
                backgroundStyle={
                    select
                        ? {
                              borderRadius: 40,
                              backgroundColor: theme.colors.white,
                          }
                        : {
                              borderRadius: 40,
                              backgroundColor: theme.colors.white,
                          }
                }
            >
                <View
                    style={{ marginLeft: 24 }}
                    sx={{ marginTop: [60, 60, 60] }}
                >
                    {!select && (
                        <Text style={stylesBottomSheet.titleOne}>
                            ¿Donde desea reservar?
                        </Text>
                    )}
                    {select && (
                        <Text style={stylesBottomSheet.titleTwo}>
                            Seleccione una opción
                        </Text>
                    )}
                </View>
                <View style={stylesBottomSheet.contentContainer}>
                    {!select && (
                        <View style={{ flexDirection: 'column' }}>
                            <View
                                style={{
                                    marginTop: 33,
                                    alignItems: 'center',
                                    marginBottom: 20,
                                    marginLeft: 143,
                                    marginRight: 143,
                                }}
                                sx={{ marginTop :[null,null,200]}}
                            >
                                <ButtonImage
                                    styleBtn={stylesBottomSheet.buttonStyle}
                                    text="Mis oficinas"
                                    onPress={() => {
                                        setSelect(true);
                                    }}
                                />
                            </View>
                        </View>
                    )}

                    {select && (
                        <>
                            <CardView
                                type={'desk'}
                                color={theme.colors.darkBlue}
                                title="Escritorio"
                                detail="Espacios compartidos"
                                onPress={() => {
                                    setBookingType(ReservationType.SHARED);
                                    navigation.navigate('AddReservation');
                                    handleClosePress();
                                }}
                            />
                            <CardView
                                type={'meetingroom'}
                                color={theme.colors.darkBlue}
                                title="Sala de reuniones"
                                detail="Un espacio de encuentro"
                                onPress={() => {
                                    setBookingType(
                                        ReservationType.MEETING_ROOM
                                    );
                                    navigation.navigate('AddReservation');
                                    handleClosePress();
                                }}
                            />
                        </>
                    )}
                </View>
            </BottomSheet>
        </>
    );
}
