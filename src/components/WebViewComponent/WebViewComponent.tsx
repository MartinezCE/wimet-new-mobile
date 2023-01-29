import React, { FC } from "react";
import { View } from "react-native";
import WebView from "react-native-webview";

export type Props = {
    data: any;
};

const WebViewComponent:  FC<Props> =({data} )=>{
    return (
        <View>
            <WebView
                source={{ uri: `${data}` }}
                userAgent="Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko"
                originWhitelist={['*']}
                javaScriptEnabled={true}
                thirdPartyCookiesEnabled={true}
            />
        </View>
    );
}
export default  WebViewComponent