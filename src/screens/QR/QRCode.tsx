import BottomSheet from '@gorhom/bottom-sheet';
import React, { useCallback, useContext, useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Scanner from '../../components/Scanner/Scanner';
import { WebView } from 'react-native-webview';
import { AuthContext } from '../../contexts/AuthContext';

export default function QRCode() {
    const { userToken } = useContext(AuthContext);

    const [data, setData] = useState('Sin data');
    const [index, setIndex] = useState(-1);
    // ref
    const bottomSheetRef = useRef<BottomSheet>(null);
    // variables
    const snapPoints = React.useMemo(() => ['80%', '90%'], []);
    // callbacks
    const handleSnapPress = React.useCallback((index: any) => {
        bottomSheetRef.current?.snapToIndex(index);
        setIndex(-1);
    }, []);
    const handleClosePress = useCallback(() => {
        bottomSheetRef.current?.close();
    }, []);
    const onCodeScanned = (data: string | undefined) => {
        if (data?.includes('wimet.co')) {
            setData(data as string);
            /* if (data) */ setIndex(1);
        }
    };

    return (
        <View style={styles.container}>
            <Scanner onCodeScanned={onCodeScanned} />
            <BottomSheet
                ref={bottomSheetRef}
                index={index}
                enablePanDownToClose={true}
                snapPoints={snapPoints}
                onChange={handleSnapPress}
            >
                {data && (
                    <View style={{ width: '100%', height: '100%' }}>
                        <WebView
                            source={{
                                uri: data,
                                headers: {
                                    Authorization: userToken,
                                },
                            }}
                            style={{}}
                            userAgent="Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko"
                            originWhitelist={['*']}
                            allowFileAccess={true}
                            scalesPageToFit={true}
                            javaScriptEnabled={true}
                            thirdPartyCookiesEnabled={true}
                        />
                    </View>
                )}
            </BottomSheet>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
});
